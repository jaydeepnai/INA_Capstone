import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StatusBar, TouchableOpacity, } from "react-native";
import { Button } from "react-native-paper";
import { Base_Color } from "../../../lib/React Query/variables";

export default Search = ({navigation}) => {
    return (
        <>
       
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView style={{
                    flex: 1,
                    backgroundColor: "white",
                    paddingTop: 20,
                    paddingBottom: 45,
                    marginTop:20  }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 10,
                        marginHorizontal: 21,
                    }}>
                    {/* <FontAwesome name="search" size={24} color="black" /> */}
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
                            backgroundColor: Base_Color,
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
                <Text
                    style={{
                        fontSize: 20,
                        marginBottom: 10,
                        marginHorizontal: 21,
                    }}>
                    {"Select Ratings "}
                </Text>
                <View
                    style={{
                        marginBottom: 10,
                        marginHorizontal: 10,
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#FFFFFF",
                            paddingVertical: 2,
                            paddingHorizontal: 13,
                        }}>
                        <View
                            style={{
                                width: 79,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: Base_Color,
                                borderRadius: 15,
                                paddingVertical: 5,
                                marginRight: 10,
                            }}>
                            <AntDesign name="star" size={20} color="white" />
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 20,
                                }}>
                                {"5.0"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 79,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#F5F5F5",
                                borderRadius: 15,
                                paddingVertical: 4,
                                marginRight: 10,
                            }}>
                             <AntDesign name="star" size={20} color="black" />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 20,
                                }}>
                                {"4.5"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 79,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#F5F5F5",
                                borderRadius: 15,
                                paddingVertical: 4,
                                marginRight: 10,
                            }}>
                             <AntDesign name="star" size={20} color="black" />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 20,
                                }}>
                                {"4.0"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 79,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#F5F5F5",
                                borderRadius: 15,
                                paddingVertical: 4,
                            }}>
                            <AntDesign name="star" size={20} color="black" />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 20,
                                }}>
                                {"3.5"}
                            </Text>
                        </View>
                    </View>
                </View>
                <Text
                    style={{
                        fontSize: 20,
                        marginBottom: 10,
                        marginHorizontal: 30,
                    }}>
                    {"Popular Categories"}
                </Text>
                <View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: Base_Color,
                        borderRadius: 10,
                        paddingHorizontal: 4,
                        marginBottom: 15,
                        marginHorizontal: 24,
                    }}>
                        <Image
                            source={ require("../../../assets/Google.png")}
                            resizeMode={"stretch"}
                            style={{
                                width: 30,
                                height: 30,
                                margin: 8,
                            }}
                        />
                        <Text
                            style={{
                                color: "white",
                                fontSize: 20,
                                flex: 1,
                            }}>
                            {"NGOs for Animals"}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: Base_Color,
                        borderRadius: 10,
                        paddingHorizontal: 4,
                        marginBottom: 15,
                        marginHorizontal: 24,
                    }}>
                        <Image
                            source={ require("../../../assets/Google.png")}
                            resizeMode={"stretch"}
                            style={{
                                width: 30,
                                height: 30,
                                margin: 8,
                            }}
                        />
                        <Text
                            style={{
                                color: "white",
                                fontSize: 20,
                                flex: 1,
                            }}>
                            {"NGOs for Education"}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: Base_Color,
                        borderRadius: 10,
                        paddingHorizontal: 4,
                        marginBottom: 15,
                        marginHorizontal: 24,
                    }}>
                        <Image
                            source={ require("../../../assets/Google.png")}
                            resizeMode={"stretch"}
                            style={{
                                width: 30,
                                height: 30,
                                margin: 8,
                            }}
                        />
                        <Text
                            style={{
                                color: "white",
                                fontSize: 20,
                                flex: 1,
                            }}>
                            {"NGOs for Food & cloth"}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: Base_Color,
                        borderRadius: 10,
                        paddingHorizontal: 4,
                        marginBottom: 15,
                        marginHorizontal: 24,
                    }}>
                        <Image
                            source={ require("../../../assets/Google.png")}
                            resizeMode={"stretch"}
                            style={{
                                width: 30,
                                height: 30,
                                margin: 8,
                            }}
                        />
                        <Text
                            style={{
                                color: "white",
                                fontSize: 20,
                                flex: 1,
                            }}>
                            {"NGOs for Learning"}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: Base_Color,
                        borderRadius: 10,
                        paddingHorizontal: 4,
                        marginBottom: 15,
                        marginHorizontal: 24,
                    }}>
                        <Image
                            source={ require("../../../assets/Google.png")}
                            resizeMode={"stretch"}
                            style={{
                                width: 30,
                                height: 30,
                                margin: 8,
                            }}
                        />
                        <Text
                            style={{
                                color: "white",
                                fontSize: 20,
                                flex: 1,
                            }}>
                            {"NGOs for donating books"}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: Base_Color,
                        borderRadius: 10,
                        paddingHorizontal: 4,
                        marginBottom: 15,
                        marginHorizontal: 24,
                    }}>
                        <Image
                            source={ require("../../../assets/Google.png")}
                            resizeMode={"stretch"}
                            style={{
                                width: 30,
                                height: 30,
                                margin: 8,
                            }}
                        />
                        <Text
                            style={{
                                color: "white",
                                fontSize: 20,
                                flex: 1,
                            }}>
                            {"NGOs for orphans"}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View 
                style={{
                    flexDirection:"row",
                    alignItems: "center",
                    position: "absolute",
                    width: "95%",
                    padding: 10,
                    marginLeft: 10,
                    bottom: 55,
                    justifyContent: "center",
                }}>
                <View
                    style={{
                        width: 97,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: Base_Color,
                        borderRadius: 15,
                        paddingVertical: 7,
                        paddingHorizontal: 8,
                        marginRight: 10,
                    }}>
                    <Text
                        style={{
                            color: "white",
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
                        backgroundColor: Base_Color,
                        borderRadius: 15,
                        paddingVertical: 7,
                        paddingHorizontal: 8,
                        marginRight: 10,
                    }}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 16,
                        }}>
                        {"Learning"}
                    </Text>
                    <AntDesign name="closecircle" size={18} color="black" />

                </View>
                <View
                    style={{
                        width: 97,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: Base_Color,
                        borderRadius: 15,
                        paddingVertical: 7,
                        paddingHorizontal: 8,
                        marginRight: 10,
                    }}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 16,
                        }}>
                        {"Orphans"}
                    </Text>
                    <AntDesign name="closecircle" size={18} color="black" />

                </View>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("NGOResult")}
                style={{
                    alignItems: "center",
                    backgroundColor: Base_Color,
                    borderRadius: 30,
                    position: "absolute",
                    width: "95%",
                    padding: 10,
                    marginLeft: 10,
                    justifyContent: "center",
                    
                    bottom: 10,
                }}>
                   <Text style={{
                    color: "white",
                   }}>
                   Search
                    </Text>  
            </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}