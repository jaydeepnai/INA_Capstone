import {
  AntDesign,
  Entypo,
  FontAwesome,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
// import { PieChart } from 'react-native-svg-charts';
import PieChart from "react-native-pie-chart";
import Categories from "./Categories";

export default EventDetails = (props) => {
  const widthAndHeight = 120;
  const series = [50, 20];
  const sliceColor = ["orange", "white"];

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
        }}
      >
        <View>
        <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
          <View style={{ marginBottom: 13 }}>
            <ImageBackground
              source={require("../../../assets/family.jpg")}
              resizeMode={"contain"}
              style={{
                width: "100%",
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
                  {"Event"}
                </Text>
                <FontAwesome name="share-alt" size={24} color="white" />
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  marginHorizontal: 102,
                  marginLeft: 150,
                  width: "70%",
                  fontWeight: "bold",
                }}
              >
                {"Hannah Baker"}
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 13,
                  marginBottom: 5,
                  paddingTop: 20,
                  marginHorizontal: 102,
                  marginLeft: 150,
                  width: "70%",
                }}
              >
                {"Software Engineer"}
              </Text>
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
            <View
              style={{
                marginTop: 10,
              }}
            >
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
        <Text
          style={{
            color: "#000000",
            fontSize: 27,
            marginBottom: 20,
            marginHorizontal: 27,
          }}
        >
          {"SKILLS"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 26,
            marginHorizontal: 23,
          }}
        >
          <View
            style={{
              width: 125,
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: 15,
              paddingVertical: 7,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
              }}
            >
              {"English"}
            </Text>
          </View>
          <View
            style={{
              width: 125,
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: 15,
              paddingVertical: 7,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
              }}
            >
              {"Hindi"}
            </Text>
          </View>
          <View
            style={{
              width: 125,
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: 15,
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
              }}
            >
              {"Gujarati"}
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: "#000000",
            fontSize: 27,
            marginBottom: 24,
            marginHorizontal: 26,
          }}
        >
          {"LANGUAGE SPOKEN"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 26,
            marginHorizontal: 23,
          }}
        >
          <View
            style={{
              width: 125,
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: 15,
              paddingVertical: 7,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
              }}
            >
              {"English"}
            </Text>
          </View>
          <View
            style={{
              width: 125,
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: 15,
              paddingVertical: 7,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
              }}
            >
              {"Hindi"}
            </Text>
          </View>
          <View
            style={{
              width: 125,
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: 15,
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
              }}
            >
              {"Gujarati"}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#000000",
            fontSize: 27,
            marginBottom: 16,
            marginHorizontal: 27,
          }}
        >
          {"Select Date"}
        </Text>
        <ScrollView
          horizontal
          style={{
            flexDirection: "row",
            marginBottom: 21,
            marginHorizontal: 26,
          }}
        >
          <View
            style={{
              width: 79,
              height: 79,
              alignSelf: "flex-start",
              marginRight: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: 15,
                height: 80,
                width: 80,
              }}
            ></View>
            <Text
              style={{
                position: "absolute",
                top: 25,
                right: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {"Mon\n11"}
            </Text>
          </View>
          <View
            style={{
              width: 79,
              height: 79,
              alignSelf: "flex-start",
              marginRight: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: 15,
                height: 80,
                width: 80,
              }}
            ></View>
            <Text
              style={{
                position: "absolute",
                top: 25,
                right: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {"Mon\n11"}
            </Text>
          </View>
          <View
            style={{
              width: 79,
              height: 79,
              alignSelf: "flex-start",
              marginRight: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: 15,
                height: 80,
                width: 80,
              }}
            ></View>
            <Text
              style={{
                position: "absolute",
                top: 25,
                right: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {"Mon\n11"}
            </Text>
          </View>
          <View
            style={{
              width: 79,
              height: 79,
              alignSelf: "flex-start",
              marginRight: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: 15,
                height: 80,
                width: 80,
              }}
            ></View>
            <Text
              style={{
                position: "absolute",
                top: 25,
                right: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {"Mon\n11"}
            </Text>
          </View>
          <View
            style={{
              width: 79,
              height: 79,
              alignSelf: "flex-start",
              marginRight: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: 15,
                height: 80,
                width: 80,
              }}
            ></View>
            <Text
              style={{
                position: "absolute",
                top: 25,
                right: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {"Mon\n11"}
            </Text>
          </View>
          <View
            style={{
              width: 79,
              height: 79,
              alignSelf: "flex-start",
              marginRight: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: 15,
                height: 80,
                width: 80,
              }}
            ></View>
            <Text
              style={{
                position: "absolute",
                top: 25,
                right: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {"Mon\n11"}
            </Text>
          </View>
          <View
            style={{
              width: 79,
              height: 79,
              alignSelf: "flex-start",
              marginRight: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: 15,
                height: 80,
                width: 80,
              }}
            ></View>
            <Text
              style={{
                position: "absolute",
                top: 25,
                right: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {"Mon\n11"}
            </Text>
          </View>
        </ScrollView>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 22,
            marginHorizontal: 81,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // borderColor:5,
            // borderColor:"black",
            // borderWidth:2,
            backgroundColor: "whitesmoke",
            padding: 15,
            margin: 15,
            borderRadius: 30,
          }}
        >
          <View>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.45}
              // coverFill={'#FFF'}
            />
            <Text
              style={{
                color: "#000000",
                fontSize: 27,
                textAlign: "center",
              }}
            >
              {"83%"}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
              }}
            >
              {"Donation Received"}
            </Text>
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
                marginHorizontal: 1,
              }}
            >
              {"₹5,50,000 of ₹7,00,000 "}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#000000",
            fontSize: 27,
            marginBottom: 16,
            marginHorizontal: 30,
          }}
        >
          {"LOCATION"}
        </Text>
        <View
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: 15,
            paddingVertical: 24,
            paddingHorizontal: 8,
            marginBottom: 34,
            marginHorizontal: 25,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 18,
              width: 340,
            }}
          >
            {"Cloud 9  near umiya-vijay society satellite \nAhemedabad 380015"}
          </Text>
        </View>
        {/* <Text
          style={{
            color: "#000000",
            fontSize: 27,
            marginBottom: 20,
            marginHorizontal: 20,
          }}
        >
          {"CATEGORY"}
        </Text>
        <View
          style={{
            marginBottom: 20,
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              width: 424,
              height: 112,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 38,
              paddingBottom: 6,
              paddingLeft: 16,
              paddingRight: 64,
            }}
          >
            <View
              style={{
                width: 70,
                alignSelf: "flex-start",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 35,
                  paddingTop: 36,
                  paddingBottom: 19,
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
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 13,
                  }}
                >
                  {"Animal"}
                </Text>
              </View>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  top: -25,
                  right: 2,
                  width: 65,
                  height: 63,
                }}
              />
            </View>
            <View
              style={{
                width: 70,
                alignSelf: "flex-start",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F5F5F5",
                  borderRadius: 35,
                  borderWidth: 1,
                  paddingTop: 36,
                  paddingBottom: 19,
                  shadowColor: "#FFF730",
                  shadowOpacity: 1.0,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 13,
                  }}
                >
                  {"Poverty"}
                </Text>
              </View>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  top: -33,
                  left: 2,
                  width: 65,
                  height: 63,
                }}
              />
            </View>
            <View
              style={{
                width: 70,
                alignSelf: "flex-start",
              }}
            >
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 35,
                  paddingTop: 31,
                  paddingBottom: 13,
                  paddingHorizontal: 13,
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
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 12,
                    width: 44,
                  }}
                >
                  {"Child Welfare"}
                </Text>
              </View>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  top: -28,
                  left: 2,
                  width: 65,
                  height: 54,
                }}
              />
            </View>
            <View
              style={{
                width: 70,
                alignSelf: "flex-start",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 35,
                  paddingTop: 38,
                  paddingBottom: 18,
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
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 12,
                  }}
                >
                  {"Education"}
                </Text>
              </View>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  top: -33,
                  left: 1,
                  width: 65,
                  height: 63,
                }}
              />
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 6,
              right: 0,
              width: 70,
              height: 68,
              backgroundColor: "#FFFFFF",
              borderRadius: 35,
              shadowColor: "#00000040",
              shadowOpacity: 0.3,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowRadius: 4,
              elevation: 4,
            }}
          ></View>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              position: "absolute",
              top: 6,
              right: 3,
              width: 65,
              height: 63,
            }}
          />
        </View> */}
        <Categories />
        <Text
          style={{
            color: "#000000",
            fontSize: 27,
            marginBottom: 20,
            marginHorizontal: 20,
          }}
        >
          {"TIME"}
        </Text>
        <View
          style={{
            width: 170,
            height: 34,
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            borderRadius: 15,
            marginBottom: 20,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
            }}
          >
            {"10:AM - 06:PM"}
          </Text>
        </View>
        <Text
          style={{
            color: "#000000",
            fontSize: 27,
            marginBottom: 9,
            marginHorizontal: 20,
          }}
        >
          {"BUDGET"}
        </Text>
        <View
          style={{
            width: 170,
            height: 34,
            backgroundColor: "#D9D9D9",
            borderRadius: 15,
            marginBottom: 20,
            marginHorizontal: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
            }}
          >
            {"20,000"}
          </Text>
        </View>
        <Text
          style={{
            color: "#000000",
            fontSize: 27,
            marginBottom: 9,
            marginHorizontal: 20,
          }}
        >
          {"Rating"}
        </Text>
        <View
          style={{
            width: 170,
            height: 34,
            backgroundColor: "#D9D9D9",
            borderRadius: 15,
            marginBottom: 20,
            marginHorizontal: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
            }}
          >
            5.4
          </Text>
        </View>
        <View
          style={{
            width: 390,
            height: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 17,
            marginBottom: 20,
            marginHorizontal: 14,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 24,
            }}
          >
            {"Join as a Volunteer"}
          </Text>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 15,
              width: 50,
              height: 50,
            }}
          />
        </View>
        <Text
          style={{
            color: "#000000",
            fontSize: 27,
            marginBottom: 20,
            marginHorizontal: 20,
          }}
        >
          {"SERVICES UPLOADED MEDIA"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
            marginHorizontal: 9,
          }}
        >
          <ImageBackground
            source={require("../../../assets/NGO/photo_9.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 133,
              height: 133,
            }}
          ></ImageBackground>
          <Image
            source={require("../../../assets/NGO/photo_9.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 133,
              height: 133,
            }}
          />
          <Image
            source={require("../../../assets/NGO/photo_9.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 133,
              height: 133,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
            marginHorizontal: 9,
          }}
        >
          <Image
            source={require("../../../assets/NGO/photo_9.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 133,
              height: 133,
            }}
          />
          <Image
            source={require("../../../assets/NGO/photo_9.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 133,
              height: 133,
            }}
          />
          <Image
            source={require("../../../assets/NGO/photo_9.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 133,
              height: 133,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 27,
            marginHorizontal: 9,
          }}
        >
          <Image
            source={require("../../../assets/NGO/photo_9.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 133,
              height: 133,
            }}
          />
          <Image
            source={require("../../../assets/NGO/photo_9.jpg")}
            resizeMode={"stretch"}
            style={{
              width: 133,
              height: 133,
            }}
          />
          <View
            style={{
              width: 133,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 133,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: -2,
                width: 133,
                height: 132,
                backgroundColor: "#00000099",
                paddingLeft: 26,
                paddingRight: 15,
              }}
            >
              <Text
                style={{
                  color: "#FFF730",
                  fontSize: 20,
                  marginTop: 58,
                }}
              >
                {"SEE MORE"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
