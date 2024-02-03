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
					paddingTop: 12,
					paddingBottom: 227,
					paddingLeft: 22,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 34,
						marginRight: 23,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 60,
							height: 60,
							marginRight: 88,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
						}}>
						{"HOME"}
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
							width: 60,
							height: 60,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 24,
						fontWeight: "bold",
						marginBottom: 63,
					}}>
					{"Resource available"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 59,
						marginRight: 23,
					}}>
					<View 
						style = {{
							width: 170,
							marginRight: 45,
						}}>
						<View 
							style = {{
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 10,
								paddingTop: 105,
								paddingBottom: 17,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 32,
									fontWeight: "bold",
								}}>
								{"Foods"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								top: -43,
								right: 25,
								width: 120,
								height: 120,
							}}
						/>
					</View>
					<View 
						style = {{
							width: 170,
						}}>
						<View 
							style = {{
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 10,
								paddingTop: 105,
								paddingBottom: 17,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 32,
									fontWeight: "bold",
								}}>
								{"Books"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								top: -43,
								right: 25,
								width: 120,
								height: 120,
							}}
						/>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 59,
						marginRight: 23,
					}}>
					<View 
						style = {{
							width: 170,
							marginRight: 45,
						}}>
						<View 
							style = {{
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 10,
								paddingTop: 104,
								paddingBottom: 18,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 32,
									fontWeight: "bold",
								}}>
								{"Medical"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								top: -35,
								right: 20,
								width: 120,
								height: 120,
							}}
						/>
					</View>
					<View 
						style = {{
							width: 170,
						}}>
						<View 
							style = {{
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 10,
								paddingTop: 104,
								paddingBottom: 18,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 32,
									fontWeight: "bold",
								}}>
								{"Cloths"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								top: -35,
								right: 25,
								width: 120,
								height: 120,
							}}
						/>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginRight: 11,
					}}>
					<View 
						style = {{
							width: 170,
							marginRight: 57,
						}}>
						<View 
							style = {{
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 10,
								paddingTop: 99,
								paddingBottom: 23,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 32,
									fontWeight: "bold",
								}}>
								{"stationary"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								top: -35,
								right: 20,
								width: 120,
								height: 120,
							}}
						/>
					</View>
					<View 
						style = {{
							width: 170,
						}}>
						<View 
							style = {{
								backgroundColor: "#d2f694",
								borderRadius: 10,
								paddingTop: 98,
								paddingBottom: 24,
								paddingLeft: 30,
								paddingRight: 17,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 32,
									fontWeight: "bold",
								}}>
								{"footware"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								top: -35,
								right: 25,
								width: 120,
								height: 120,
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
