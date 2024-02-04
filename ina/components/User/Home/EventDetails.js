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
  TouchableOpacity,
} from "react-native";
// import { PieChart } from 'react-native-svg-charts';
import PieChart from "react-native-pie-chart";
import Categories from "./Categories";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button, Card } from "react-native-paper";
import { Post } from "./TopPosts";
import { getFontSize, responsiveMargin, width } from "../../../lib/Validation/RelativeValues";
import { useNavigation } from "@react-navigation/native";
const widthAndHeight = 60;
const series = [50, 20];
const sliceColor = ["orange", "white"];

const Tab = createMaterialTopTabNavigator();
export default EventDetails = (props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <EventHeader />
      <Tab.Navigator>
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Posts" component={Posts} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const About = () => {
  const navigation = useNavigation();
  const seeAllImages = () => {
    navigation.navigate("NGOTotalImages");
  };
  return (
    <ScrollView>
      <Text
        style={{
          color: "#000000",
          fontSize: getFontSize(20),
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      >
        {"SKILLS"}
      </Text>
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 5,
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            width: width*0.30,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            paddingVertical: 5,
            marginRight:responsiveMargin(2)
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: getFontSize(13),
            }}
          >
            {"English"}
          </Text>
        </View>
        <View
          style={{
            width: width*0.30,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            paddingVertical: 5,
            marginRight:responsiveMargin(2)
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: getFontSize(13),
            }}
          >
            {"English"}
          </Text>
        </View>
        <View
          style={{
            width: width*0.30,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            paddingVertical: 5,
            marginRight:responsiveMargin(2)
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: getFontSize(13),
            }}
          >
            {"English"}
          </Text>
        </View>
        <View
          style={{
            width: width*0.30,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            paddingVertical: 5,
            marginRight:responsiveMargin(2)
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: getFontSize(13),
            }}
          >
            {"English"}
          </Text>
        </View>
       
      </View>

      <Text
        style={{
          color: "#000000",
          fontSize: 20,
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      >
        {"LANGUAGE SPOKEN"}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          marginHorizontal: 23,
        }}
      >
        <View
          style={{
            width: width*0.30,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            paddingVertical: 5,
            marginRight:responsiveMargin(2)
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: getFontSize(13),
            }}
          >
            {"English"}
          </Text>
        </View>
         <View
          style={{
            width: width*0.30,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            paddingVertical: 5,
            marginRight:responsiveMargin(2)
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: getFontSize(13),
            }}
          >
            {"English"}
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: "#000000",
          fontSize: 20,
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      >
        {"DATES"}
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
              backgroundColor: "white",
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
              backgroundColor: "white",
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
              backgroundColor: "white",
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
              backgroundColor: "white",
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
              backgroundColor: "white",
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // borderColor:5,
          // borderColor:"black",
          // borderWidth:2,
          backgroundColor: "white",
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
              fontSize: 15,
              padding: 5,
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
          fontSize: 20,
          marginBottom: 10,
          marginHorizontal: 30,
        }}
      >
        {"LOCATION"}
      </Text>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          padding: 7,
          marginBottom: 34,
          marginHorizontal: 25,
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: getFontSize(15),
            width: 340,
          }}
        >
          {"Cloud 9  near umiya-vijay society satellite \nAhemedabad 380015"}
        </Text>
      </View>

      <Categories />
      <Text
        style={{
          color: "#000000",
          fontSize: 20,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      >
        {"TIME"}
      </Text>
      <View
        style={{
          width: 130,
          height: 34,
          backgroundColor: "white",
          borderRadius: 50,
          marginBottom: 10,
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 15,
            textAlign: "center",
            paddingTop: 4,
          }}
        >
          {"10:AM - 06:PM"}
        </Text>
      </View>
      <Text
        style={{
          color: "#000000",
          fontSize: 20,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      >
        {"BUDGET"}
      </Text>
      <View
        style={{
          width: 80,
          height: 34,
          backgroundColor: "white",
          borderRadius: 15,
          marginBottom: 10,
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 15,
            textAlign: "center",
            paddingTop: 6,
          }}
        >
          {"20,000"}
        </Text>
      </View>
      <Text
        style={{
          color: "#000000",
          fontSize: 20,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      >
        {"Rating"}
      </Text>
      <View
        style={{
          width: 50,
          height: 34,
          backgroundColor: "white",
          borderRadius: 15,
          marginBottom: 20,
          marginHorizontal: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 15,
            paddingTop: 5,
          }}
        >
          5.4
        </Text>
      </View>
      <View
        style={{
          width: width*0.93,
          height: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
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
            fontSize: getFontSize(20),
          }}
        >
          {"JOIN AS A VOLUNTEER"}
        </Text>
        <Image
          source={require("../../../assets/worker.webp")}
          resizeMode={"stretch"}
          style={{
            borderRadius: 15,
            width: 60,
            height: 60,
          }}
        />
      </View>
      <Text
        style={{
          color: "#000000",
          fontSize: 20,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      >
        {"SERVICES UPLOADED MEDIA"}
      </Text>
      <Card
        mode="elevated"
        style={{
          margin: 10,
        }}
      >
        <Card.Content>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 4,
              marginHorizontal: 3,
            }}
          >
            <Image
              source={require("../../../assets/NGO/photo_9.jpg")}
              resizeMode={"stretch"}
              style={{
                width: "33%",
                height: 133,
              }}
            ></Image>
            <Image
              source={require("../../../assets/NGO/photo_9.jpg")}
              resizeMode={"stretch"}
              style={{
                width: "33%",
                height: 133,
              }}
            />
            <Image
              source={require("../../../assets/NGO/photo_9.jpg")}
              resizeMode={"stretch"}
              style={{
                width: "33%",
                height: 133,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 4,
              marginHorizontal: 3,
            }}
          >
            <Image
              source={require("../../../assets/NGO/photo_9.jpg")}
              resizeMode={"stretch"}
              style={{
                width: "33%",
                height: 133,
              }}
            ></Image>
            <Image
              source={require("../../../assets/NGO/photo_9.jpg")}
              resizeMode={"stretch"}
              style={{
                width: "33%",
                height: 133,
              }}
            />
            <Image
              source={require("../../../assets/NGO/photo_9.jpg")}
              resizeMode={"stretch"}
              style={{
                width: "33%",
                height: 133,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 4,
              marginHorizontal: 3,
            }}
          >
            <Image
              source={require("../../../assets/NGO/photo_9.jpg")}
              resizeMode={"stretch"}
              style={{
                width: "33%",
                height: 133,
              }}
            ></Image>
            <Image
              source={require("../../../assets/NGO/photo_9.jpg")}
              resizeMode={"stretch"}
              style={{
                width: "33%",
                height: 133,
              }}
            />
            <TouchableOpacity
                style={{
                  bottom: 0,
                  left: -2,
                  width: "33%",
                  height: 133,
                  backgroundColor: "#00000099",
                }}
                onPress={seeAllImages}
              >
                <Text
                  style={{
                    color: "#FFF730",
                    fontSize: 20,
                    marginTop: 58,
                    alignSelf: "center",
                  }}
                >
                  {"SEE MORE"}
                </Text>
              </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const Posts = ()=>{
  return (
    <ScrollView style={{marginTop:20}}>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
    </ScrollView>
  )
}

const EventHeader = () => {
  return (
    <View>
      <View>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
          translucent={true}
        />
        <View style={{ marginBottom: responsiveMargin(20),marginTop:25}}>
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
                paddingTop: responsiveMargin(3)
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
                marginHorizontal: responsiveMargin(10),
                marginLeft: 150,
                // paddingTop:100,
                top:35,
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
                top:responsiveMargin(5),
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
  );
};
