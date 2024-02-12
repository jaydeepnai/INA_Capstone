import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, Dimensions } from "react-native";
import { getFontSize, responsiveMargin } from "../../../lib/Validation/RelativeValues";


export default schedule_ngo = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          paddingTop: 15,
          paddingBottom: 57,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30,
            marginHorizontal: 9,
            marginTop: 35,
          }}
        >
          <View
            style={{
              width: 152,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(24),
                marginBottom: 13,
              }}
            >
              {"Hey, Naishal"}
            </Text>
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
              }}
            >
              {"2 Task for Today"}
            </Text>
          </View>
          <Image
            source={require("../../../assets/profile.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
          }}
        >
          <View
            style={{
              backgroundColor: "whitesmoke",
              padding: 10,
              borderRadius: 10,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(15),
              }}
            >
              {"Mon\n 11"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "whitesmoke",
              padding: 10,
              borderRadius: 10,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(15),
              }}
            >
              {"Mon\n 11"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "whitesmoke",
              padding: 10,
              borderRadius: 10,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(15),
              }}
            >
              {"Mon\n 11"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "whitesmoke",
              padding: 10,
              borderRadius: 10,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(15),
              }}
            >
              {"Mon\n 11"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "whitesmoke",
              padding: 10,
              borderRadius: 10,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(15),
              }}
            >
              {"Mon\n 11"}
            </Text>
          </View>
          
          
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: responsiveMargin(10),
            marginHorizontal: responsiveMargin(2),
          }}
        >
          <View
            style={{
              width: "20%",
              alignSelf: "flex-start",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(20),
                marginBottom: 65,
                marginHorizontal: responsiveMargin(2),
              }}
            >
              {"10:00"}
            </Text>
          </View>
          <View
            style={{
              width: "80%",
              alignSelf: "flex-start",
              backgroundColor: "#F1B7B7",
              borderRadius: 15,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(20),
                marginBottom: 9,
                marginHorizontal: 10,
              }}
            >
              {"Design the project"}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 15,
              }}
            >
              <Entypo name="stopwatch" size={24} color="black" />
              <Text
                style={{
                  color: "#948D8D",
                  fontSize: getFontSize(15),
                  flex: 1,
                  paddingLeft: 10
                }}
              >
                {"9:30-10:30"}
              </Text>
            </View>
           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
