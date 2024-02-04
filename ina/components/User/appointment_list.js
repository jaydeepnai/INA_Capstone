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
            paddingLeft: 24,
            paddingRight: 10,
            marginBottom: responsiveMargin(7),
            marginHorizontal: 17,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 56,
              height: 60,
              marginRight: responsiveMargin(2),
              paddingLeft: responsiveMargin(5),
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 195,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(17),
                marginBottom: responsiveMargin(5),
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
                  <Text
                    style={{
                      // color: "#000000",
                      fontSize: 16,
                      // marginRight:responsiveMargin(10),
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
            paddingLeft: 24,
            paddingRight: 10,
            marginBottom: responsiveMargin(7),
            marginHorizontal: 17,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 56,
              height: 60,
              marginRight: responsiveMargin(2),
              paddingLeft: responsiveMargin(5),
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 195,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(17),
                marginBottom: responsiveMargin(5),
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
                  <Text
                    style={{
                      // color: "#000000",
                      fontSize: 16,
                      // marginRight:responsiveMargin(10),
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
            paddingLeft: 24,
            paddingRight: 10,
            marginBottom: responsiveMargin(7),
            marginHorizontal: 17,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 56,
              height: 60,
              marginRight: responsiveMargin(2),
              paddingLeft: responsiveMargin(5),
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 195,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(17),
                marginBottom: responsiveMargin(5),
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
                  <Text
                    style={{
                      // color: "#000000",
                      fontSize: 16,
                      // marginRight:responsiveMargin(10),
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
            paddingLeft: 24,
            paddingRight: 10,
            marginBottom: responsiveMargin(7),
            marginHorizontal: 17,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 56,
              height: 60,
              marginRight: responsiveMargin(2),
              paddingLeft: responsiveMargin(5),
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 195,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(17),
                marginBottom: responsiveMargin(5),
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
                  <Text
                    style={{
                      // color: "#000000",
                      fontSize: 16,
                      // marginRight:responsiveMargin(10),
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
            paddingLeft: 24,
            paddingRight: 10,
            marginBottom: responsiveMargin(7),
            marginHorizontal: 17,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 56,
              height: 60,
              marginRight: responsiveMargin(2),
              paddingLeft: responsiveMargin(5),
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 195,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: getFontSize(17),
                marginBottom: responsiveMargin(5),
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
                  <Text
                    style={{
                      // color: "#000000",
                      fontSize: 16,
                      // marginRight:responsiveMargin(10),
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
