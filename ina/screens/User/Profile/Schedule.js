import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, View, ScrollView, Image, Text } from "react-native";
import { TextInput } from "react-native-paper";

export default Schedule = ({ navigation }) => {
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
                fontSize: 25,
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
                fontSize: 25,
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
                fontSize: 25,
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
                fontSize: 25,
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
                fontSize: 25,
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
                fontSize: 25,
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
                fontSize: 25,
              }}
            >
              {"Mon\n 11"}
            </Text>
          </View>
          
          
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 56,
            marginHorizontal: 32,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 30,
              marginRight: 4,
              flex: 1,
            }}
          >
            {"11"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 30,
              marginRight: 57,
            }}
          >
            {"12"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 30,
              marginRight: 56,
            }}
          >
            {"13"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 30,
              marginRight: 39,
            }}
          >
            {"14"}
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 30,
            }}
          >
            {"15"}
          </Text>
        </View> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 34,
            marginHorizontal: 18,
          }}
        >
          <View
            style={{
              width: 91,
              alignSelf: "flex-start",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 24,
                marginBottom: 65,
                marginHorizontal: 9,
              }}
            >
              {"10:00"}
            </Text>
          </View>
          <View
            style={{
              width: 274,
              alignSelf: "flex-start",
              backgroundColor: "#F1B7B7",
              borderRadius: 15,
              paddingVertical: 19,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 24,
                marginBottom: 9,
                marginHorizontal: 21,
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
                  fontSize: 20,
                  flex: 1,
                  paddingLeft: 10
                }}
              >
                {"9:30-10:30"}
              </Text>
            </View>
           
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 34,
            marginHorizontal: 18,
          }}
        >
          <View
            style={{
              width: 91,
              alignSelf: "flex-start",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 24,
                marginBottom: 65,
                marginHorizontal: 9,
              }}
            >
              {"10:00"}
            </Text>
          </View>
          <View
            style={{
              width: 274,
              alignSelf: "flex-start",
              backgroundColor: "#F1B7B7",
              borderRadius: 15,
              paddingVertical: 19,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 24,
                marginBottom: 9,
                marginHorizontal: 21,
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
                  fontSize: 20,
                  flex: 1,
                  paddingLeft: 10
                }}
              >
                {"9:30-10:30"}
              </Text>
            </View>
           
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 34,
            marginHorizontal: 18,
          }}
        >
          <View
            style={{
              width: 91,
              alignSelf: "flex-start",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 24,
                marginBottom: 65,
                marginHorizontal: 9,
              }}
            >
              {"10:00"}
            </Text>
          </View>
          <View
            style={{
              width: 274,
              alignSelf: "flex-start",
              backgroundColor: "#F1B7B7",
              borderRadius: 15,
              paddingVertical: 19,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 24,
                marginBottom: 9,
                marginHorizontal: 21,
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
                  fontSize: 20,
                  flex: 1,
                  paddingLeft: 10
                }}
              >
                {"9:30-10:30"}
              </Text>
            </View>
           
          </View>
        </View>
         <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 34,
            marginHorizontal: 18,
          }}
        >
          <View
            style={{
              width: 91,
              alignSelf: "flex-start",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 24,
                marginBottom: 65,
                marginHorizontal: 9,
              }}
            >
              {"10:00"}
            </Text>
          </View>
          <View
            style={{
              width: 274,
              alignSelf: "flex-start",
              backgroundColor: "#F1B7B7",
              borderRadius: 15,
              paddingVertical: 19,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 24,
                marginBottom: 9,
                marginHorizontal: 21,
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
                  fontSize: 20,
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
