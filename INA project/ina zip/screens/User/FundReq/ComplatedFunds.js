import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FAB } from "react-native-paper";

const ComplatedFunds = () => {

  const imageUrls = [
    require('../../../assets/images/Fund_Request_NGO_PP/7_Charity.jpg'),
    require('../../../assets/images/Fund_Request_NGO_PP/6_Warrior.png'),
    require('../../../assets/images/Fund_Request_NGO_PP/5_UNN.jpg'),
    require('../../../assets/images/Fund_Request_NGO_PP/4_CON.jpg'),
    require('../../../assets/images/Fund_Request_NGO_PP/3_SEST.jpg'),
    require('../../../assets/images/Fund_Request_NGO_PP/2_ASO.jpg'),
    require('../../../assets/images/Fund_Request_NGO_PP/1_Earth.jpeg'),
    // Add more image paths as needed
  ];

  return (
    <View>
    <ScrollView>
      

      {imageUrls.map((imageUrl, index) => (
        <View
          style={{
            width: "auto",
            height: 95,
            marginBottom: 40,
          }}
        >
          <View
            style={{
              margin: 20,
              // marginBottom: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "#D2F694",
                borderRadius: 10,
                paddingVertical: 14,
                paddingLeft: 65,
                marginLeft: 70,
                //   marginBottom:10
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                {"ATELIER AFRICA SAFARIS"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 22,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: "flex-start",
                    marginRight: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                      marginBottom: 4,
                    }}
                  >
                    {"Requirement: 5,00,000 "}
                  </Text>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                    }}
                  >
                    {"Fulfill: 2,54,015 "}
                  </Text>
                </View>

                <View>
                  <AntDesign name="piechart" size={24} color="black" />
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                    }}
                  >
                    {"50.68%"}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}
              >
                {"Days left: 39 DAYS "}
              </Text>
            </View>


              <Image
                key={index}
                source={imageUrl}
                resizeMode={"cover"}
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  borderRadius: 100,
                  width: 120,
                  height: 120,
                }}
              />

          

          </View>
        </View>

        ))}


      {/* <View
        style={{
          width: "auto",
          height: 95,
          marginBottom: 40,
        }}
      >
        <View
          style={{
            margin: 20,
            // marginBottom: 40,
          }}
        >
          <View
            style={{
              backgroundColor: "#D2F694",
              borderRadius: 10,
              paddingVertical: 14,
              paddingLeft: 65,
              marginLeft: 70,
              //   marginBottom:10
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 18,
                marginBottom: 5,
              }}
            >
              {"ATELIER AFRICA SAFARIS"}
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginRight: 22,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignSelf: "flex-start",
                  marginRight: 4,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 12,
                    marginBottom: 4,
                  }}
                >
                  {"Requirement: 5,00,000 "}
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 12,
                  }}
                >
                  {"Fulfill: 2,54,015 "}
                </Text>
              </View>
              <View>
                <AntDesign name="piechart" size={24} color="black" />
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                  }}
                >
                  {"50.68%"}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
              }}
            >
              {"Days left: 39 DAYS "}
            </Text>
          </View>
          <Image
            source={require("../../../assets/animals.jpg")}
            resizeMode={"stretch"}
            style={{
              position: "absolute",
              bottom: -4,
              left: 0,
              borderRadius: 100,
              width: 120,
              height: 120,
            }}
          />
        </View>
        <View
          style={{
            width: "auto",
            height: 95,
            marginBottom: 40,
          }}
        >
          <View
            style={{
              margin: 20,
              // marginBottom: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "#D2F694",
                borderRadius: 10,
                paddingVertical: 14,
                paddingLeft: 65,
                marginLeft: 70,
                //   marginBottom:10
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                {"ATELIER AFRICA SAFARIS"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 22,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: "flex-start",
                    marginRight: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                      marginBottom: 4,
                    }}
                  >
                    {"Requirement: 5,00,000 "}
                  </Text>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                    }}
                  >
                    {"Fulfill: 2,54,015 "}
                  </Text>
                </View>
                <View>
                  <AntDesign name="piechart" size={24} color="black" />
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                    }}
                  >
                    {"50.68%"}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}
              >
                {"Days left: 39 DAYS "}
              </Text>
            </View>
            <Image
              source={require("../../../assets/animals.jpg")}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                bottom: -4,
                left: 0,
                borderRadius: 100,
                width: 120,
                height: 120,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "auto",
            height: 95,
            marginBottom: 40,
          }}
        >
          <View
            style={{
              margin: 20,
              // marginBottom: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "#D2F694",
                borderRadius: 10,
                paddingVertical: 14,
                paddingLeft: 65,
                marginLeft: 70,
                //   marginBottom:10
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                {"ATELIER AFRICA SAFARIS"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 22,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: "flex-start",
                    marginRight: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                      marginBottom: 4,
                    }}
                  >
                    {"Requirement: 5,00,000 "}
                  </Text>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                    }}
                  >
                    {"Fulfill: 2,54,015 "}
                  </Text>
                </View>
                <View>
                  <AntDesign name="piechart" size={24} color="black" />
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                    }}
                  >
                    {"50.68%"}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}
              >
                {"Days left: 39 DAYS "}
              </Text>
            </View>
            <Image
              source={require("../../../assets/animals.jpg")}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                bottom: -4,
                left: 0,
                borderRadius: 100,
                width: 120,
                height: 120,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "auto",
            height: 95,
            marginBottom: 40,
          }}
        >
          <View
            style={{
              margin: 20,
              // marginBottom: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "#D2F694",
                borderRadius: 10,
                paddingVertical: 14,
                paddingLeft: 65,
                marginLeft: 70,
                //   marginBottom:10
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                {"ATELIER AFRICA SAFARIS"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 22,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: "flex-start",
                    marginRight: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                      marginBottom: 4,
                    }}
                  >
                    {"Requirement: 5,00,000 "}
                  </Text>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                    }}
                  >
                    {"Fulfill: 2,54,015 "}
                  </Text>
                </View>
                <View>
                  <AntDesign name="piechart" size={24} color="black" />
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                    }}
                  >
                    {"50.68%"}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}
              >
                {"Days left: 39 DAYS "}
              </Text>
            </View>
            <Image
              source={require("../../../assets/animals.jpg")}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                bottom: -4,
                left: 0,
                borderRadius: 100,
                width: 120,
                height: 120,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "auto",
            height: 95,
            marginBottom: 40,
          }}
        >
          <View
            style={{
              margin: 20,
              // marginBottom: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "#D2F694",
                borderRadius: 10,
                paddingVertical: 14,
                paddingLeft: 65,
                marginLeft: 70,
                //   marginBottom:10
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                {"ATELIER AFRICA SAFARIS"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 22,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: "flex-start",
                    marginRight: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                      marginBottom: 4,
                    }}
                  >
                    {"Requirement: 5,00,000 "}
                  </Text>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                    }}
                  >
                    {"Fulfill: 2,54,015 "}
                  </Text>
                </View>
                <View>
                  <AntDesign name="piechart" size={24} color="black" />
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                    }}
                  >
                    {"50.68%"}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}
              >
                {"Days left: 39 DAYS "}
              </Text>
            </View>
            <Image
              source={require("../../../assets/animals.jpg")}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                bottom: -4,
                left: 0,
                borderRadius: 100,
                width: 120,
                height: 120,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "auto",
            height: 95,
            marginBottom: 40,
          }}
        >
          <View
            style={{
              margin: 20,
              // marginBottom: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "#D2F694",
                borderRadius: 10,
                paddingVertical: 14,
                paddingLeft: 65,
                marginLeft: 70,
                //   marginBottom:10
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                {"ATELIER AFRICA SAFARIS"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 22,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: "flex-start",
                    marginRight: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                      marginBottom: 4,
                    }}
                  >
                    {"Requirement: 5,00,000 "}
                  </Text>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 12,
                    }}
                  >
                    {"Fulfill: 2,54,015 "}
                  </Text>
                </View>
                <View>
                  <AntDesign name="piechart" size={24} color="black" />
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                    }}
                  >
                    {"50.68%"}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}
              >
                {"Days left: 39 DAYS "}
              </Text>
            </View>
            <Image
              source={require("../../../assets/animals.jpg")}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                bottom: -4,
                left: 0,
                borderRadius: 100,
                width: 120,
                height: 120,
              }}
            />
          </View>
        </View>
      </View>
       */}
    </ScrollView>
    </View>
  );
};

export default ComplatedFunds;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
