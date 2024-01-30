import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  ImageBackground,
  Pressable,
  StatusBar,
} from "react-native";
import {
  responsiveMargin,
  getFontSize,
  width,
} from "../../../lib/Validation/RelativeValues";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopPosts from "../../../components/User/Home/TopPosts";
import { useNavigation } from "@react-navigation/native";
import { Card, Chip } from "react-native-paper";

export default NGOProfile = (props) => {
  const seeAllImages = () => {
    props.navigation.navigate("NGOTotalImages");
  };
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <NGOHeader />
      <Tab.Navigator>
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Posts" component={TopPosts} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const NGOHeader = () => {
  return (
    <>
      <View>
        <View>
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="white"
            translucent={true}
          />
          <View style={{ marginBottom: responsiveMargin(20), marginTop: 25 }}>
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
                  marginBottom: responsiveMargin(38),
                  marginHorizontal: responsiveMargin(5),
                  paddingTop: responsiveMargin(3),
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
                  {"NGO"}
                </Text>
                <FontAwesome name="share-alt" size={24} color="white" />
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  marginHorizontal: responsiveMargin(10),
                  marginLeft: 150,
                  // paddingTop:100,
                  top: 35,
                  width: "70%",
                  fontWeight: "bold",
                }}
              >
                {"Hannah Baker"}
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: getFontSize(15),
                  // marginBottom: 5,
                  paddingTop: responsiveMargin(5),
                  top: responsiveMargin(5),
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
                bottom: -50,
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
                marginTop: responsiveMargin(2),
                top: responsiveMargin(8),
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: -40,
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
      </View>
    </>
  );
};

const About = () => {
  const navigation = useNavigation();
  const seeAllImages = () => {
    navigation.navigate("NGOTotalImages");
  };
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 5,
          marginHorizontal: responsiveMargin(20),
          marginTop: responsiveMargin(8),
        }}
      >
        <Image
          source={require("../../../assets/NGO/followers.png")}
          resizeMode={"stretch"}
          style={{
            width: 30,
            height: 30,
          }}
        />
        <Image
          source={require("../../../assets/NGO/placard.png")}
          resizeMode={"stretch"}
          style={{
            width: 30,
            height: 30,
          }}
        />
        <Image
          source={require("../../../assets/NGO/customer.png")}
          resizeMode={"stretch"}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 5,
          marginHorizontal: responsiveMargin(20),
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 16,
          }}
        >
          {"10m"}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 16,
          }}
        >
          {"60"}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 16,
          }}
        >
          {"40"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 5,
          marginHorizontal: responsiveMargin(12),
          marginLeft: responsiveMargin(20),
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 10,
            flex: 1,
          }}
        >
          {"Followers"}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 10,
            flex: 1,
          }}
        >
          {"  NGO Events"}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 10,
            flex: 1,
          }}
        >
          {"    NGO services"}
        </Text>
      </View>
      <Text
        style={{
          fontSize: getFontSize(14),
          marginHorizontal: responsiveMargin(5),
        }}
      >
        {
          "At SafePaws our mission is simple yet profound: to provide a haven for animals in need, where compassion meets action. Read more..."
        }
      </Text>
      <Text
        style={{
          color: "#000000",
          fontSize: 20,
          marginBottom: 10,
          marginHorizontal: 25,
          marginTop: responsiveMargin(5),
        }}
      >
        {"DOCUMENTS"}
      </Text>
      <ScrollView
        horizontal
        style={{
          flexDirection: "row",
          paddingBottom: 10,
          paddingHorizontal: 10,
        }}
      >
        <Card
          mode="elevated"
          style={{
            margin: 10,
          }}
        >
          <Card.Content>
            <Image
              source={require("../../../assets/NGO/certi.jpg")}
              resizeMode={"stretch"}
              style={{
                borderRadius: 5,
                width: 220,
                height: 240,
                marginRight: 7,
              }}
            />
          </Card.Content>
        </Card>
        <Card
          mode="elevated"
          style={{
            margin: 10,
            marginRight: 30,
          }}
        >
          <Card.Content>
            <Image
              source={require("../../../assets/NGO/certi.jpg")}
              resizeMode={"stretch"}
              style={{
                borderRadius: 5,
                width: 220,
                height: 240,
                marginRight: 7,
              }}
            />
          </Card.Content>
        </Card>
      </ScrollView>

      <View
        style={{
          // marginBottom: 23,
          marginHorizontal: 6,
        }}
      >
        <View
          style={{
            margin: responsiveMargin(5),
            marginLeft: responsiveMargin(1),
          }}
        >
          <Text
            style={{
              position: "absolute",
              top: -18,
              left: 20,
              color: "#000000",
              fontSize: 20,
            }}
          >
            {"SERVED SERVICES"}
          </Text>
          <ScrollView
            horizontal
            style={{
              marginTop: responsiveMargin(5),
              marginHorizontal: 1,
            }}
          >
            <Card mode="elevated" style={{ margin: 5 }}>
              <Card.Content>
                <Image
                  source={require("../../../assets/NGO/dog_adopt.jpg")}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 10,
                    width: width * 0.6,
                    height: 254,
                  }}
                />
                <View
                  style={{
                    padding: responsiveMargin(1),
                  }}
                >
                  <Text style={{ fontSize: getFontSize(18) }}>Hare Krishn</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      24th Jan 24
                    </Chip>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      Vejalpur
                    </Chip>
                  </View>
                </View>
              </Card.Content>
            </Card>
            <Card mode="elevated" style={{ margin: 5 }}>
              <Card.Content>
                <Image
                  source={require("../../../assets/NGO/dog_adopt.jpg")}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 10,
                    width: width * 0.6,
                    height: 254,
                  }}
                />
                <View
                  style={{
                    padding: responsiveMargin(1),
                  }}
                >
                  <Text style={{ fontSize: getFontSize(18) }}>Hare Krishn</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      24th Jan 24
                    </Chip>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      Vejalpur
                    </Chip>
                  </View>
                </View>
              </Card.Content>
            </Card>
            <Card mode="elevated" style={{ margin: 5 }}>
              <Card.Content>
                <Image
                  source={require("../../../assets/NGO/dog_adopt.jpg")}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 10,
                    width: width * 0.6,
                    height: 254,
                  }}
                />
                <View
                  style={{
                    padding: responsiveMargin(1),
                  }}
                >
                  <Text style={{ fontSize: getFontSize(18) }}>Hare Krishn</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      24th Jan 24
                    </Chip>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      Vejalpur
                    </Chip>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </ScrollView>
        </View>
      </View>
      <Text
        style={{
          color: "#000000",
          fontSize: 20,
          marginBottom: 15,
          marginHorizontal: 25,
        }}
      >
        {"TOP ACHIVERS OF THE MONTH"}
      </Text>
      <View
        style={{
          marginBottom: 21,
          marginHorizontal: 1,
        }}
      >
        <View
          style={{
            paddingVertical: 3,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              marginHorizontal: 17,
            }}
          >
            <View
              style={{
                width: 70,
                marginLeft:responsiveMargin(3)
              }}
            >
              <Image
                source={require("../../../assets/NGO/me.jpg")}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 35,
                  width: 70,
                  height: 70,
                }}
              />
              <Image
                source={require("../../../assets/NGO/one.png")}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  bottom: 15,
                  right: -6,
                  width: 25,
                  height: 22,
                }}
              />
              <Text style={{textAlign:"center"}}>
                Rubina
              </Text>
            </View>
            <View
              style={{
                width: 70,
                marginLeft:responsiveMargin(3)
              }}
            >
              <Image
                source={require("../../../assets/NGO/me.jpg")}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 35,
                  width: 70,
                  height: 70,
                }}
              />
              <Image
                source={require("../../../assets/NGO/one.png")}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  bottom: 15,
                  right: -6,
                  width: 25,
                  height: 22,
                }}
              />
              <Text style={{textAlign:"center"}}>
                Rubina
              </Text>
            </View>
            <View
              style={{
                width: 70,
                marginLeft:responsiveMargin(3)
              }}
            >
              <Image
                source={require("../../../assets/NGO/me.jpg")}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 35,
                  width: 70,
                  height: 70,
                }}
              />
              <Image
                source={require("../../../assets/NGO/one.png")}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  bottom: 15,
                  right: -6,
                  width: 25,
                  height: 22,
                }}
              />
              <Text style={{textAlign:"center"}}>
                Rubina
              </Text>
            </View>
            
          </View>
        </View>
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode={"stretch"}
          style={{
            position: "absolute",
            top: 3,
            right: -63,
            borderRadius: 35,
            width: 70,
            height: 70,
          }}
        />
      </View>
      <Text
        style={{
          color: "#000000",
          fontSize: getFontSize(20),
          marginHorizontal: responsiveMargin(8),
        }}
      >
        {"UPCOMING EVENTS"}
      </Text>
      <ScrollView
            horizontal
            style={{
              marginTop: responsiveMargin(3),
              marginHorizontal: 1,
              paddingBottom: responsiveMargin(3)
            }}
          >
            <Card mode="elevated" style={{ marginLeft: responsiveMargin(5),marginBottom:responsiveMargin(2) }}>
              <Card.Content>
                <Image
                  source={require("../../../assets/NGO/dog_adopt.jpg")}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 10,
                    width: width * 0.6,
                    height: 254,
                  }}
                />
                <View
                  style={{
                    padding: responsiveMargin(1),
                  }}
                >
                  <Text style={{ fontSize: getFontSize(18) }}>Hare Krishn</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      24th Jan 24
                    </Chip>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      Vejalpur
                    </Chip>
                  </View>
                </View>
              </Card.Content>
            </Card>
            <Card mode="elevated" style={{ marginLeft: responsiveMargin(5),marginBottom:responsiveMargin(2) }}>
              <Card.Content>
                <Image
                  source={require("../../../assets/NGO/dog_adopt.jpg")}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 10,
                    width: width * 0.6,
                    height: 254,
                  }}
                />
                <View
                  style={{
                    padding: responsiveMargin(1),
                  }}
                >
                  <Text style={{ fontSize: getFontSize(18) }}>Hare Krishn</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      24th Jan 24
                    </Chip>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      Vejalpur
                    </Chip>
                  </View>
                </View>
              </Card.Content>
            </Card>
            <Card mode="elevated" style={{ marginLeft: responsiveMargin(5),marginBottom:responsiveMargin(2) }}>
              <Card.Content>
                <Image
                  source={require("../../../assets/NGO/dog_adopt.jpg")}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 10,
                    width: width * 0.6,
                    height: 254,
                  }}
                />
                <View
                  style={{
                    padding: responsiveMargin(1),
                  }}
                >
                  <Text style={{ fontSize: getFontSize(18) }}>Hare Krishn</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      24th Jan 24
                    </Chip>
                    <Chip
                      style={{
                        fontSize: getFontSize(15),
                        margin: responsiveMargin(1),
                      }}
                    >
                      Vejalpur
                    </Chip>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 15,
          justifyContent: "space-between",
          paddingHorizontal:responsiveMargin(2),
          margin: responsiveMargin(5)
        }}
      >
        <Text
          style={{
            fontSize: getFontSize(20),
            paddingLeft: responsiveMargin(3)
          }}
        >
          {"Join as a Volunteer"}
        </Text>
        <Image
          source={require("../../../assets/NGO/volunteer.jpg")}
          resizeMode={"stretch"}
          style={{
            width: width*0.20,
            height:70
          }}
        />
      </View>
      <Text
        style={{
          color: "#000000",
          fontSize: 20,
          marginBottom: 25,
          marginHorizontal: 10,
        }}
      >
        {"SARVED UPLOADED MEDIA"}
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
          <Pressable
            onPress={seeAllImages}
            style={{
              position: "absolute",
              bottom: 0,
              left: -2,
              width: "100%",
              height: "100%",
              backgroundColor: "#00000099",
              paddingLeft: 26,
              paddingRight: 15,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFF730",
                fontSize: 20,
                marginTop: 40,
                alignItems: "center",
              }}
            >
              {"SEE MORE"}
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          width: 364,
          height: 85,
          marginBottom: 31,
          marginHorizontal: 28,
        }}
      >
        <View
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 10,
            paddingVertical: 19,
            paddingLeft: 128,
            paddingRight: 52,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
              width: 184,
            }}
          >
            {"Give us your Honest Feedback NOW!"}
          </Text>
        </View>
        <Image
          source={require("../../../assets/NGO/feedback.png")}
          resizeMode={"stretch"}
          style={{
            position: "absolute",
            top: -14,
            left: -13,
            width: 84,
            height: 96,
          }}
        />
      </View>
      <Text
        style={{
          color: "#000000",
          fontSize: 24,
          marginBottom: 5,
          marginHorizontal: 11,
        }}
      >
        {"Resource Available"}
      </Text>
      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            paddingVertical: 41,
            paddingHorizontal: 4,
          }}
        >
          <View
            style={{
              width: 201,
              marginRight: 5,
            }}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#D2F694",
                borderRadius: 19,
                paddingTop: 76,
                paddingBottom: 22,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 32,
                }}
              >
                {"Food"}
              </Text>
            </View>
            <Image
              source={require("../../../assets/NGO/food.jpg")}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                top: -41,
                left: 51,
                width: 96,
                height: 96,
              }}
            />
          </View>
          <View
            style={{
              width: 201,
            }}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#D2F694",
                borderRadius: 19,
                paddingTop: 76,
                paddingBottom: 22,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 32,
                }}
              >
                {"Clothes"}
              </Text>
            </View>
            <Image
              source={require("../../../assets/NGO/cloth.jpg")}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                top: -41,
                left: 51,
                width: 96,
                height: 96,
              }}
            />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 33,
            right: -187,
            width: 201,
            height: 130,
            backgroundColor: "#D2F694",
            borderRadius: 19,
          }}
        ></View>
      </View>
    </ScrollView>
  );
};
