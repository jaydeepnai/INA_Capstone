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
					paddingBottom: 66,
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
						width: 100,
						height: 4,
						borderColor: "#fff400",
						borderWidth: 4,
						marginBottom: 22,
						marginHorizontal: 13,
					}}>
				</View>
				<View 
					style = {{
						backgroundColor: "#f5f5f500",
						borderRadius: 15,
						paddingVertical: 11,
						paddingRight: 14,
						marginBottom: 24,
						marginHorizontal: 13,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 0
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 9,
							marginLeft: 14,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 25,
								height: 25,
								marginRight: 9,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 18,
								fontWeight: "bold",
								marginRight: 14,
							}}>
							{"Ravindra"}
						</Text>
						<View 
							style = {{
								width: 70,
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 30,
								paddingVertical: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 12,
								}}>
								{"Volunteer"}
							</Text>
						</View>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							marginLeft: 28,
							width: 362,
						}}>
						{"        Lorem ipsum dolor sit amet consectetur adipisicing \nelit. Quibusdam hic libero incidunt unde provident aliquid \npraesentium eum quas corporis numquam?"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#f5f5f500",
						borderRadius: 15,
						paddingVertical: 11,
						paddingRight: 14,
						marginBottom: 24,
						marginHorizontal: 13,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 0
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 9,
							marginLeft: 14,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 25,
								height: 25,
								marginRight: 9,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 18,
								fontWeight: "bold",
								marginRight: 14,
							}}>
							{"Ravindra"}
						</Text>
						<View 
							style = {{
								width: 70,
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 30,
								paddingVertical: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 12,
								}}>
								{"Volunteer"}
							</Text>
						</View>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							marginLeft: 28,
							width: 362,
						}}>
						{"        Lorem ipsum dolor sit amet consectetur adipisicing \nelit. Quibusdam hic libero incidunt unde provident aliquid \npraesentium eum quas corporis numquam?"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#f5f5f500",
						borderRadius: 15,
						paddingVertical: 11,
						paddingRight: 14,
						marginBottom: 38,
						marginHorizontal: 13,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 0
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 9,
							marginLeft: 14,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 25,
								height: 25,
								marginRight: 9,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 18,
								fontWeight: "bold",
								marginRight: 14,
							}}>
							{"Ravindra"}
						</Text>
						<View 
							style = {{
								width: 70,
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 30,
								paddingVertical: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 12,
								}}>
								{"Volunteer"}
							</Text>
						</View>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							marginLeft: 28,
							width: 362,
						}}>
						{"        Lorem ipsum dolor sit amet consectetur adipisicing \nelit. Quibusdam hic libero incidunt unde provident aliquid \npraesentium eum quas corporis numquam?"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 22,
						fontWeight: "bold",
						marginBottom: 13,
						marginLeft: 22,
					}}>
					{"Add Reviews"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#f5f5f500",
						borderRadius: 15,
						paddingVertical: 21,
						paddingRight: 21,
						marginBottom: 42,
						marginHorizontal: 13,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 0
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							marginBottom: 65,
							marginLeft: 21,
						}}>
						{"Add your Review here..."}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 14,
							marginLeft: 355,
						}}>
						{"100"}
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
						{"Add Review"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
