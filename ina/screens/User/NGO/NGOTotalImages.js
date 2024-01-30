import React from "react";
import { SafeAreaView, ScrollView, Image, Text, ImageBackground, FlatList, View, useWindowDimensions, } from "react-native";

export default (props) => {
  const {height,width} = useWindowDimensions()

  const data = Array.from({ length: 50 });


  const renderItem = ({ index }) => (
    
    <View>

      <Image
      source={require("../../../assets/profile.jpg")}
      style={{height:width*0.33, width:width*0.33, backgroundColor:"black"}}
      />
      
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
    





      
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            style={{ padding: 16 }}
          />



    </SafeAreaView>

  )
}