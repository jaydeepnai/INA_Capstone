import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useLayoutEffect } from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, } from "react-native";
import { height, responsiveMargin } from "../../../lib/Validation/RelativeValues";

export default NGOImage = (props) => {

    useEffect(() => {
        props.navigation.setOptions({ headerTitle: "Raahi foundation", headerTitleAlign: "left", })
    }, [])

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
                }}>
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                        borderRadius: 10,
                        height: height * 0.88,
                        marginVertical:responsiveMargin(5),
                        marginHorizontal: 7,
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent:"space-between",
                        position:"absolute",
                        width: "100%",
                        bottom:20,
                        padding:responsiveMargin(10),
                        paddingBottom:responsiveMargin(5)
                    }}>
                    <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 50, padding: 10 }} onPress={() => { }}>
                        <AntDesign name="sharealt" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 50, padding: 10 }} onPress={() => { }}>
                        <MaterialIcons name="save" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
