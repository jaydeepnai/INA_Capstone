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
					backgroundColor: "#FFFFFF",
					paddingTop: 20,
					paddingBottom: 54,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#D9D9D9",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 17,
						marginBottom: 32,
						marginHorizontal: 15,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 30,
							height: 30,
							marginRight: 23,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							flex: 1,
						}}>
						{"Search"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 24,
						marginBottom: 28,
						marginHorizontal: 15,
					}}>
					{"Top rated NGOs"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#D2F6941F",
						paddingVertical: 11,
						paddingHorizontal: 8,
						marginBottom: 19,
						shadowColor: "#00000036",
						shadowOpacity: 0.2,
						shadowOffset: {
						    width: 0,
						    height: 4
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 17,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								borderRadius: 10,
								width: 130,
								height: 130,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								borderRadius: 10,
								width: 130,
								height: 130,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								borderRadius: 10,
								width: 130,
								height: 130,
							}}
						/>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 24,
								marginRight: 59,
								width: 112,
							}}>
							{"Raahi\nFoundation"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 24,
								width: 55,
							}}>
							{"Angel\nTrust"}
						</Text>
						<View 
							style = {{
								flex: 1,
								alignSelf: "stretch",
							}}>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 24,
								width: 84,
							}}>
							{"Sukrut \nParivaar"}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#5E9400",
						fontSize: 24,
						marginBottom: 15,
						marginHorizontal: 17,
					}}>
					{"see more"}
				</Text>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 24,
						marginBottom: 44,
						marginHorizontal: 23,
					}}>
					{"Near by NGOs"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#D2F6941C",
						paddingVertical: 23,
						paddingHorizontal: 28,
						marginBottom: 58,
						shadowColor: "#00000066",
						shadowOpacity: 0.4,
						shadowOffset: {
						    width: 0,
						    height: 4
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 25,
							marginRight: 4,
							flex: 1,
						}}>
						{"Browse NGOs"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 50,
							height: 50,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 24,
						marginBottom: 32,
						marginHorizontal: 23,
					}}>
					{"Types of NGO"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#D2F6941F",
						paddingTop: 12,
						paddingBottom: 33,
						marginBottom: 57,
						shadowColor: "#00000036",
						shadowOpacity: 0.2,
						shadowOffset: {
						    width: 0,
						    height: 4
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 17,
							marginHorizontal: 8,
						}}>
						<View 
							style = {{
								width: 130,
								backgroundColor: "#FFF400",
								borderRadius: 10,
							}}>
						</View>
						<View 
							style = {{
								width: 130,
								backgroundColor: "#FFF400",
								borderRadius: 10,
							}}>
						</View>
						<View 
							style = {{
								width: 130,
								backgroundColor: "#FFF400",
								borderRadius: 10,
							}}>
						</View>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							marginBottom: 49,
							marginHorizontal: 15,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 24,
								marginRight: 4,
								flex: 1,
							}}>
							{"Donating\n books"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 24,
								marginTop: 19,
								marginRight: 43,
							}}>
							{"Medical"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 24,
								width: 120,
							}}>
							{"Distribution\nfood"}
						</Text>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							marginBottom: 22,
							marginHorizontal: 8,
						}}>
						<View 
							style = {{
								width: 130,
								alignSelf: "flex-start",
								backgroundColor: "#FFF400",
								borderRadius: 10,
								marginRight: 12,
							}}>
						</View>
						<View 
							style = {{
								width: 130,
								alignSelf: "flex-start",
								backgroundColor: "#FFF400",
								borderRadius: 10,
								marginRight: 50,
							}}>
						</View>
						<Text 
							style = {{
								color: "#5E9400",
								fontSize: 24,
								marginTop: 35,
								flex: 1,
							}}>
							{"See\nmore"}
						</Text>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginHorizontal: 30,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 24,
								marginRight: 62,
							}}>
							{"Orphans"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 24,
								flex: 1,
							}}>
							{"Oldage \nhome"}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 24,
						marginBottom: 47,
						marginHorizontal: 27,
					}}>
					{"Categoryis of NGO"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#D2F6941F",
						paddingTop: 28,
						paddingBottom: 96,
						paddingHorizontal: 8,
						shadowColor: "#00000036",
						shadowOpacity: 0.2,
						shadowOffset: {
						    width: 0,
						    height: 4
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 14,
						}}>
						<View 
							style = {{
								width: 130,
								alignItems: "center",
								backgroundColor: "#30FFF2",
								borderRadius: 10,
								paddingVertical: 51,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 20,
								}}>
								{"Hunger"}
							</Text>
						</View>
						<View 
							style = {{
								width: 130,
								alignItems: "center",
								backgroundColor: "#30FFF2",
								borderRadius: 10,
								paddingVertical: 51,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 20,
								}}>
								{"Medical"}
							</Text>
						</View>
						<View 
							style = {{
								width: 130,
								alignItems: "center",
								backgroundColor: "#30FFF2",
								borderRadius: 10,
								paddingVertical: 55,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 20,
								}}>
								{"Education"}
							</Text>
						</View>
					</View>
					<View 
						style = {{
							flexDirection: "row",
						}}>
						<View 
							style = {{
								width: 130,
								alignSelf: "flex-start",
								alignItems: "center",
								backgroundColor: "#30FFF2",
								borderRadius: 10,
								paddingTop: 60,
								paddingBottom: 50,
								marginTop: 1,
								marginRight: 12,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 20,
								}}>
								{"Child Walfer"}
							</Text>
						</View>
						<View 
							style = {{
								width: 130,
								alignSelf: "flex-start",
								backgroundColor: "#30FFF2",
								borderRadius: 10,
								paddingVertical: 41,
								paddingHorizontal: 10,
								marginRight: 50,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 20,
									width: 110,
								}}>
								{"Women \nEmporement"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#5E9400",
								fontSize: 24,
								marginTop: 29,
								flex: 1,
							}}>
							{"See\nmore"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}