import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import { getFontSize, responsiveMargin } from "../../lib/Validation/RelativeValues";


const Appointment_list = () => {   
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
					paddingVertical: 23,
				}}>
				
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						borderColor: "#F2F3F7",
						borderRadius: 15,
						borderWidth: 3,
						paddingVertical: 15,
						paddingLeft: 24,
						paddingRight: 13,
						marginBottom: 601,
						marginHorizontal: 17,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 56,
							height: 60,
						}}
					/>
					<View 
						style = {{
							width: 195,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize:getFontSize(20),
								marginBottom: responsiveMargin(5),
							}}>
							{"Raahi Foundation"}
						</Text>
						<View 
							style = {{
								width: 136,
								height: 30,
								alignItems: "center",
								backgroundColor: "#F2F3F7",
								borderRadius: 15,
								paddingVertical: 10,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Mon 01st Jan 24"}
							</Text>
						</View>
					</View>
					<View 
						style = {{
							width: 82,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 10,
								marginHorizontal: 10,
							}}>
							{"6:00 PM"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#F2F3F7",
								borderRadius: 15,
								padding: 8,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 15,
									height: 15,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Abad"}
							</Text>
						</View>
					</View>
				</View>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						width: 50,
						height: 50,
						marginHorizontal: 30,
					}}
				/>
			</ScrollView>
		</SafeAreaView>
		
    )
}
export default Appointment_list;