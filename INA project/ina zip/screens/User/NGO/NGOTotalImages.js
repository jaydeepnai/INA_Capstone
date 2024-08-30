import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, Image, Text, ImageBackground, FlatList, View, useWindowDimensions, TouchableOpacity, } from "react-native";
import { Card } from "react-native-paper";

export default (props) => {
  const { height, width } = useWindowDimensions()
  const data = Array.from({ length: 50 });
  const navigation = useNavigation();
  const seeImage = () => {
    navigation.navigate("NGOImage");
  };

  const renderItem = ({ index }) => (
    <TouchableOpacity onPress={seeImage} style={{
      margin: 2,
    }}>
      <Image
        source={require("../../../assets/profile.jpg")}
        style={{ height: width * 0.30, width: width * 0.30, backgroundColor: "black", borderRadius: 10 }}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        paddingTop: 10
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    </SafeAreaView>

  )
}