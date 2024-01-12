import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, } from "react-native";

export default ({navigation}) => {

  useLayoutEffect(() => {
    navigation.navigationOptions = {
      headerTitle: 'My Screen1',
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