import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";

const Edit_screen = () => {
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
					paddingTop: 20,
					paddingBottom: 106,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 5,
						marginHorizontal: 2,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 25,
							marginRight: 104,
						}}>
						{"Edit Profile"}
					</Text>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 40,
							paddingHorizontal: 3,
						}}
						>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 31,
								marginTop: 5,
							}}
						/>
					</ImageBackground>
				</View>
				<View 
					style = {{
						backgroundColor: "#dcdcdc",
						marginBottom: 30,
					}}>
				</View>
				<View 
					style = {{
						marginBottom: 58,
						marginHorizontal: 39,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 10,
							height: 224,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: -35,
							left: 27,
							width: 107,
							height: 110,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 24,
						marginBottom: 25,
						marginLeft: 141,
					}}>
					{"Naishal Modi"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 29,
						marginBottom: 21,
						marginHorizontal: 28,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginRight: 4,
							flex: 1,
						}}>
						{"PERSONAL DETAILS"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 29,
						marginBottom: 21,
						marginHorizontal: 28,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginRight: 4,
							flex: 1,
						}}>
						{"ACCOUNT DETAILS"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 32,
						marginBottom: 21,
						marginHorizontal: 28,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginRight: 4,
							flex: 1,
						}}>
						{"CONTECT"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 17,
						paddingHorizontal: 29,
						marginBottom: 21,
						marginHorizontal: 28,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginRight: 4,
							flex: 1,
						}}>
						{"ADDRESS"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingTop: 8,
						paddingBottom: 19,
						paddingHorizontal: 29,
						marginBottom: 21,
						marginHorizontal: 28,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginTop: 16,
							marginRight: 4,
							flex: 1,
						}}>
						{"HOBBY"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 30,
						marginBottom: 21,
						marginHorizontal: 28,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginRight: 4,
							flex: 1,
						}}>
						{"SKILLS"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 29,
						marginHorizontal: 28,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginRight: 4,
							flex: 1,
						}}>
						{"LANGUAGE SPOKEN"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
export default Edit_screen;