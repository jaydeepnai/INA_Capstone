import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Avatar, Button, Card } from 'react-native-paper';
import { getFontSize, responsiveMargin } from '../../../lib/Validation/RelativeValues';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Plan = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Tab.Navigator>
        <Tab.Screen name="Events" component={Plan_events} />
        <Tab.Screen name="Services" component={Plan_services} />
      </Tab.Navigator>
    </SafeAreaView>

  )
}

export default Plan




const Plan_events = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
      <ScrollView

        style={{
          flex: 1,
          backgroundColor: "#ffffff",
        }}>

        <View style={{
          marginTop: responsiveMargin(4),
          marginHorizontal: responsiveMargin(3)
        }}>

          <Card style={{
            margin:responsiveMargin(1)
          }}>
            <Card.Cover source={require("../../../assets/profile.jpg")} />
            <Card.Content>

              <Text
                style={{
                  color: "#000000",
                  fontSize: getFontSize (18),
                  marginVertical: responsiveMargin(2),
                  fontWeight:'bold',
                }}>
                {"Sher Bachhao Abhiyan"}
              </Text>

              <View
                style={{
                  borderRadius: 15,
                  paddingVertical:responsiveMargin(4),
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  flex:1,
                }}>
                <View
                  style={{
                    flex:1,
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: responsiveMargin(2),
                    justifyContent:'space-between',
                  }}>
                  <View
                    style={{
                      flex:1,
                      flexDirection:'row',
                      width: 120,
                      height:35,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#d2f694",
                      borderRadius: 30,
                      paddingVertical: 3,
                      marginRight: 20,
                    }}>
                    <MaterialIcons name="today" size={24} color="black" />
                    <Text
                      style={{
                        color: "#000000",
                        fontSize: getFontSize(14),
                      }}>
                      {"12 February"}
                    </Text>
                  </View>

                  <View style={{
                    flex:1,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                  }}>
                  <MaterialIcons name="my-location" size={24} color="black" />
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                      marginRight: 24,
                    }}>
                    {"Vastrapur"}
                  </Text>
                  </View>

                  <View style={{
                    flex:1,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                  }}>
                  <Entypo name="back-in-time" size={24} color="black" />
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                      marginRight: 24,
                    }}>
                    {"3 Days"}
                  </Text>
                  </View>

                </View>


                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 22,
                  }}>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 15,
                      marginRight: 10,
                    }}>
                    {"Games"}
                  </Text>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 15,
                      marginRight: 7,
                    }}>
                    {"Tent"}
                  </Text>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 15,
                    }}>
                    {"Singing"}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      alignSelf: "stretch",
                    }}>
                  </View>
                  <View
                    style={{
                      width: 99,
                      alignItems: "center",
                      backgroundColor: "#fff400CF",
                      borderRadius: 30,
                      paddingVertical: 8,
                    }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}>
                      {"Join Event"}
                    </Text>
                  </View>
                </View>
              </View>

            </Card.Content>
          </Card>

        </View>




      </ScrollView>
    </SafeAreaView>
  )
}


const Plan_services = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          paddingVertical: 31,
        }}>
        <View
          style={{
            height: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 6,
            marginHorizontal: 30,
          }}>
        </View>
        <View
          style={{
            backgroundColor: "#f5f5f500",
            borderRadius: 15,
            paddingVertical: 15,
            marginBottom: 30,
            marginHorizontal: 29,
            shadowColor: "#00000040",
            shadowOpacity: 0.3,
            shadowOffset: {
              width: 0,
              height: 0
            },
            shadowRadius: 4,
            elevation: 4,
          }}>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 10,
              height: 175,
              marginBottom: 15,
              marginHorizontal: 10,
            }}
          />
          <Text
            style={{
              color: "#000000",
              fontSize: 18,
              marginBottom: 7,
              marginLeft: 19,
            }}>
            {"Sher Bachhao Abhiyan"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              marginHorizontal: 18,
            }}>
            <View
              style={{
                width: 121,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#d2f694",
                borderRadius: 30,
                paddingVertical: 3,
                marginRight: 20,
              }}>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 22,
                  height: 22,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}>
                {"12 February"}
              </Text>
            </View>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 22,
                height: 22,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
                marginRight: 24,
              }}>
              {"Vastrapur"}
            </Text>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 22,
                height: 22,
                marginRight: 8,
              }}
            />
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
              }}>
              {"3 Days"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 22,
            }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 15,
                marginRight: 10,
              }}>
              {"Games"}
            </Text>
            <Text
              style={{
                color: "#000000",
                fontSize: 15,
                marginRight: 7,
              }}>
              {"Tent"}
            </Text>
            <Text
              style={{
                color: "#000000",
                fontSize: 15,
              }}>
              {"Singing"}
            </Text>
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
              }}>
            </View>
            <View
              style={{
                width: 99,
                alignItems: "center",
                backgroundColor: "#fff400CF",
                borderRadius: 30,
                paddingVertical: 8,
              }}>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                }}>
                {"Join Event"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}