import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";

export default (props) => {
    
    
    return (
        <SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#ffffff",
				}}>
				<View 
					style = {{
						backgroundColor: "#00000066",
						borderBottomRightRadius: 10,
						borderBottomLeftRadius: 10,
						paddingTop: 31,
						paddingBottom: 19,
						paddingHorizontal: 122,
						marginBottom: 5,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							textAlign: "center",
							width: 186,
						}}>
						{"Raahi foundation, \nAHMEDABAD"}
					</Text>
				</View>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						borderRadius: 10,
						height: 728,
						marginBottom: 3,
						marginHorizontal: 7,
					}}
				/>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#00000066",
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						paddingVertical: 29,
						paddingHorizontal: 35,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
