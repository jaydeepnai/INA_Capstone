import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


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
        <View
          style={{
            height: 20,
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
        <View
          style={{
            backgroundColor: "#f5f5f500",
            borderRadius: 15,
            paddingVertical: 15,
            marginBottom: 36,
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
              marginBottom: 14,
              marginHorizontal: 10,
            }}
          />
          <Text
            style={{
              color: "#000000",
              fontSize: 18,
              marginBottom: 8,
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
                paddingVertical: 7,
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
        <View
          style={{
            backgroundColor: "#f5f5f500",
            borderRadius: 15,
            paddingVertical: 15,
            marginBottom: 36,
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
              marginBottom: 14,
              marginHorizontal: 10,
            }}
          />
          <Text
            style={{
              color: "#000000",
              fontSize: 18,
              marginBottom: 8,
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
                paddingVertical: 7,
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
        <View
          style={{
            backgroundColor: "#f5f5f500",
            borderRadius: 15,
            paddingVertical: 15,
            marginBottom: 36,
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
              marginBottom: 14,
              marginHorizontal: 10,
            }}
          />
          <Text
            style={{
              color: "#000000",
              fontSize: 18,
              marginBottom: 8,
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
                paddingVertical: 7,
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
        <View
          style={{
            backgroundColor: "#f5f5f500",
            borderRadius: 15,
            paddingVertical: 15,
            marginBottom: 36,
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
              marginBottom: 14,
              marginHorizontal: 10,
            }}
          />
          <Text
            style={{
              color: "#000000",
              fontSize: 18,
              marginBottom: 8,
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
                paddingVertical: 7,
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