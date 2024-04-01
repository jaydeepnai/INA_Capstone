import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
import { Base_Color } from "../../../lib/React Query/variables";
import TopNGOList from "../../../components/User/Home/TopNGOList";
import { responsiveMargin } from "../../../lib/Validation/RelativeValues";

const NGOResults = ({ route }) => {

    const navigation = useNavigation();
    const { selectedFilters } = route.params ?? {};
    const [filters, setFilters] = useState(selectedFilters);

    const removeFilter = (filterToRemove) => {
        const updatedFilters = filters.filter(filter => filter !== filterToRemove);
        setFilters(updatedFilters);
    };

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
                            marginBottom: responsiveMargin(4)

                        }}>
                        <FontAwesome name="search" size={24} color="black" />
                        <Text
                            style={{
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
                        <Ionicons name="filter" size={24} color="black" onPress={() => navigation.navigate("FilterPopUp")} />
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


                {/* <ScrollView horizontal>

                        {filters.map((filter, index) => (
                            <View
                                key={index}
                                style={{
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 25,
                                    marginHorizontal: 8,
                                }}>
                                <View
                                    style={{
                                        width: 100,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        backgroundColor: Base_Color,
                                        borderRadius: 15,
                                        paddingVertical: 7,
                                        paddingHorizontal: 8,
                                        marginRight: 3,
                                    }}>
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: 16,
                                        }}>
                                        {filter.substring(0, 6)}
                                    </Text>
                                    <TouchableOpacity onPress={() => removeFilter(filter)}>
                                        <AntDesign name="closecircle" size={18} color="white" />
                                    </TouchableOpacity>

                                </View>

                            </View>
                        ))}
                    </ScrollView> */}



                <ScrollView horizontal>
                    {filters ? (
                        filters.map((filter, index) => (
                            <View
                                key={index}
                                style={{
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 25,
                                    marginHorizontal: 8,
                                }}
                            >
                                <View
                                    style={{
                                        width: 100,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        backgroundColor: Base_Color,
                                        borderRadius: 15,
                                        paddingVertical: 7,
                                        paddingHorizontal: 8,
                                        marginRight: 3,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: 16,
                                        }}
                                    >
                                        {filter.substring(0, 6)}
                                    </Text>
                                    <TouchableOpacity onPress={() => removeFilter(filter)}>
                                        <AntDesign name="closecircle" size={18} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    ) : null}
                </ScrollView>


                <View style={{ marginBottom: 55 }}>
                    <TopNGOList>
                    </TopNGOList>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NGOResults;
