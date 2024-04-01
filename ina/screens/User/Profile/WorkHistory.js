import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { getFontSize, responsiveMargin, width } from '../../../lib/Validation/RelativeValues';
import { AntDesign, Entypo } from '@expo/vector-icons';


export default WorkHistory = (props) => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}
        >
            <Tab.Navigator>
                <Tab.Screen name="NGO" component={NGO} />
                <Tab.Screen name="Events" component={Events} />
                <Tab.Screen name="Services" component={Services} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};










const NGO = () => {
    return (

        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    paddingTop: 10,
                }}>

                <View
                    style={{
                        backgroundColor: "#000000",
                        marginBottom: 11,
                    }}>
                </View>


                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#F2F3F7",
                        borderRadius: 15,
                        paddingVertical: 10,
                        paddingLeft: 20,
                        marginHorizontal: 15,
                    }}>

                    <Image
                        source={require('../../../assets/images/WorkHistory/NGO/Aniket.jpg')}
                        resizeMode={"stretch"}
                        style={{
                            borderRadius: 50,
                            width: 60,
                            height: 60,
                        }}
                    />

                    <View style={{
                        marginLeft: 20,
                    }}>
                        <View
                            style={{
                                width: "80%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems:'center'
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                    marginBottom: responsiveMargin(1),
                                }}>
                                {"Aniket Bhatti"}
                            </Text>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(10),
                                    marginTop:responsiveMargin(2),
                                    marginBottom: responsiveMargin(5),
                                    paddingRight: responsiveMargin(3),
                                }}>
                                {"01/01/24 to 31/1/24"}
                            </Text>
                        </View>

                        <View>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(12),
                                    marginBottom: responsiveMargin(2),
                                }}>
                                {"Progress Promoter"}
                            </Text>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>

    )
}









const Events = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    paddingTop: 24,
                    paddingBottom: 225,
                }}>
                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        marginBottom:responsiveMargin(10)
                    }}>
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: 20,
                        }}
                        >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            <Image
                                source={require('../../../assets/images/WorkHistory/NGO/Aniket.jpg')}
                                resizeMode={"stretch"}
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 10,
                                    borderRadius: 25,
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                }}>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 28,
                                        marginBottom: 1,
                                    }}>
                                    {"Teeth Check-up"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 16,
                                        marginHorizontal: 5,
                                    }}>
                                    {" Raahi Foundation"}
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={require('../../../assets/images/WorkHistory/Events/Card_main.jpg')}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 15,
                                height: 210,
                                width:width*0.90,
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}
                        />
                        
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: 10,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            {"Time Line :  1st jan 24 - 31st jan 24"}
                        </Text>



                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: responsiveMargin(6),
                                marginRight: responsiveMargin(6),
                            }}>



                            <View
                                style={{
                                    width: "27%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: responsiveMargin(1),
                                    marginRight: responsiveMargin(2),
                                }}>
                                <AntDesign name="star" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 14,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"5.12"}
                                </Text>
                            </View>




                            <View
                                style={{
                                    width: "40%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                    marginRight: 6,
                                }}>
                                <Entypo name="location-pin" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"SindhuBhavan"}
                                </Text>
                            </View>



                            <View
                                style={{
                                    width: "35%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                }}>
                                <AntDesign name="clockcircle" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"10AM-5PM"}
                                </Text>
                            </View>



                        </View>

                    </View>
                </View>


                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        marginBottom:responsiveMargin(10)
                    }}>
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: 20,
                        }}
                        >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            <Image
                                source={require('../../../assets/images/WorkHistory/NGO/Aniket.jpg')}
                                resizeMode={"stretch"}
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 10,
                                    borderRadius: 25,
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                }}>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 28,
                                        marginBottom: 1,
                                    }}>
                                    {"Teeth Check-up"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 16,
                                        marginHorizontal: 5,
                                    }}>
                                    {" Raahi Foundation"}
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={require('../../../assets/images/WorkHistory/Events/Card_main.jpg')}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 15,
                                height: 210,
                                width:width*0.90,
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}
                        />
                        
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: 10,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            {"Time Line :  1st jan 24 - 31st jan 24"}
                        </Text>



                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: responsiveMargin(6),
                                marginRight: responsiveMargin(6),
                            }}>



                            <View
                                style={{
                                    width: "27%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: responsiveMargin(1),
                                    marginRight: responsiveMargin(2),
                                }}>
                                <AntDesign name="star" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 14,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"5.12"}
                                </Text>
                            </View>




                            <View
                                style={{
                                    width: "40%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                    marginRight: 6,
                                }}>
                                <Entypo name="location-pin" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"SindhuBhavan"}
                                </Text>
                            </View>



                            <View
                                style={{
                                    width: "35%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                }}>
                                <AntDesign name="clockcircle" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"10AM-5PM"}
                                </Text>
                            </View>



                        </View>

                    </View>
                </View>



                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        marginBottom:responsiveMargin(10)
                    }}>
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: 20,
                        }}
                        >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            <Image
                                source={require('../../../assets/images/WorkHistory/NGO/Aniket.jpg')}
                                resizeMode={"stretch"}
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 10,
                                    borderRadius: 25,
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                }}>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 28,
                                        marginBottom: 1,
                                    }}>
                                    {"Teeth Check-up"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 16,
                                        marginHorizontal: 5,
                                    }}>
                                    {" Raahi Foundation"}
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={require('../../../assets/images/WorkHistory/Events/Card_main.jpg')}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 15,
                                height: 210,
                                width:width*0.90,
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}
                        />
                        
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: 10,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            {"Time Line :  1st jan 24 - 31st jan 24"}
                        </Text>



                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: responsiveMargin(6),
                                marginRight: responsiveMargin(6),
                            }}>



                            <View
                                style={{
                                    width: "27%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: responsiveMargin(1),
                                    marginRight: responsiveMargin(2),
                                }}>
                                <AntDesign name="star" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 14,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"5.12"}
                                </Text>
                            </View>




                            <View
                                style={{
                                    width: "40%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                    marginRight: 6,
                                }}>
                                <Entypo name="location-pin" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"SindhuBhavan"}
                                </Text>
                            </View>



                            <View
                                style={{
                                    width: "35%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                }}>
                                <AntDesign name="clockcircle" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"10AM-5PM"}
                                </Text>
                            </View>



                        </View>

                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>

    )
}











const Services = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    paddingTop: 24,
                    paddingBottom: 225,
                }}>
                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        marginBottom:responsiveMargin(10)
                    }}>
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: 20,
                        }}
                        >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            <Image
                                source={require('../../../assets/images/WorkHistory/NGO/Aniket.jpg')}
                                resizeMode={"stretch"}
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 10,
                                    borderRadius: 25,
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                }}>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 28,
                                        marginBottom: 1,
                                    }}>
                                    {"Teeth Check-up"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 16,
                                        marginHorizontal: 5,
                                    }}>
                                    {" Raahi Foundation"}
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={require('../../../assets/images/WorkHistory/Events/Card_main.jpg')}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 15,
                                height: 210,
                                width:width*0.90,
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}
                        />
                        
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: 10,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            {"Time Line :  1st jan 24 - 31st jan 24"}
                        </Text>



                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: responsiveMargin(6),
                                marginRight: responsiveMargin(6),
                            }}>



                            <View
                                style={{
                                    width: "27%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: responsiveMargin(1),
                                    marginRight: responsiveMargin(2),
                                }}>
                                <AntDesign name="star" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 14,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"5.12"}
                                </Text>
                            </View>




                            <View
                                style={{
                                    width: "40%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                    marginRight: 6,
                                }}>
                                <Entypo name="location-pin" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"SindhuBhavan"}
                                </Text>
                            </View>



                            <View
                                style={{
                                    width: "35%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                }}>
                                <AntDesign name="clockcircle" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"10AM-5PM"}
                                </Text>
                            </View>



                        </View>

                    </View>
                </View>


                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        marginBottom:responsiveMargin(10)
                    }}>
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: 20,
                        }}
                        >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            <Image
                                source={require('../../../assets/images/WorkHistory/NGO/Aniket.jpg')}
                                resizeMode={"stretch"}
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 10,
                                    borderRadius: 25,
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                }}>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 28,
                                        marginBottom: 1,
                                    }}>
                                    {"Teeth Check-up"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 16,
                                        marginHorizontal: 5,
                                    }}>
                                    {" Raahi Foundation"}
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={require('../../../assets/images/WorkHistory/Events/Card_main.jpg')}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 15,
                                height: 210,
                                width:width*0.90,
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}
                        />
                        
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: 10,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            {"Time Line :  1st jan 24 - 31st jan 24"}
                        </Text>



                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: responsiveMargin(6),
                                marginRight: responsiveMargin(6),
                            }}>



                            <View
                                style={{
                                    width: "27%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: responsiveMargin(1),
                                    marginRight: responsiveMargin(2),
                                }}>
                                <AntDesign name="star" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 14,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"5.12"}
                                </Text>
                            </View>




                            <View
                                style={{
                                    width: "40%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                    marginRight: 6,
                                }}>
                                <Entypo name="location-pin" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"SindhuBhavan"}
                                </Text>
                            </View>



                            <View
                                style={{
                                    width: "35%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                }}>
                                <AntDesign name="clockcircle" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"10AM-5PM"}
                                </Text>
                            </View>



                        </View>

                    </View>
                </View>



                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        marginBottom:responsiveMargin(10)
                    }}>
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: 20,
                        }}
                        >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            <Image
                                source={require('../../../assets/images/WorkHistory/NGO/Aniket.jpg')}
                                resizeMode={"stretch"}
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 10,
                                    borderRadius: 25,
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                }}>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 28,
                                        marginBottom: 1,
                                    }}>
                                    {"Teeth Check-up"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 16,
                                        marginHorizontal: 5,
                                    }}>
                                    {" Raahi Foundation"}
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={require('../../../assets/images/WorkHistory/Events/Card_main.jpg')}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 15,
                                height: 210,
                                width:width*0.90,
                                marginBottom: 13,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}
                        />
                        
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: 10,
                                marginLeft: responsiveMargin(5),
                                marginRight: responsiveMargin(5),
                            }}>
                            {"Time Line :  1st jan 24 - 31st jan 24"}
                        </Text>



                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: responsiveMargin(6),
                                marginRight: responsiveMargin(6),
                            }}>



                            <View
                                style={{
                                    width: "27%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: responsiveMargin(1),
                                    marginRight: responsiveMargin(2),
                                }}>
                                <AntDesign name="star" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 14,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"5.12"}
                                </Text>
                            </View>




                            <View
                                style={{
                                    width: "40%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                    marginRight: 6,
                                }}>
                                <Entypo name="location-pin" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"SindhuBhavan"}
                                </Text>
                            </View>



                            <View
                                style={{
                                    width: "35%",
                                    height: '100%',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                }}>
                                <AntDesign name="clockcircle" size={24} color="black" />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        marginLeft:responsiveMargin(2),
                                    }}>
                                    {"10AM-5PM"}
                                </Text>
                            </View>



                        </View>

                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>

    )
}
