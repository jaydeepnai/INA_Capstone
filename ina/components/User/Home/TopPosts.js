import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

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
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                        width: 39,
                        height: 40,
                        marginRight: 11,
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
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                        width: 19,
                        height: 20,
                    }}
                />
            </View>
            <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                    borderRadius: 10,
                    height: 243,
                    marginBottom: 19,
                    marginHorizontal: 32,
                }}
            />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                    marginHorizontal: 42,
                }}>
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                        width: 29,
                        height: 30,
                        marginRight: 13,
                    }}
                />
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                        width: 29,
                        height: 30,
                        marginRight: 13,
                    }}
                />
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                        width: 29,
                        height: 30,
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        alignSelf: "stretch",
                    }}>
                </View>
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                        width: 29,
                        height: 30,
                    }}
                />
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