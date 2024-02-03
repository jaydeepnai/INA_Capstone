import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text } from "react-native";
import { responsiveMargin, width } from "../../../lib/Validation/RelativeValues";

export default Categories = (props) => {
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
          paddingTop: 20,
          paddingBottom: 98,
          // paddingHorizontal: 39,
          paddingLeft: responsiveMargin(7),
        }}
      >
        <View style={{marginBottom:20}}>
          <Text
            style={{
                fontSize:20
            }}  
          >
            Select Category
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
            marginBottom: responsiveMargin(2),
          }}
        >
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
              marginBottom: responsiveMargin(4),
            }}
          >
            <Image
              source={require("../../../assets/family.jpg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width*0.40, 
                marginLeft: responsiveMargin(1),
                
              }}
            />
            <Text style={{textAlign:"center",fontSize:18}}>
                Animal
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
              marginBottom: responsiveMargin(4),

            }}
          >
            <Image
              source={require("../../../assets/family.jpg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width*0.40, 
                marginLeft: responsiveMargin(1),
                
              }}
            />
            <Text style={{textAlign:"center",fontSize:18}}>
                Animal
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
          >
          </View>
      </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
            marginBottom: responsiveMargin(2),
          }}
        >
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
              marginBottom: responsiveMargin(4),

            }}
          >
            <Image
              source={require("../../../assets/family.jpg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width*0.40, 
                marginLeft: responsiveMargin(1),
                
              }}
            />
            <Text style={{textAlign:"center",fontSize:18}}>
                Animal
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
              marginBottom: responsiveMargin(4),

            }}
          >
            <Image
              source={require("../../../assets/family.jpg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width*0.40, 
                marginLeft: responsiveMargin(1),
              }}
            />
            <Text style={{textAlign:"center",fontSize:18}}>
                Animal
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
          >
          </View>

          
          
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
            marginBottom: responsiveMargin(2),
          }}
        >
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
              marginBottom: responsiveMargin(4),

            }}
          >
            <Image
              source={require("../../../assets/family.jpg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width*0.40, 
                marginLeft: responsiveMargin(1),
              }}
            />
            <Text style={{textAlign:"center",fontSize:18}}>
                Animal
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
          >
            <Image
              source={require("../../../assets/family.jpg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width*0.40, 
                marginLeft: responsiveMargin(1),
              }}
            />
            <Text style={{textAlign:"center",fontSize:18}}>
                Animal
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
          >
          </View>

          
          
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
            marginBottom: responsiveMargin(2),
          }}
        >
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
          >
            <Image
              source={require("../../../assets/family.jpg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width*0.40, 
                marginLeft: responsiveMargin(1),
              }}
            />
            <Text style={{textAlign:"center",fontSize:18}}>
                Animal
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
          >
            <Image
              source={require("../../../assets/family.jpg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width*0.40, 
                marginLeft: responsiveMargin(1),
              }}
            />
            <Text style={{textAlign:"center",fontSize:18}}>
                Animal
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
          >
          </View>
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
            marginBottom: responsiveMargin(2),
          }}
        >
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
          >
            <Image
              source={require("../../../assets/family.jpg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width*0.40, 
                marginLeft: responsiveMargin(1),
              }}
            />
            <Text style={{textAlign:"center",fontSize:18}}>
                Animal
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
              marginBottom: responsiveMargin(4),

            }}
          >
            <Image
              source={require("../../../assets/family.jpg")}
              resizeMode={"cover"}
              style={{
                borderRadius: 15,
                height: 140,
                width: width*0.40, 
                marginLeft: responsiveMargin(1),
              }}
            />
            <Text style={{textAlign:"center",fontSize:18}}>
                Animal
            </Text>
          </View>
          <View
            style={{
              width: 160,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
          >
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
