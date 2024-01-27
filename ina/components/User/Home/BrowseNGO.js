import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BrowseNGO = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("NGOResult")}>
      <View
        style={{
          margin: 10,
          backgroundColor: "white",
          borderRadius: 10,
          flexDirection: "column",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
              marginRight: 4,
              flex: 1,
            }}
          >
            Browse NGOs
          </Text>
          <Image
            source={require("../../../assets/NGO/browse.png")}
            resizeMode={"stretch"}
            style={{
              width: 39,
              height: 40,
              marginTop: 5,
            }}
          />
        </View>
        <Text
          style={{
            // position: "absolute",
            bottom: -3,
            // left: 26,
            color: "#000000",
            fontSize: 14,
            width: 206,
          }}
        >
          {"Let’s find the best NGOs Around you."}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BrowseNGO;

const styles = StyleSheet.create({});
