import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign, EvilIcons, Feather, FontAwesome5 } from '@expo/vector-icons';

const TopPosts = () => {
    return (
        <View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 31,
                marginHorizontal: 33,
            }}>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 20,
                        marginRight: 4,
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
            <Post/>
            <Post/>
            <Post/>
        </View>
    )
}

export default TopPosts

const styles = StyleSheet.create({})


export const Post = ()=>{
    return (
        <View>
               <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
                marginHorizontal: 32,
            }}>
                <Image
                    source={require("../../../assets/profile.jpg")}
                    resizeMode="cover"
                    style={{
                        width: 39,
                        height: 40,
                        marginRight: 11,
                        borderRadius:50
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
                source={require("../../../assets/NGO/post3.jpg")}
                resizeMode="contain"
                style={{
                    borderRadius: 10,
                    height:200,
                    width: "83%",
                    backgroundColor:"red",
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
                <FontAwesome5 style={{marginHorizontal:5}} name="comment" size={24} color="black" />
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
                {"398 likes"}
            </Text>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 16,
                    marginBottom: 29,
                    marginHorizontal: 42,
                }}>View all 89 comments
            </Text>
        </View>
    )
}