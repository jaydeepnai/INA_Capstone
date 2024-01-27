import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Categories = ({}) => {
    const navigation = useNavigation()
    return (
        <>
        <View style={{flexDirection:"row",justifyContent:"space-between",
                alignItems: "center",}}>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 20,
                    marginBottom: 7,
                    marginHorizontal: 23,
                }}>
                {"TOP CATEGORIES"}
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Categories")}>
            <Text style={{
                textAlign: "center",
                marginRight:20,
                color: "green",
            }}>
                See All
            </Text>
            </TouchableOpacity>

        </View>
            <ScrollView horizontal
                style={{
                    marginBottom: 24,
                    marginHorizontal: 5,
                }}>
                <View
                    style={{
                        width: "auto",
                        height: 112,
                        flexDirection: "row",
                        paddingTop: 38,
                        paddingBottom: 6,
                        paddingLeft: 16,
                        paddingRight: 64,
                    }}>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 60,
                            margin:10
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 35,
                                paddingTop: 36,
                                paddingBottom: 19,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 13,
                                }}>
                                {"Animal"}
                            </Text>
                        </View>
                        <Image
                            source={ require("../../../assets/NGO/dog.png")}
                            resizeMode={"stretch"}
                            style={{
                                position: "absolute",
                                top: -25,
                                right: 2,
                                width: 65,
                                height: 63,
                            }}
                        />
                    </View>
                    
                </View>
            </ScrollView>
        </>
    )
}

export default Categories

const styles = StyleSheet.create({})