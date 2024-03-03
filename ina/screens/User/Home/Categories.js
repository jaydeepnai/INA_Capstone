import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { responsiveMargin, width } from "../../../lib/Validation/RelativeValues";

export default Categories = (props) => {
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
          paddingTop: 20,
          paddingBottom: 98,
        }}
      >
        <View style={{ marginBottom: 20,marginLeft:responsiveMargin(7) }}>
          <Text
            style={{
              fontSize: 20
            }}
          >
            Select Category
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: responsiveMargin(2),
          }}
        >
          <TouchableOpacity
          onPress={()=>props.navigation.navigate("NGOResult")}
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              marginBottom: responsiveMargin(4),
            }}
          >
            <Image
              source={require("../../../assets/dog.jpeg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width * 0.40,
                marginLeft: responsiveMargin(1),

              }}
            />
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Animal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              marginBottom: responsiveMargin(4),
            }}
          >
            <Image
              source={require("../../../assets/cherity.jpeg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width * 0.40,
                marginLeft: responsiveMargin(1),

              }}
            />
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Cherity
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: responsiveMargin(2),
          }}
        >
          <TouchableOpacity
          onPress={()=>props.navigation.navigate("NGOResult")}
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              marginBottom: responsiveMargin(4),
            }}
          >
            <Image
              source={require("../../../assets/medical.jpeg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width * 0.40,
                marginLeft: responsiveMargin(1),

              }}
            />
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Medical
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              marginBottom: responsiveMargin(4),
            }}
          >
            <Image
              source={require("../../../assets/lerning.jpeg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width * 0.40,
                marginLeft: responsiveMargin(1),

              }}
            />
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Learning
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: responsiveMargin(2),
          }}
        >
          <TouchableOpacity
          onPress={()=>props.navigation.navigate("NGOResult")}
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              marginBottom: responsiveMargin(4),
            }}
          >
            <Image
              source={require("../../../assets/women.jpeg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width * 0.40,
                marginLeft: responsiveMargin(1),

              }}
            />
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Women empowerment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              marginBottom: responsiveMargin(4),
            }}
          >
            <Image
              source={require("../../../assets/orphans.jpeg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width * 0.40,
                marginLeft: responsiveMargin(1),

              }}
            />
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Orphans
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
