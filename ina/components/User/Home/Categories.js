import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Categories = ({}) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop:5
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 20,
            // marginBottom: 7,
            marginHorizontal: 23,
          }}
        >
          {"TOP CATEGORIES"}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Text
            style={{
              textAlign: "center",
              marginRight: 20,
              color: "green",
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        style={{
          marginBottom: 15,
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            width: 80,
            height: 125,
            flexDirection: "row",
            paddingTop: 20,
            paddingBottom: 3,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <View
            style={{
              width: 65,
              margin: 10,
            }}
          >
            <TouchableOpacity onPress={()=>{
              navigation.navigate("NGOResult")
            }}

              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 35,
                paddingTop: 36,
                paddingBottom: 19,
                marginRight: 10,
                shadowColor: "#00000040",
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 4,
                elevation: 4,
              }}
            >
            <Image
              source={require("../../../assets/NGO/dog.png")}
              resizeMode={"stretch"}
              style={{
                  position: "absolute",
                  top: -25,
                  right: 2,
                  width: 65,
                  height: 63,
                }}
            />
            </TouchableOpacity>
                <Text
                  style={{
                    color: "black",
                    fontSize: 18,
                    position: "absolute",
                    top:55,
                    width: "90%",
                    height: "100%",
                  }}
                >
                  Animal
                </Text>
          </View>
        </View>
        <View
          style={{
            width: 80,
            height: 125,
            flexDirection: "row",
            paddingTop: 20,
            paddingBottom: 3,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <View
            style={{
              width: 65,
              margin: 10,
            }}
          >
            <TouchableOpacity onPress={()=>{
              navigation.navigate("NGOResult")
            }}

              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 35,
                paddingTop: 36,
                paddingBottom: 19,
                marginRight: 10,
                shadowColor: "#00000040",
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 4,
                elevation: 4,
              }}
            >
            <Image
              source={require("../../../assets/NGO/dog.png")}
              resizeMode={"stretch"}
              style={{
                  position: "absolute",
                  top: -25,
                  right: 2,
                  width: 65,
                  height: 63,
                }}
            />
            </TouchableOpacity>
                <Text
                  style={{
                    color: "black",
                    fontSize: 18,
                    position: "absolute",
                    top:55,
                    width: "90%",
                    height: "100%",
                  }}
                >
                  Animal
                </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({});
