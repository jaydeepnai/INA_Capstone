import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Card, TouchableRipple } from "react-native-paper";
import { getFontSize, responsiveMargin } from "../../../lib/Validation/RelativeValues";

const TopServices = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 5,
          marginHorizontal: 24,
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
          {"TOP SERVICES BY NGOs "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("ServiceList")}>
          <Text
            style={{
              color: "#679D0A",
              fontSize: 12,
            }}
          >
            {"See All"}
          </Text>
        </TouchableOpacity>
      </View>
      <Service />
      <Service />
      <Service />
      <Service />
    </View>
  );
};

export default TopServices;

export const Service = () => {
  const navigation = useNavigation();
  return (
    <Card style={{margin: responsiveMargin(5)
      ,backgroundColor: "white",marginBottom:responsiveMargin(1)}}>
      <Card.Content>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NGOServiceDetails")
          }}
          style={{
            width: "auto",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <View style={{
              width: "70%"
            }}>
              <Text
                style={{
                  color: "#000000",
                  fontSize: getFontSize(15),
                  marginBottom: 13,
                }}
              >
                {"ADOPTION"}
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: getFontSize(10),

                }}
              >
                {
                  "Our NGOated to facilitating animal adoption, connecting compassionate individuals with rescue animals in search of loving homes."
                }
              </Text>
            </View>
            <Image
              source={require("../../../assets/NGOanimated.png")}
              resizeMode="contain"
              style={{
                borderRadius: 10,
                height: responsiveMargin(20),
                width: responsiveMargin(20),
              }}
            />
          </View>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
};
