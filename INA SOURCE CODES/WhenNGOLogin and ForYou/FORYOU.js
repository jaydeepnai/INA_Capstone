import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
             

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
					paddingTop: 27,
					paddingBottom: 1757,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 35,
						marginHorizontal: 13,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 60,
							height: 60,
							marginRight: 84,
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
				<View 
					style = {{
						alignItems: "center",
						backgroundColor: "#d2f694",
						borderRadius: 20,
						paddingTop: 17,
						paddingBottom: 7,
						marginBottom: 35,
						marginHorizontal: 150,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
							fontWeight: "bold",
						}}>
						{"FOR YOU"}
					</Text>
				</View>
				<View 
					style = {{
						marginBottom: 25,
						marginHorizontal: 38,
					}}>
					<View 
						style = {{
							backgroundColor: "#ffffff",
							borderRadius: 50,
						}}>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: -10,
							left: 25,
							width: 300,
							height: 300,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 22,
						fontWeight: "bold",
						marginBottom: 23,
						marginLeft: 12,
					}}>
					{"SHOW VOLUNTEER FOR VOLUNTEERING"}
				</Text>
				<ScrollView 
					horizontal 
					style = {{
						flexDirection: "row",
						marginBottom: 10,
						marginHorizontal: 9,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 10,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 10,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 10,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 10,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 10,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
						}}
					/>
				</ScrollView>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 27,
						marginHorizontal: 1,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 12,
						}}>
						{"Rubina"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 12,
						}}>
						{"Maria"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 12,
						}}>
						{"Alex"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 12,
						}}>
						{"Hasti"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 12,
						}}>
						{"Aniket"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 12,
						}}>
						{"Hannah"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 22,
						fontWeight: "bold",
						marginBottom: 23,
						marginLeft: 15,
					}}>
					{"SHOW APPOINTMENTS"}
				</Text>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						height: 319,
						marginHorizontal: 5,
					}}
				/>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 27,
						marginHorizontal: 17,
					}}>
					<View 
						style = {{
							width: 120,
							backgroundColor: "#d9d9d9",
							paddingTop: 3,
							paddingBottom: 32,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 2,
								marginLeft: 49,
							}}>
							{"MON"}
						</Text>
						<View 
							style = {{
								backgroundColor: "#000000",
								marginBottom: 2,
							}}>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 5,
								marginLeft: 6,
							}}>
							{"11"}
						</Text>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#f1b7b7",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Naishal"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#fff400CF",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 5,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.jaydeep"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#679d0a",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 20,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Aniket"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginLeft: 13,
							}}>
							{"+10 more"}
						</Text>
					</View>
					<View 
						style = {{
							width: 120,
							backgroundColor: "#d9d9d9",
							paddingTop: 4,
							paddingBottom: 32,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 1,
								marginLeft: 49,
							}}>
							{"THU"}
						</Text>
						<View 
							style = {{
								backgroundColor: "#000000",
								marginBottom: 2,
							}}>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 5,
								marginLeft: 4,
							}}>
							{"12"}
						</Text>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#f1b7b7",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Naishal"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#fff400CF",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 5,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.jaydeep"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#679d0a",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 20,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Aniket"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginLeft: 13,
							}}>
							{"+10 more"}
						</Text>
					</View>
					<View 
						style = {{
							width: 120,
							backgroundColor: "#d9d9d9",
							paddingTop: 4,
							paddingBottom: 32,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 1,
								marginLeft: 49,
							}}>
							{"WED"}
						</Text>
						<View 
							style = {{
								backgroundColor: "#000000",
								marginBottom: 2,
							}}>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 5,
								marginLeft: 4,
							}}>
							{"13"}
						</Text>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#f1b7b7",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Naishal"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#fff400CF",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 5,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.jaydeep"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#679d0a",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 20,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Aniket"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginLeft: 13,
							}}>
							{"+10 more"}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 22,
						fontWeight: "bold",
						marginBottom: 15,
						marginLeft: 25,
					}}>
					{"OUR UPCOMING EVENTS"}
				</Text>
				<View 
					style = {{
						width: 364,
						height: 319,
						backgroundColor: "#f5f5f500",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 7,
						marginBottom: 21,
						marginHorizontal: 19,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 0
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 10,
							height: 175,
							marginBottom: 14,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 18,
							marginBottom: 8,
						}}>
						{"Sher Bachhao Abhiyan"}
					</Text>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 11,
						}}>
						<View 
							style = {{
								width: 121,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 30,
								paddingVertical: 3,
								marginRight: 20,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
									marginRight: 8,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 14,
								}}>
								{"12 February"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 22,
								height: 22,
								marginRight: 6,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
								marginRight: 24,
							}}>
							{"Vastrapur"}
						</Text>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 22,
								height: 22,
								marginRight: 8,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
								flex: 1,
							}}>
							{"3 Days"}
						</Text>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 5,
						}}>
						{"₹ 13,948 raised of ₹ 20,000"}
					</Text>
					<LinearGradient 
						start={{x:0.07402593877430229, y:0.5000125681285112}}
						end={{x:0.937662307090367, y:0.5000112912481995}}
						colors={["#00c1ff", "#00ffc100"]}
						style = {{
							borderRadius: 15,
						}}>
					</LinearGradient>
				</View>
				<View 
					style = {{
						width: 364,
						height: 319,
						backgroundColor: "#f5f5f500",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 10,
						marginBottom: 21,
						marginHorizontal: 17,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 0
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 10,
							height: 175,
							marginBottom: 14,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 18,
							marginBottom: 8,
						}}>
						{"Sher Bachhao Abhiyan"}
					</Text>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 12,
						}}>
						<View 
							style = {{
								width: 121,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 30,
								paddingVertical: 3,
								marginRight: 20,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
									marginRight: 8,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 14,
								}}>
								{"12 February"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 22,
								height: 22,
								marginRight: 6,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
								marginRight: 24,
							}}>
							{"Vastrapur"}
						</Text>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 22,
								height: 22,
								marginRight: 8,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
								flex: 1,
							}}>
							{"3 Days"}
						</Text>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 6,
						}}>
						{"₹ 13,948 raised of ₹ 20,000"}
					</Text>
					<LinearGradient 
						start={{x:0.07402593877430229, y:0.5000125681285112}}
						end={{x:0.937662307090367, y:0.5000112912481995}}
						colors={["#00c1ff", "#00ffc100"]}
						style = {{
							borderRadius: 15,
						}}>
					</LinearGradient>
				</View>
				<View 
					style = {{
						width: 364,
						height: 319,
						backgroundColor: "#f5f5f500",
						borderRadius: 15,
						paddingTop: 15,
						paddingBottom: 59,
						paddingHorizontal: 10,
						marginHorizontal: 17,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 0
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 10,
							height: 175,
							marginBottom: 14,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 18,
							marginBottom: 8,
						}}>
						{"Sher Bachhao Abhiyan"}
					</Text>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<View 
							style = {{
								width: 121,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#d2f694",
								borderRadius: 30,
								paddingVertical: 3,
								marginRight: 20,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
									marginRight: 8,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 14,
								}}>
								{"12 February"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 22,
								height: 22,
								marginRight: 6,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
								marginRight: 24,
							}}>
							{"Vastrapur"}
						</Text>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 22,
								height: 22,
								marginRight: 8,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
								flex: 1,
							}}>
							{"3 Days"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
