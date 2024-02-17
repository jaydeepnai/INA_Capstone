import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, EvilIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const  navigation = useNavigation();    import axios from 'axios';

const TopPosts = () => {

    const [posts, setPosts] = useState([]);

    console.log(posts)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Using axios to fetch data
                const response = await axios.get('http://192.168.33.127:3000/getAllPost');
                setPosts(response.data); // Axios automatically parses the JSON response
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };

        fetchPosts();
    }, []); // The empty array means this effect runs once on mount


    return (
        <View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                marginHorizontal: 15,
            }}>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 20,
                        margin: 10,
                        flex: 1,
                    }}>
                    {"TOP POST FROM NGOs "}
                </Text>
                <Text
                    style={{
                        color: "#679D0A",
                        fontSize: 12,
                    }}>
                    See All
                </Text>
            </View>
            {
                posts.map((post, index) => <Post post={post} />)
            }
        </View>
    )
}

export default TopPosts

const styles = StyleSheet.create({})


export const Post = ({ post }) => {

    console.log("post", post)
    return (
        <View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
                marginHorizontal: 32,
            }}>
                <Image
                    source={{ uri: post?.image }}
                    resizeMode="cover"
                    style={{
                        width: 39,
                        height: 40,
                        marginRight: 11,
                        borderRadius: 50
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        marginRight: 4,
                    }}>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 16,
                            marginBottom: 7,
                            marginHorizontal: 2,
                        }}>
                        {"opad_ngo"}
                    </Text>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 12,
                        }}>
                        {"Vaccination of Animals  "}
                    </Text>
                </View>
                <Feather name="more-vertical" size={24} color="black" />
            </View>
            <Image
                source={{ uri: post?.image }}
                resizeMode="contain"
                style={{
                    borderRadius: 10,
                    height: 200,
                    width: "83%",
                    backgroundColor: "red",
                    marginBottom: 10,
                    marginHorizontal: 32,
                }}
            />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5,
                    marginHorizontal: 42,
                }}>
                <AntDesign style={{marginHorizontal:5}} name="heart" size={24} color="red" />
                
                <TouchableOpacity
                    onPress={() => navigation.navigate("Post_reivew")}>
                <FontAwesome5  style={{marginHorizontal:5}} name="comment" size={24} color="black" />
                {/* <View>
                    <Text>
                        {"naishal modi"}
                    </Text>
                </View> */}
                </TouchableOpacity>

                
                    
                <AntDesign name="sharealt" style={{marginHorizontal:5}} size={24} color="black" />

                <View
                    style={{
                        flex: 1,
                        alignSelf: "stretch",
                    }}>
                </View>
                <AntDesign name="star" size={24} color="black" />
            </View>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 16,
                    marginBottom: 7,
                    marginHorizontal: 46,
                }}>
                {post.content}
            </Text>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 16,
                    marginBottom: 7,
                    marginHorizontal: 46,
                }}>
                {"398 likes"}
            </Text>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 16,
                    marginBottom: 29,
                    marginHorizontal: 42,
                }}>View all 80 comments
            </Text>
        </View>
    )
}