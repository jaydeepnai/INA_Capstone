import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";

export default NGOResult = (props) => {


    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    paddingVertical: 41,
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 10,
                        marginHorizontal: 21,
                    }}>
                    <View
                        style={{
                            width: "85%",
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#F5F5F5",
                            borderRadius: 10,
                            padding: 11,
                        }}>
                        <FontAwesome name="search" size={24} color="black" />
                        <Text
                            style={{
                                color: "gray",
                                fontSize: 15,
                                flex: 1,
                                marginLeft: 10
                            }}>
                            {"Search for Requirments"}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: 30,
                        }}>
                        <Ionicons name="filter" size={24} color="black" />
                        <View style={{
                            position: "absolute",
                            top: -7,
                            backgroundColor: "yellow",
                            borderRadius: 50,
                            justifyContent: "center",
                            alignContent: "center",
                            right: -6,
                            width: 18,
                            height: 18,
                        }}>
                            <Text style={{ textAlign: "center" }}>1</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 25,
                        marginHorizontal: 25,
                    }}>
                    <View
                        style={{
                            width: 97,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "#FFF400",
                            borderRadius: 15,
                            paddingVertical: 7,
                            paddingHorizontal: 8,
                            marginRight: 10,
                        }}>
                        <Text
                            style={{
                                color: "gray",
                                fontSize: 16,
                            }}>
                            {"Animals"}
                        </Text>
                        <AntDesign name="closecircle" size={18} color="black" />

                    </View>
                    <View
                        style={{
                            width: 97,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "#FFF400",
                            borderRadius: 15,
                            paddingVertical: 7,
                            paddingHorizontal: 8,
                            marginRight: 10,
                        }}>
                        <Text
                            style={{
                                color: "gray",
                                fontSize: 16,
                            }}>
                            {"Animals"}
                        </Text>
                        <AntDesign name="closecircle" size={18} color="black" />

                    </View>
                    <View
                        style={{
                            width: 97,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "#FFF400",
                            borderRadius: 15,
                            paddingVertical: 7,
                            paddingHorizontal: 8,
                            marginRight: 10,
                        }}>
                        <Text
                            style={{
                                color: "gray",
                                fontSize: 16,
                            }}>
                            {"Animals"}
                        </Text>
                        <AntDesign name="closecircle" size={18} color="black" />

                    </View>
                </View>
                <View style={{marginBottom:55}}>
                <NGOCard />
                <NGOCard />
                <NGOCard />
                <NGOCard />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}


const NGOCard = () => (
    <View
        style={{
            backgroundColor: "white",
            borderRadius: 15,
            paddingVertical: 15,
            paddingHorizontal: 10,
            marginBottom: 15,
            marginHorizontal: 20,
            elevation: 4
        }}>
        <View>
            <View style={{ marginBottom: 15, }}>
                <Image source={require("../../../assets/animals.jpg")}
                    resizeMode={"cover"}
                    style={{
                        borderRadius: 10,
                        height: 175,
                        width: "100%"
                    }} />
                <Image source={require("../../../assets/ngologo.jpg")}
                    resizeMode={"stretch"}
                    style={{
                        position: "absolute",
                        bottom: -40,
                        left: 2,
                        borderRadius: 50,
                        width: 90,
                        height: 90,
                        borderColor: "white",
                        borderWidth: 5
                    }}
                />
            </View>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 15,
                    marginLeft: 95,
                    bottom: 10,
                }}>
                ANIMAL FRIENDS UNITED
            </Text>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 10,
                    marginLeft: 95,
                    bottom: 10,
                }}>
                {"Empowering Paws, Enriching Lives"}
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#D2F694",
                            borderRadius: 30,
                            padding: 5,
                        }}>
                        <AntDesign name="star" size={20} color="black" />
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 17,
                            }}>
                            {"4.0"}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#D2F694",
                            borderRadius: 30,
                            padding: 7,
                        }}>
                        <AntDesign name="clockcircle" size={15} color="black" />
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 17,
                                paddingLeft:4
                            }}>
                            {"10am - 6pm"}
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            backgroundColor: "#D2F694",
                            borderRadius: 30,
                            padding: 5,
                            flexDirection: "row",
                            // paddingLeft:4
                        }}>
                        <Feather name="map-pin" size={15} color="black" />
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 17,
                                paddingLeft:4
                            }}>
                            {"Maninagar"}
                        </Text>
                    </View>
            </View>
        </View>
    </View>
)