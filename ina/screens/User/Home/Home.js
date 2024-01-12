import React, { useLayoutEffect } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";
import { Avatar } from "react-native-paper";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Trending from "./Trending";
import Foryou from "./Foryou";

export default ({navigation}) => {

  useLayoutEffect(() => {
    navigation.navigationOptions = {
      headerTitle: 'My Screen',
      headerStyle: {
        backgroundColor: 'blue',
      },
    };
  }, [])

    return (
        <SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#FFFFFF",
					paddingVertical: 45,
				}}>

          {/* <HomeTabs></HomeTabs> */}
			</ScrollView>
		</SafeAreaView>
		
    )
}