import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TopNGOList = () => {
    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: 15,
                    marginTop: 0
                }}>
                <NGOCard />
                <NGOCard />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: 15,
                    marginTop: 0
                }}>
                <NGOCard />
                <NGOCard />
            </View>
        </View>
    )
}

export default TopNGOList

const styles = StyleSheet.create({})


const NGOCard = () => {
    const navigation =useNavigation() 
    const handelClick = ()=>{
        // console.log("first")
        navigation.navigate("NGOProfile")
    }
    return (      
        <TouchableOpacity 
        // onclick={() => navigation.navigate("NGOProfile") }
        onPress={handelClick }
            style={{
                width: "48%",
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                paddingTop: 6,
                paddingBottom: 16,
                shadowColor: "#00000040",
                shadowOpacity: 0.3,
                shadowOffset: {
                    width: 0,
                    height: 0
                },
                overflow: "hidden",
                shadowRadius: 4,
                elevation: 4,
            }}>
            <ImageBackground
                source={require("../../../assets/NGO/top2.png")}
                resizeMode="cover"
                style={{
                    height: 100,
                    width:"100%",
                    borderRadius:50,
                    top:-10
                }}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 6,
                    marginHorizontal: 6,
                }}>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 16,
                    }}>
                    {"OPAD"}
                </Text>
                <View
                    style={{
                        width: 92,
                        alignItems: "center",
                        backgroundColor: "#A4EC2880",
                        borderRadius: 30,
                        paddingVertical: 8,
                    }}>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 13,
                        }}>
                        {"10am - 6pm"}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 7,
                    marginHorizontal: 14,
                }}>
                <Image
                    source={require("../../../assets/NGO/location.png")}
                    resizeMode={"stretch"}
                    style={{
                        width: 17,
                        height: 18,
                        marginRight: 10,
                    }}
                />
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 10,
                    }}>
                    {"Brooklyn Park"}
                </Text>
                <View
                    style={{
                        flex: 1,
                        alignSelf: "stretch",
                    }}>
                </View>
                <Image
                    source={require("../../../assets/NGO/star.png")}
                    resizeMode={"stretch"}
                    style={{
                        width: 13,
                        height: 13,
                        marginRight: 8,
                    }}
                />
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 12,
                    }}>
                    {"5.0"}
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 23,
                }}>
                <ImageBackground
                    source={require("../../../assets/NGO/profile.png")}
                    resizeMode={'stretch'}
                    style={{
                        width: 19,
                        alignItems: "center",
                        paddingVertical: 8,
                    }}
                >
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 8,
                        }}>
                        {"+9"}
                    </Text>
                </ImageBackground>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 14,
                    }}>
                    {"Resources"}
                </Text>
                <Image
                    source={require("../../../assets/NGO/profile.png")}
                    resizeMode={"stretch"}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: 19,
                        height: 20,
                    }}
                />
                <Image
                    source={require("../../../assets/NGO/profile.png")}
                    resizeMode={"stretch"}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 3,
                        width: 19,
                        height: 20,
                    }}
                />
                <Image
                    source={require("../../../assets/NGO/profile.png")}
                    resizeMode={"stretch"}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 15,
                        width: 19,
                        height: 20,
                    }}
                />
                <Image
                    source={require("../../../assets/NGO/profile.png")}
                    resizeMode={"stretch"}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 18,
                        width: 19,
                        height: 20,
                    }}
                />
                <Image
                    source={require("../../../assets/NGO/profile.png")}
                    resizeMode={"stretch"}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 30,
                        width: 19,
                        height: 20,
                    }}
                />
                <Image
                    source={require("../../../assets/NGO/profile.png")}
                    resizeMode={"stretch"}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 32,
                        width: 19,
                        height: 20,
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}