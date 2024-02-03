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
					paddingBottom: 62,
				}}>
				<View 
					style = {{
						marginBottom: 31,
					}}>
					<View 
						style = {{
							marginBottom: 20,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								borderBottomRightRadius: 20,
								borderBottomLeftRadius: 20,
								height: 296,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								bottom: -92,
								left: 20,
								borderRadius: 151,
								width: 125,
								height: 125,
							}}
						/>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 22,
							fontWeight: "bold",
							marginBottom: 10,
							marginLeft: 78,
						}}>
						{"ANIKET BHATTI"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
							marginHorizontal: 110,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
							marginHorizontal: 60,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
							marginHorizontal: 10,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 25,
							height: 25,
							marginHorizontal: 155,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							height: 25,
							marginHorizontal: 200,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 25,
							height: 25,
							marginHorizontal: 160,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 22,
						fontWeight: "bold",
						marginBottom: 18,
						marginLeft: 22,
					}}>
					{"Ratings"}
				</Text>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						width: 305,
						height: 69,
						marginBottom: 37,
						marginHorizontal: 16,
					}}
				/>
				<View 
					style = {{
						flexDirection: "row",
						marginBottom: 34,
						marginHorizontal: 16,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 22,
							fontWeight: "bold",
							marginTop: 17,
							marginRight: 4,
							flex: 1,
						}}>
						{"Past Events"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 22,
							fontWeight: "bold",
							textAlign: "center",
							marginRight: 50,
							width: 104,
						}}>
						{"Enrolled in \nServices"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 22,
							fontWeight: "bold",
							marginTop: 17,
						}}>
						{"Reviews"}
					</Text>
				</View>
				<View 
					style = {{
						width: 125,
						height: 4,
						borderColor: "#fff400",
						borderWidth: 4,
						marginBottom: 21,
						marginHorizontal: 140,
					}}>
				</View>
				<View 
					style = {{
						width: 353,
						height: 110,
						marginBottom: 25,
						marginHorizontal: 18,
					}}>
					<View 
						style = {{
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 19,
							paddingLeft: 63,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
								marginBottom: 9,
							}}>
							{"Request 1"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12.5,
								marginBottom: 9,
							}}>
							{"Requirement: 30,000 Rs., 25 Volunteers, read more...\n"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12.5,
								width: 290,
							}}>
							{"Purpose: Lorem ipsum is some dummy text if you are happy with my work just give lot of read more..."}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: 5,
							left: -50,
							borderRadius: 50,
							width: 100,
							height: 100,
						}}
					/>
				</View>
				<View 
					style = {{
						width: 353,
						height: 110,
						marginBottom: 25,
						marginHorizontal: 18,
					}}>
					<View 
						style = {{
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 19,
							paddingLeft: 63,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
								marginBottom: 9,
							}}>
							{"Request 2"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12.5,
								marginBottom: 9,
							}}>
							{"Requirement: 30,000 Rs., 25 Volunteers, read more...\n"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12.5,
								width: 290,
							}}>
							{"Purpose: Lorem ipsum is some dummy text if you are happy with my work just give lot of read more..."}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: 5,
							left: -50,
							borderRadius: 50,
							width: 100,
							height: 100,
						}}
					/>
				</View>
				<View 
					style = {{
						width: 353,
						height: 110,
						marginHorizontal: 18,
					}}>
					<View 
						style = {{
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 19,
							paddingLeft: 63,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
								marginBottom: 9,
							}}>
							{"Request 3"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12.5,
								marginBottom: 9,
							}}>
							{"Requirement: 30,000 Rs., 25 Volunteers, read more...\n"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12.5,
								width: 290,
							}}>
							{"Purpose: Lorem ipsum is some dummy text if you are happy with my work just give lot of read more..."}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: 5,
							left: -50,
							borderRadius: 50,
							width: 100,
							height: 100,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
