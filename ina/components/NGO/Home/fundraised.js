import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Fundraised = () => {
    return ( 
            <View>  
                <View 
					style = {{
						marginBottom: 54,
					}}>
					<View 
						style = {{
							backgroundColor: "#FFFFFF",
							paddingVertical: 3,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 10,
								marginHorizontal: 17,
							}}>
							<View 
								style = {{
									width: 70,
								}}>
								<Image
									source = {require("../../../assets/NGO/post2.jpg")}
									resizeMode = {"stretch"}
									style = {{
										borderRadius: 35,
										height: 70,
									}}
								/>
								<Image
									source = {require("../../../assets/NGO/post2.jpg")}
									resizeMode = {"stretch"}
									style = {{
										position: "absolute",
										bottom: 6,
										right: -5,
										width: 25,
										height: 22,
									}}
								/>
							</View>
							<View 
								style = {{
									width: 70,
								}}>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										borderRadius: 35,
										height: 70,
									}}
								/>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										position: "absolute",
										bottom: 6,
										right: -6,
										width: 25,
										height: 22,
									}}
								/>
							</View>
							<View 
								style = {{
									width: 70,
								}}>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										borderRadius: 35,
										height: 70,
									}}
								/>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										position: "absolute",
										bottom: 6,
										right: -7,
										width: 25,
										height: 22,
									}}
								/>
							</View>
							<View 
								style = {{
									width: 70,
								}}>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										borderRadius: 35,
										height: 70,
									}}
								/>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										position: "absolute",
										bottom: 6,
										right: -7,
										width: 25,
										height: 22,
									}}
								/>
							</View>
							<View 
								style = {{
									width: 70,
								}}>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										borderRadius: 35,
										height: 70,
									}}
								/>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										position: "absolute",
										bottom: 6,
										right: -6,
										width: 25,
										height: 22,
									}}
								/>
							</View>
						</View>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginHorizontal: 34,
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
						</View>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							top: 3,
							right: -63,
							borderRadius: 35,
							width: 70,
							height: 70,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						marginBottom: 24,
						marginHorizontal: 29,
					}}>
					{"FUND RAISED"}
				</Text>
				<View 
					style = {{
						marginBottom: 24,
						marginHorizontal: 12,
					}}>
					<View 
						style = {{
							backgroundColor: "#FFFFFF",
							borderRadius: 20,
							paddingTop: 19,
							paddingBottom: 8,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
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
								alignItems: "center",
								marginBottom: 20,
								marginHorizontal: 9,
							}}>
							<Image
								source ={require("../../../assets/NGO/post2.jpg")}
								resizeMode = {"stretch"}
								style = {{
									width: 40,
									height: 40,
									marginRight: 13,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
									flex: 1,
								}}>
								{"NGO name"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 15,
								marginHorizontal: 21,
								width: 364,
							}}>
							{"Help Little Padma Saranya Dance Back to \nHealth!"}
						</Text>
						<Image
							source = {require("../../../assets/NGO/post2.jpg")} 
							resizeMode = {"stretch"}
							style = {{
								borderRadius: 20,
								height: 180,
                                width: 180,
								marginBottom: 26,
								marginHorizontal: 9,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 35,
								marginHorizontal: 30,
							}}>
							{"₹ 13,948 raised of ₹ 20,000"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 8,
								marginHorizontal: 20,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 30,
									height: 30,
									marginRight: 10,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"12 days left"}
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
									width: 30,
									height: 30,
									marginRight: 12,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Volunteers"}
							</Text>
						</View>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginHorizontal: 7,
							}}>
							<View 
								style = {{
									width: 152,
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderRadius: 20,
									paddingVertical: 16,
									paddingHorizontal: 11,
									marginRight: 137,
								}}>
								<Image
									source = {require("../../../assets/NGO/post2.jpg")}
									resizeMode = {"stretch"}
									style = {{
										borderRadius: 20,
										width: 40,
										height: 40,
										marginRight: 24,
									}}
								/>
								<Text 
									style = {{
										color: "#000000",
										fontSize: 16,
										flex: 1,
									}}>
									{"Share"}
								</Text>
							</View>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 40,
									height: 40,
								}}
							/>
						</View>
					</View>
					{/* <LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#00C1FF", "#00FFC1"]}
						style = {{
							position: "absolute",
							bottom: 132,
							right: -5,
							width: 385,
							height: 12,
							borderRadius: 15,
						}}>
					</LinearGradient> */}
				</View>
				<View 
					style = {{
						marginBottom: 26,
						marginHorizontal: 12,
					}}>
					{/* <LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#00C1FF", "#00FFC1"]}
						style = {{
							width: 385,
							height: 12,
							borderRadius: 15,
							marginTop: 373,
						}}>
					</LinearGradient> */}
					<View 
						style = {{
							position: "absolute",
							bottom: 0,
							left: 0,
							width: 400,
							height: 500,
							backgroundColor: "#FFFFFF",
							borderRadius: 20,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
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
								alignItems: "center",
								marginTop: 19,
								marginBottom: 20,
								marginHorizontal: 9,
							}}>
							<Image
								source = {require("../../../assets/NGO/post2.jpg")}
								resizeMode = {"stretch"}
								style = {{
									width: 40,
									height: 40,
									marginRight: 20,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
									flex: 1,
								}}>
								{"  NGO name"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 15,
								marginHorizontal: 21,
								width: 358,
							}}>
							{"Help Little Padma Saranya Dance Back to \nHealth!"}
						</Text>
						<Image
							source = {require("../../../assets/NGO/post2.jpg")}
							resizeMode = {"stretch"}
							style = {{
								borderRadius: 20,
								height: 180,
								marginBottom: 26,
								marginHorizontal: 9,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 35,
								marginHorizontal: 30,
							}}>
							{"₹ 13,948 raised of ₹ 20,000"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 8,
								marginHorizontal: 20,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 30,
									height: 30,
									marginRight: 10,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"12 days left"}
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
									width: 30,
									height: 30,
									marginRight: 12,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Volunteers"}
							</Text>
						</View>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginHorizontal: 7,
							}}>
							<View 
								style = {{
									width: 152,
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderRadius: 20,
									paddingVertical: 16,
									paddingHorizontal: 11,
									marginRight: 137,
								}}>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										borderRadius: 20,
										width: 40,
										height: 40,
										marginRight: 24,
									}}
								/>
								<Text 
									style = {{
										color: "#000000",
										fontSize: 16,
										flex: 1,
									}}>
									{"Share"}
								</Text>
							</View>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 40,
									height: 40,
								}}
							/>
						</View>
					</View>
					{/* <LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#00C1FF", "#00FFC1"]}
						style = {{
							position: "absolute",
							bottom: 132,
							right: 1,
							width: 385,
							height: 12,
							borderRadius: 15,
						}}>
					</LinearGradient> */}
				</View>
				<View 
					style = {{
						marginBottom: 34,
						marginHorizontal: 13,
					}}>
					<View 
						style = {{
							backgroundColor: "#FFFFFF",
							borderRadius: 20,
							paddingTop: 19,
							paddingBottom: 8,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
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
								alignItems: "center",
								marginBottom: 20,
								marginHorizontal: 9,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 40,
									height: 40,
									marginRight: 19,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
									flex: 1,
								}}>
								{" NGO name"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 15,
								marginHorizontal: 21,
								width: 362,
							}}>
							{"Help Little Padma Saranya Dance Back to \nHealth!"}
						</Text>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								borderRadius: 20,
								height: 180,
								marginBottom: 26,
								marginHorizontal: 9,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 35,
								marginHorizontal: 30,
							}}>
							{"₹ 13,948 raised of ₹ 20,000"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 8,
								marginHorizontal: 20,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 30,
									height: 30,
									marginRight: 10,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"12 days left"}
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
									width: 30,
									height: 30,
									marginRight: 12,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"Volunteers"}
							</Text>
						</View>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginHorizontal: 7,
							}}>
							<View 
								style = {{
									width: 152,
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderRadius: 20,
									paddingVertical: 16,
									paddingHorizontal: 11,
									marginRight: 137,
								}}>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										borderRadius: 20,
										width: 40,
										height: 40,
										marginRight: 24,
									}}
								/>
								<Text 
									style = {{
										color: "#000000",
										fontSize: 16,
										flex: 1,
									}}>
									{"Share"}
								</Text>
							</View>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 40,
									height: 40,
								}}
							/>
						</View>
					</View>
					{/* <LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#00C1FF", "#00FFC1"]}
						style = {{
							position: "absolute",
							bottom: 132,
							right: -5,
							width: 385,
							height: 12,
							borderRadius: 15,
						}}>
					</LinearGradient> */}
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						marginBottom: 5,
						marginHorizontal: 20,
					}}>
                </Text>
            </View>
    )}
    export default Fundraised