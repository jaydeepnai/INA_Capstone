import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { responsiveMargin } from "../../../lib/Validation/RelativeValues";
import { Base_Color } from "../../../lib/React Query/variables";

export default Profile = (props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          paddingBottom: 109,
        }}
      >
        <View
          style={{
            marginBottom: 21,
          }}
        >
          <View style={{ marginBottom: 13 }}>
            <ImageBackground
              source={require("../../../assets/idea.jpg")}
              resizeMode={"contain"}
              style={{
                paddingTop: 53,
                paddingBottom: 14,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 158,
                  marginHorizontal: 20,
                }}
              >
                

                
              </View>


              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  marginBottom: 15,
                  marginHorizontal: 102,
                  marginLeft: 150,
                  width: "70%",
                  fontWeight: "bold",
                }}
              >
                {"Team INA"}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 13,
                  marginBottom: 5,
                  marginHorizontal: 102,
                  marginLeft: 150,
                  width: "70%",
                }}
              >
                {/* {"Software Engineer"} */}
              </Text>
            </ImageBackground>
            <Image
              source={require("../../../assets/naishal.jpg")}
              resizeMode={"cover"}
              style={{
                position: "absolute",
                bottom: -15,
                left: 20,
                width: 120,
                height: 120,
                borderRadius: 100,
                borderColor: "white",
                borderWidth: 5,
              }}
            />
            <View>
              <View
                style={{
                  position: "absolute",
                  bottom: -35,
                  left: 300,
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                  borderColor: "white",
                  borderWidth: 5,
                  backgroundColor: Base_Color,
                }}
              >
                <AntDesign name="instagram" size={24} color="black" />
              </View>

              <View
                style={{
                  position: "absolute",
                  bottom: -35,
                  left: 140,
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                  borderColor: "white",
                  borderWidth: 5,
                  backgroundColor: Base_Color,
                }}
              >
              
                <Entypo name="facebook" size={24} color="black" />
              
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: -35,
                  left: 190,
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                  borderColor: "white",
                  borderWidth: 5,
                  backgroundColor: Base_Color,
                }}
              >
                <FontAwesome name="twitter-square" size={24} color="black" />
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: -35,
                  left: 245,
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                  borderColor: "white",
                  borderWidth: 5,
                  backgroundColor: Base_Color,
                }}
              >
                <Foundation name="web" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("UserSchedule")}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 23,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 285,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 18,
                marginBottom: 7,
              }}
            >
              {"Schedule"}
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 14,
              }}
            >
              {"(Volunteering &  Services timelines etc.)"}
            </Text>
          </View>
          <Entypo name="calendar" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("WorkHistory")}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 25,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 261,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              {"Work-History"}
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 14,
              }}
            >
              {"(Record of your works & Experience)"}
            </Text>
          </View>
          <FontAwesome name="newspaper-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Appointment")}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 292,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 18,
                marginBottom: 12,
              }}
            >
              {"Appointment"}
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 14,
              }}
            >
              {"(Upcoming meetings & Appointment d...)"}
            </Text>
          </View>
          <AntDesign name="addusergroup" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 9,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 225,
              alignSelf: "flex-start",
              marginTop: 3,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 18,
                marginBottom: 15,
              }}
            >
              {"Fund Request"}
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 14,
              }}
            >
              {"(History of records for Funding)"}
            </Text>
          </View>
          <MaterialIcons name="attach-money" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Edit_screen")}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 258,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 18,
                marginBottom: 14,
                marginHorizontal: 2,
              }}
            >
              {"Edit Profile"}
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 14,
              }}
            >
              {"(Edit your profile & personal details)"}
            </Text>
          </View>
          <FontAwesome name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("MasterAuth");
          }}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 25,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 261,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              {"Logout"}
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 14,
              }}
            >
              {"(User logout and go to Home page)"}
            </Text>
          </View>
          <FontAwesome name="newspaper-o" size={24} color="black" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
