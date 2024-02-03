import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";

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
					borderRadius: 30,
					paddingVertical: 59,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 37,
						marginHorizontal: 37,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 60,
							height: 60,
							marginRight: 46,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"ADD REQUEST"}
					</Text>
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
							width: 38,
							height: 38,
						}}
					/>
				</View>
				<View 
					style = {{
						backgroundColor: "#f5f5f5",
						borderRadius: 10,
						paddingVertical: 21,
						paddingHorizontal: 14,
						marginBottom: 9,
						marginHorizontal: 25,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"Enter Name for your Event or Help"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#f5f5f5",
						borderRadius: 10,
						paddingVertical: 22,
						marginBottom: 9,
						marginHorizontal: 25,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginBottom: 40,
							marginLeft: 11,
						}}>
						{"Add your Requirements"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							marginLeft: 25,
						}}>
						{"500"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#f5f5f5",
						borderRadius: 10,
						paddingVertical: 22,
						marginBottom: 9,
						marginHorizontal: 25,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginBottom: 40,
							marginLeft: 11,
						}}>
						{"Add your Purpose"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							marginLeft: 25,
						}}>
						{"500"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#f5f5f5",
						borderRadius: 10,
						paddingVertical: 13,
						paddingHorizontal: 11,
						marginBottom: 9,
						marginHorizontal: 25,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"Select NGO (if needed)"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#f5f5f5",
						borderRadius: 10,
						paddingVertical: 13,
						paddingHorizontal: 11,
						marginBottom: 9,
						marginHorizontal: 25,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"Starts from (dd/mm/yyyy)"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#f5f5f5",
						borderRadius: 10,
						paddingVertical: 13,
						paddingHorizontal: 11,
						marginBottom: 37,
						marginHorizontal: 25,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"Ended on (dd/mm/yyyy)"}
					</Text>
				</View>
				<View 
					style = {{
						alignItems: "center",
						backgroundColor: "#fff400",
						borderRadius: 30,
						paddingVertical: 20,
						marginHorizontal: 16,
					}}>
					<Text 
						style = {{
							color: "#ffffff",
							fontSize: 24,
							fontWeight: "bold",
						}}>
						{"ADD REQUEST"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
