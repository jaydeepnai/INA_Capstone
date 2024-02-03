import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";

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
					paddingVertical: 24,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 21,
						marginHorizontal: 22,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 60,
							height: 60,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
						}}>
						{"Event info."}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 60,
							height: 60,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 13,
						paddingHorizontal: 12,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"NGO Name"}
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
						paddingVertical: 10,
						paddingHorizontal: 12,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"Event Name"}
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
						paddingVertical: 10,
						paddingHorizontal: 12,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"About this event"}
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
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 16,
						paddingHorizontal: 12,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
						}}>
						{"Event type"}
					</Text>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 10,
						paddingHorizontal: 12,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"Event Start date"}
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
						paddingVertical: 10,
						paddingHorizontal: 12,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"Event end date"}
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
						paddingVertical: 10,
						paddingHorizontal: 12,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"Event budget"}
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
						paddingVertical: 10,
						paddingHorizontal: 12,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"Event schedule"}
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
						paddingVertical: 10,
						paddingHorizontal: 11,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"Volunteer Team"}
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
						paddingVertical: 10,
						paddingHorizontal: 12,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"Event status"}
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
						paddingVertical: 10,
						paddingHorizontal: 12,
						marginBottom: 13,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"Feed-back"}
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
						paddingVertical: 10,
						paddingHorizontal: 13,
						marginBottom: 7,
						marginHorizontal: 30,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"Contect person for events"}
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
						width: 370,
						height: 50,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 10,
						paddingLeft: 7,
						paddingRight: 17,
						marginBottom: 13,
						marginHorizontal: 25,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
						}}>
						{"phone no."}
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
						width: 370,
						height: 50,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 10,
						paddingLeft: 7,
						paddingRight: 17,
						marginBottom: 24,
						marginHorizontal: 25,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
						}}>
						{"terms and conditions"}
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
				<ImageBackground 
					source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
					resizeMode = {'stretch'}
					style = {{
						width: 90,
						height: 90,
						alignItems: "center",
						paddingVertical: 34,
						marginHorizontal: 165,
					}}
					>
					<Text 
						style = {{
							color: "#ffffff",
							fontSize: 24,
							fontWeight: "bold",
						}}>
						{"Submit"}
					</Text>
				</ImageBackground>
			</ScrollView>
		</SafeAreaView>
		
    )
}
