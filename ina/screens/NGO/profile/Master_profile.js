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
  } from "react-native";
import { getFontSize } from "../../../lib/Validation/RelativeValues";
  
  export default MasterProfile = (props) => {
  
  
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
                source={require("../../../assets/family.jpg")}
                resizeMode={"contain"}
                style={{
                  paddingTop: 53,
                  paddingBottom: 14,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 158,
                    marginHorizontal: 20,
                  }}
                >
                  <Ionicons name="arrow-back-circle" size={34} color="white" />
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 25,
                    }}
                  >
                    {"PROFILE"}
                  </Text>
                  <FontAwesome name="share-alt" size={24} color="white" />
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 24,
                    marginBottom: 5,
                    marginHorizontal: 102,
                    marginLeft: 150,
                    width: "70%",
                    fontWeight: "bold",
                  }}
                >
                  {"Angle Trust"}
                </Text>
                {/* <Text
                  style={{
                    color: "#000000",
                    fontSize: 13,
                    marginBottom: 5,
                    marginHorizontal: 102,
                    marginLeft: 150,
                    width: "70%",
                  }}
                >
                  {"Software Engineer"}
                </Text> */}
              </ImageBackground>
              <Image
                source={require("../../../assets/profile.jpg")}
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
                    backgroundColor: "whitesmoke",
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
                    backgroundColor: "whitesmoke",
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
                    backgroundColor: "whitesmoke",
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
                    backgroundColor: "whitesmoke",
                  }}
                >
                  <Foundation name="web" size={24} color="black" />
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Edit_screen_ngo")}
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
                {"Edit Profile"}
              </Text>
              <Text
                style={{
                  color: "#808080",
                  fontSize: getFontSize(13),
                }}
              >
              {"Edit your profile & personal details"}
              </Text>
            </View>
            <Entypo name="calendar" size={24} color="black" />
          </TouchableOpacity>
  
  
          {/* <TouchableOpacity
  
          onPress={() => props.navigation.navigate("work_history_ngo")}
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
                  color: "#808080",
                  fontSize: getFontSize(13),
                }}
              >
                {"Record of your works & Experience"}
              </Text>
            </View>
            <FontAwesome name="newspaper-o" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Appointment_ngo")}
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
                  color: "#808080",
                  fontSize: getFontSize(13),
                }}
              >
                {"Upcoming meetings & Appointment"}
              </Text>
            </View>
            <AntDesign name="addusergroup" size={24} color="black" />
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => props.navigation.navigate("schedule_ngo")}
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
                {"Schedule"}
              </Text>
              <Text
                style={{
                  color: "#808080",
                  fontSize: getFontSize(13),
                }}
              >
                {"Volunteer & Services timelines etc."}
              </Text>
            </View>
            <Entypo name="calendar" size={24} color="black" />
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => props.navigation.navigate("Edit_screen_ngo")}
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
                {"Settings"}
              </Text>
              <Text
                style={{
                  color: "#808080",
                  fontSize: getFontSize(13),
                }}
              >
                {"App settings, password, disply..."}
              </Text>
            </View> 
            <Ionicons name="settings" size={24} color="black" />
          </TouchableOpacity> */}
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
                  color: "#808080",
                  fontSize: getFontSize(13),
                }}  
              >
                {"App settings, password, disply..."}
              </Text>
            </View>
            <FontAwesome name="newspaper-o" size={24} color="black  " />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  };
