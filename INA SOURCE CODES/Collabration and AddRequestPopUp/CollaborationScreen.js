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
					paddingTop: 45,
					paddingBottom: 23,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 34,
						marginHorizontal: 32,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 60,
							height: 60,
							marginRight: 37,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"COLLABRATION"}
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
							width: 33,
							height: 33,
						}}
					/>
				</View>
				<View 
					style = {{
						marginBottom: 40,
						marginHorizontal: 33,
					}}>
					<View 
						style = {{
							backgroundColor: "#f5f5f5",
							borderRadius: 10,
							paddingVertical: 25,
							paddingLeft: 154,
							paddingRight: 69,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
								textAlign: "center",
								width: 141,
							}}>
							{"ADD REQUEST TO COLLABRATE"}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							top: -16,
							left: -16,
							width: 115,
							height: 116,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 14,
						marginHorizontal: 33,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							fontWeight: "bold",
						}}>
						{"Request Received"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							fontWeight: "bold",
						}}>
						{"Request Sent"}
					</Text>
				</View>
				<View 
					style = {{
						width: 150,
						height: 1,
						backgroundColor: "#fff400",
						marginBottom: 17,
						marginHorizontal: 35,
					}}>
				</View>
				<View 
					style = {{
						width: 353,
						height: 110,
						marginBottom: 18,
						marginHorizontal: 15,
					}}>
					<View 
						style = {{
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 17,
							paddingLeft: 61,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
								marginBottom: 13,
							}}>
							{"NGO 1"}
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
								width: 292,
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
						marginBottom: 18,
						marginHorizontal: 15,
					}}>
					<View 
						style = {{
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 16,
							paddingLeft: 61,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
								marginBottom: 13,
							}}>
							{"NGO 2"}
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
								width: 292,
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
						marginBottom: 18,
						marginHorizontal: 15,
					}}>
					<View 
						style = {{
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 16,
							paddingLeft: 61,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
								marginBottom: 13,
							}}>
							{"NGO 3"}
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
								width: 292,
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
						marginBottom: 18,
						marginHorizontal: 15,
					}}>
					<View 
						style = {{
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 16,
							paddingLeft: 61,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
								marginBottom: 13,
							}}>
							{"NGO 4"}
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
								width: 292,
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
						marginHorizontal: 15,
					}}>
					<View 
						style = {{
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 16,
							paddingLeft: 61,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
								marginBottom: 13,
							}}>
							{"NGO 5"}
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
								width: 292,
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
