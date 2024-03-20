import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { api_domain } from "../../../lib/React Query/variables";


const TopPosts = () => {
    const  navigation = useNavigation();     
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Using axios to fetch data
                const response = await axios.get(api_domain + '/getAllPost');
                setPosts(response.data); // Axios automatically parses the JSON response
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };

        fetchPosts();
    }, []);  // The empty array means this effect runs once on mount



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
                posts.map((post,index) => <Post posts={posts} post={post} setPosts={setPosts} index={index} />)

            }
        </View>
    )
}
export default TopPosts

const styles = StyleSheet.create({});



// export const likeCount = (posts,post,setPosts,index)=>{



//     likeIdx = -1
//     likedPost = post.likes

//     likedPost.map((elm,i) =>{
//         if (elm.userId == '65e54aa01902bb044dceaa62') {
//             likeIdx = i
//         }
//     })


//     if (likeIdx == -1) {
//         obj ={
//             _id:post._id,
//             userId:"65e54aa01902bb044dceaa62"
//         }
//         likedPost.push(obj)
    
//         fakePosts = posts
//         fakePosts[index].likes =  likedPost
//         setPosts(fakePosts)
        
//     }
//     else{
//         fakePosts = posts
//         delete likedPost[likeIdx]
//         fakePosts[index].likes =  likedPost
//         setPosts(fakePosts);
//     }

// }   



export const likeCount = (posts, post, setPosts, index) => {
    const userId = "65e54aa01902bb044dceaa62";

    // Check if the user has already liked the post
    const alreadyLikedIndex = post.likes.findIndex(item => item.userId === userId);

    // Create a copy of the post's likes array
    const newLikes = [...post.likes];

    if (alreadyLikedIndex === -1) {
        // If the user hasn't liked the post yet, add their like
        newLikes.push({ _id: post._id, userId });

        // Create a copy of the posts array
        const newPosts = [...posts];

        // Update the likes array for the specific post
        newPosts[index] = { ...post, likes: newLikes };

        // Update the state with the new posts array
        setPosts(newPosts);
    } else {
        // If the user has already liked the post, remove their like
        newLikes.splice(alreadyLikedIndex, 1);

        // Create a copy of the posts array
        const newPosts = [...posts];

        // Update the likes array for the specific post
        newPosts[index] = { ...post, likes: newLikes };

        // Update the state with the new posts array
        setPosts(newPosts);
    }
}

export const Post = ({posts, post,setPosts,index }) => {
    const navigation  = useNavigation();    

    
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
                        borderRadius: 50,
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
                resizeMode="cover"
                style={{
                    borderRadius: 10,
                    height: 200,
                    width: "83%",
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

                <TouchableOpacity onPress={ ()=> likeCount(posts,post,setPosts,index)}>

                    <AntDesign style={{marginHorizontal:5}} name="heart" size={24} color="red" />

                </TouchableOpacity>
                
                
                <TouchableOpacity
                    // onPress={() => navigation.navigate("Post_Comments")}
                    >
                <FontAwesome5 style={{marginHorizontal:5}} name="comment" size={24} color="black" />
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
                {post.likes?.length + " likes"}
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