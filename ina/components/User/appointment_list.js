import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text } from "react-native";
import {
  getFontSize,
  responsiveMargin,
} from "../../lib/Validation/RelativeValues";

const Appointment_list = () => {
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
          paddingVertical: 23,
        }}
      >

		<View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#F2F3F7",
            borderRadius: 15,
            borderWidth: 3,
            paddingVertical: 10,
            paddingLeft: 15,
            paddingRight: 10,
            marginBottom: responsiveMargin(7),
            marginHorizontal: 17,
          }}
        >
          <Image
           source={require("../../assets/animals.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 60,
              height: 60,
              marginRight: responsiveMargin(2),
              paddingLeft: responsiveMargin(5),
              borderRadius:100,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 195,
              paddingLeft: responsiveMargin(2),
            }}
          >
            <Text
              style={{
                flex: 1,
                flexDirection: "row",
                color: "#000000",
                fontSize: getFontSize(17),
                marginBottom: responsiveMargin(1),
                
              }}
            >
              {"Raahi Foundation"}
              <View>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 16,
                    
                  }}
                >
                  {"Mon 01st Jan 24"}
                </Text>
              </View>
            </Text>
            <View
              style={{
                width: 82,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  marginBottom: 10,
                  marginHorizontal: 10,
                  marginRight: responsiveMargin(1),
                }}
              >
                {"6:00 PM"}
                <View>
                    <Image></Image>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 16,
                      
                    }}
                  >
                    {"Abad"}
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>

		<View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#F2F3F7",
            borderRadius: 15,
            borderWidth: 3,
            paddingVertical: 10,
            paddingLeft: 15,
            paddingRight: 10,
            marginBottom: responsiveMargin(7),
            marginHorizontal: 17,
          }}
        >
          <Image
           source={require("../../assets/animals.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 60,
              height: 60,
              marginRight: responsiveMargin(2),
              paddingLeft: responsiveMargin(5),
              borderRadius:100,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 195,
              paddingLeft: responsiveMargin(2),
            }}
          >
            <Text
              style={{
                flex: 1,
                flexDirection: "row",
                color: "#000000",
                fontSize: getFontSize(17),
                marginBottom: responsiveMargin(1),
                
              }}
            >
              {"Raahi Foundation"}
              <View>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 16,
                    
                  }}
                >
                  {"Mon 01st Jan 24"}
                </Text>
              </View>
            </Text>
            <View
              style={{
                width: 82,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  marginBottom: 10,
                  marginHorizontal: 10,
                  marginRight: responsiveMargin(1),
                }}
              >
                {"6:00 PM"}
                <View>
				<Image
                   source={require("../../assets/NGO/call.png")}
                    // resizeMode={""}
                    style={{
                    width: 60,
                    height: 60,
                    marginRight: responsiveMargin(2),
                    paddingLeft: responsiveMargin(5),
                    borderRadius:100,
                    backgroundColor:'red'
                }}
                />
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 16,
                      
                    }}
                  >
                    {"Abad"}
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>

		<View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#F2F3F7",
            borderRadius: 15,
            borderWidth: 3,
            paddingVertical: 10,
            paddingLeft: 15,
            paddingRight: 10,
            marginBottom: responsiveMargin(7),
            marginHorizontal: 17,
          }}
        >
          <Image
           source={require("../../assets/animals.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 60,
              height: 60,
              marginRight: responsiveMargin(2),
              paddingLeft: responsiveMargin(5),
              borderRadius:100,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 195,
              paddingLeft: responsiveMargin(2),
            }}
          >
            <Text
              style={{
                flex: 1,
                flexDirection: "row",
                color: "#000000",
                fontSize: getFontSize(17),
                marginBottom: responsiveMargin(1),
                
              }}
            >
              {"Raahi Foundation"}
              <View>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 16,
                    
                  }}
                >
                  {"Mon 01st Jan 24"}
                </Text>
              </View>
            </Text>
            <View
              style={{
                width: 82,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  marginBottom: 10,
                  marginHorizontal: 10,
                  marginRight: responsiveMargin(1),
                }}
              >
                {"6:00 PM"}
                <View>
                    <Image></Image>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 16,
                      
                    }}
                  >
                    {"Abad"}
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>

		<View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#F2F3F7",
            borderRadius: 15,
            borderWidth: 3,
            paddingVertical: 10,
            paddingLeft: 15,
            paddingRight: 10,
            marginBottom: responsiveMargin(7),
            marginHorizontal: 17,
          }}
        >
          <Image
           source={require("../../assets/animals.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 60,
              height: 60,
              marginRight: responsiveMargin(2),
              paddingLeft: responsiveMargin(5),
              borderRadius:100,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 195,
              paddingLeft: responsiveMargin(2),
            }}
          >
            <Text
              style={{
                flex: 1,
                flexDirection: "row",
                color: "#000000",
                fontSize: getFontSize(17),
                marginBottom: responsiveMargin(1),
                
              }}
            >
              {"Raahi Foundation"}
              <View>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 16,
                    
                  }}
                >
                  {"Mon 01st Jan 24"}
                </Text>
              </View>
            </Text>
            <View
              style={{
                width: 82,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  marginBottom: 10,
                  marginHorizontal: 10,
                  marginRight: responsiveMargin(1),
                }}
              >
                {"6:00 PM"}
                <View>
                    <Image></Image>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 16,
                      
                    }}
                  >
                    {"Abad"}
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>

		<View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#F2F3F7",
            borderRadius: 15,
            borderWidth: 3,
            paddingVertical: 10,
            paddingLeft: 15,
            paddingRight: 10,
            marginBottom: responsiveMargin(7),
            marginHorizontal: 17,
          }}
        >
          <Image
           source={require("../../assets/animals.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 60,
              height: 60,
              marginRight: responsiveMargin(2),
              paddingLeft: responsiveMargin(5),
              borderRadius:100,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 195,
              paddingLeft: responsiveMargin(2),
            }}
          >
            <Text
              style={{
                flex: 1,
                flexDirection: "row",
                color: "#000000",
                fontSize: getFontSize(17),
                marginBottom: responsiveMargin(1),
                
              }}
            >
              {"Raahi Foundation"}
              <View>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 16,
                    
                  }}
                >
                  {"Mon 01st Jan 24"}
                </Text>
              </View>
            </Text>
            <View
              style={{
                width: 82,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  marginBottom: 10,
                  marginHorizontal: 10,
                  marginRight: responsiveMargin(1),
                }}
              >
                {"6:00 PM"}
                <View>
                    <Image></Image>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 16,
                      
                    }}
                  >
                    {"Abad"}
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>
		
      </ScrollView>
    </SafeAreaView>
  );
};
export default Appointment_list;
