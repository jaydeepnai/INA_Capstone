import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import * as Progress from 'react-native-progress';
import TopAchieverNGO from '../../../components/NGO/Home/TopAchieverNGO'
import { getFontSize, responsiveMargin } from '../../../lib/Validation/RelativeValues'
import NGOCategories from '../../../components/NGO/Home/NGOCategories'
import { Events } from '../../../components/User/Home/EventCarousel'
import { useNavigation } from '@react-navigation/native';



const Trending = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#ffffff",
                    paddingBottom: 300,
                }}>
                <Events />

                <NGOCategories />


                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: responsiveMargin(2),
                        marginHorizontal: 20,
                    }}>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: getFontSize(20),
                            marginRight: 4,
                            fontWeight: "bold",
                            flex: 1,
                        }}>
                        {"TOP ACHIEVERS "}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("NGOResult");
                    }}>
                        <Text
                            style={{
                                color: "#679D0A",
                                fontSize: getFontSize(12),
                            }}>
                            {"See All"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TopAchieverNGO />
                <View>

                    <Text
                        style={{
                            color: "#000000",
                            fontSize: getFontSize(20),
                            fontWeight: "bold",
                            marginLeft: 29,
                        }}>
                        {"FUND RAISED"}
                    </Text>

                    <View
                        style={{
                            marginBottom: 24,
                            marginHorizontal: 12,
                        }}>
                        <View
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: 20,
                                paddingTop: 19,
                                paddingBottom: 8,
                                shadowColor: "#00000040",
                                shadowOpacity: 0.3,
                                shadowOffset: {
                                    width: 0,
                                    height: 4
                                },
                                shadowRadius: 4,
                                elevation: 4,
                            }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: responsiveMargin(2),
                                    marginHorizontal: 9,
                                }}>
                                <Image
                                    source={require("../../../assets/profile.jpg")}
                                    resizeMode={"cover"}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 100,
                                        marginRight: 13,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: getFontSize(16),
                                        flex: 1,
                                    }}>
                                    {"Smile foundation"}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                    marginBottom: 15,
                                    marginHorizontal: 21,
                                    width: 364,
                                }}>
                                {"Help Little Padma Saranya Dance Back to \nHealth!"}
                            </Text>
                            <Image
                                source={require("../../../assets/ngo_event4.jpg")}
                                style={{
                                    borderRadius: 20,
                                    height: 180,
                                    width: 320,
                                    marginBottom: 26,
                                    marginHorizontal: responsiveMargin(2.5),
                                    marginRight: 70,
                                }}
                            />


                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                    marginBottom: responsiveMargin(6),
                                    marginLeft: 30,
                                }}>
                                {"₹ 49,210 raised of ₹ 60,500"}
                            </Text>

                        <View style={{
                            alignItems:'center',
                            marginBottom:responsiveMargin(6)
                        }}>
                            {/* <Progress.Bar progress={0.7} width={350} /> */}
                        </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 8,
                                    marginHorizontal: 20,
                                }}>
                                <Image
                                    source={require("../../../assets/clock.png")}
                                    resizeMode={"cover"}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        marginRight: 10,
                                        borderRadius: 100,
                                        marginBottom: 10,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: getFontSize(16),
                                    }}>
                                    {"12 days left"}
                                </Text>
                                <View
                                    style={{
                                        flex: 1,
                                        alignSelf: "stretch",
                                    }}>
                                </View>
                                <Image
                                    source={require("../../../assets/vol2.png")}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        marginRight: 12,
                                        borderRadius: 100,
                                        marginBottom: 10,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: getFontSize(16),
                                    }}>
                                    {"Volunteers"}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 8,
                                    marginHorizontal: 20,
                                }}>
                                <Image
                                    source={require("../../../assets/share.png")}
                                    resizeMode={"cover"}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        marginRight: 10,
                                        borderRadius: 100,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: getFontSize(16),
                                    }}>
                                    {"Share"}
                                </Text>
                                <View
                                    style={{
                                        flex: 1,
                                        alignSelf: "stretch",
                                    }}>
                                </View>
                                <Image
                                    // source={require("../../../assets/family.jpg")}
                                    // resizeMode={"stretch"}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        marginRight: 12,
                                        borderRadius: 100,
                                        marginRight: 12,
                                    }}
                                />
                                {/* <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: getFontSize(16),
                                        marginRight: 36,
                                    }}>
                                    {"cover"}
                                </Text> */}
                            </View>
                            {/* <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginHorizontal: 7,
                                }}>
                                <View
                                    style={{
                                        width: 152,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        backgroundColor: "#ffffff",
                                        borderRadius: 20,
                                        paddingVertical: 16,
                                        paddingHorizontal: 11,
                                        marginRight: 137,
                                        justifyContent: "flex-start"
                                    }}>
                                    <Image
                                        source={require("../../../assets/family.jpg")}
                                        resizeMode={"stretch"}
                                        style={{
                                            borderRadius: 100,
                                            width: 40,
                                            height: 40,
                                            marginRight: 24,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: "#000000",
                                            fontSize: getFontSize(16),
                                            flex: 1,
                                        }}>
                                        {"Share"}
                                    </Text>
                                </View>
                                <Image
                                    source={require("../../../assets/family.jpg")}
                                    resizeMode={"cover"}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 100
                                    }}
                                />
                            </View> */}
                        </View>
                    </View>
                </View>




                <Text
                    style={{
                        color: "#000000",
                        fontSize: 20,
                        fontWeight: "bold",
                        marginBottom: 5,
                        marginLeft: 20,
                    }}>
                    {"ACHIVERMENTS OF THE MONTH"}
                </Text>
                <View
                    style={{
                        marginHorizontal: 13,
                    }}>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderRadius: 15,
                            paddingVertical: 14,
                        }}>
                        <View
                            style={{
                                width: 330,
                                height: 330,
                                backgroundColor: "#f2f3f7",
                                borderColor: "#d9d9d9",
                                borderRadius: 20,
                                borderWidth: 1,
                                paddingVertical: 11,
                                paddingHorizontal: 10,
                                marginBottom: 8,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 12,
                                    width: 308,
                                }}>
                                {"Lorem Ipsum is simply dummy text of the printing \nand typesetting industry. Lorem Ipsum has been \nthe industry's standard dummy text ever since the \n1500s, when an unknown printer took a galley of type\nand scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, READ MORE"}
                            </Text>
                        </View>

                        {/* <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 11,
                                marginHorizontal: 3,
                            }}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginRight: 17,
                                }}
                            />
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginRight: 17,
                                }}
                            />
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 20,
                                    height: 20,
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
                                    width: 20,
                                    height: 20,
                                    marginRight: 17,
                                }}
                            />
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </View> */}

                        {/* <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 6,
                                marginHorizontal: 14,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 12,
                                }}>
                                {"Liked by jaydeep,aniket and 100 others"}
                            </Text>
                        </View> */}
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginHorizontal: 14,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 12,
                                }}>
                                {"View all 10 comments"}
                            </Text>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 12,
                                }}>
                                {"View all 10 comments"}
                            </Text>
                        </View>
                    </View>
                    {/* <View
                        style={{
                            position: "absolute",
                            top: 14,
                            right: -254,
                            width: 330,
                            height: 330,
                            backgroundColor: "#f2f3f7",
                            borderColor: "#d9d9d9",
                            borderRadius: 20,
                            borderWidth: 1,
                            paddingHorizontal: 10,
                            marginleft: 50,
                        }}>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 12,
                                marginTop: 11,
                                width: 308,
                            }}>
                            {"Lorem Ipsum is simply dummy text of the printing \nand typesetting industry. Lorem Ipsum has been \nthe industry's standard dummy text ever since the \n1500s, when an unknown printer took a galley of type\nand scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, READ MORE"}
                        </Text>
                    </View> */}
                </View>

                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("FormCheck");
                    }}>

                        <Text
                            style={{
                                color: "#679D0A",
                                fontSize: getFontSize(12),
                            }}>
                            {"CHECK YOUR FORM"}
                        </Text>

                    </TouchableOpacity>
                </View>

                <View style={{
                    marginBottom:100
                }}></View>


            </ScrollView>
        </SafeAreaView>
    )
}
// const Trending = () => {
//   return (
//     <View>
//       <Text>Trending</Text>
//     </View>
//   )
// }

export default Trending

const styles = StyleSheet.create({})