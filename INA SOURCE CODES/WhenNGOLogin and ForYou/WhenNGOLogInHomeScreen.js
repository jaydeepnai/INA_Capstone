import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";
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
					paddingBottom: 300,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 36,
						marginHorizontal: 18,
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
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 36,
						marginHorizontal: 63,
					}}>
					<View 
						style = {{
							width: 130,
							alignItems: "center",
							backgroundColor: "#c3ee7a",
							borderRadius: 20,
							paddingVertical: 14,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"TRENDING"}
						</Text>
					</View>
					<View 
						style = {{
							width: 130,
							alignItems: "center",
							backgroundColor: "#d2f694",
							borderRadius: 20,
							paddingTop: 17,
							paddingBottom: 7,
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
				</View>
				<View 
					style = {{
						marginBottom: 40,
						marginHorizontal: 38,
					}}>
					<View 
						style = {{
							backgroundColor: "#ffffff",
							borderRadius: 50,
						}}>
					</View>
					<View 
						style = {{
							position: "absolute",
							top: 0,
							right: -72,
							width: 400,
							height: 96,
							backgroundColor: "#f5f5f500",
							borderRadius: 15,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
							shadowOffset: {
							    width: 0,
							    height: 0
							},
							shadowRadius: 4,
							elevation: 4,
						}}>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 20,
						marginLeft: 31,
					}}>
					{"TOP CATEGORY'S"}
				</Text>
				<View 
					style = {{
						marginBottom: 22,
					}}>
					<View 
						style = {{
							width: 430,
							height: 112,
							flexDirection: "row",
							justifyContent: "space-between",
							paddingTop: 38,
							paddingBottom: 6,
							paddingLeft: 16,
							paddingRight: 70,
						}}>
						<View 
							style = {{
								width: 70,
								alignSelf: "flex-start",
							}}>
							<View 
								style = {{
									alignItems: "center",
									backgroundColor: "#ffffff",
									borderRadius: 35,
									paddingTop: 36,
									paddingBottom: 19,
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
										fontSize: 13,
									}}>
									{"Animal"}
								</Text>
							</View>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									top: -25,
									right: 2,
									width: 65,
									height: 63,
								}}
							/>
						</View>
						<View 
							style = {{
								width: 70,
								alignSelf: "flex-start",
							}}>
							<View 
								style = {{
									alignItems: "center",
									backgroundColor: "#ffffff",
									borderColor: "#f5f5f5",
									borderRadius: 35,
									borderWidth: 1,
									paddingTop: 36,
									paddingBottom: 19,
									shadowColor: "#fff730",
									shadowOpacity: 1.0,
									shadowOffset: {
									    width: 0,
									    height: 0
									},
									shadowRadius: 5,
									elevation: 5,
								}}>
								<Text 
									style = {{
										color: "#000000",
										fontSize: 13,
									}}>
									{"Poverty"}
								</Text>
							</View>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									top: -33,
									left: 2,
									width: 65,
									height: 63,
								}}
							/>
						</View>
						<View 
							style = {{
								width: 70,
								alignSelf: "flex-start",
							}}>
							<View 
								style = {{
									backgroundColor: "#ffffff",
									borderRadius: 35,
									paddingTop: 31,
									paddingBottom: 13,
									paddingHorizontal: 13,
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
										fontSize: 12,
										textAlign: "center",
										width: 44,
									}}>
									{"Child Welfare"}
								</Text>
							</View>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									top: -28,
									left: 2,
									width: 65,
									height: 54,
								}}
							/>
						</View>
						<View 
							style = {{
								width: 70,
								alignSelf: "flex-start",
							}}>
							<View 
								style = {{
									alignItems: "center",
									backgroundColor: "#ffffff",
									borderRadius: 35,
									paddingTop: 38,
									paddingBottom: 18,
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
										fontSize: 12,
									}}>
									{"Education"}
								</Text>
							</View>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									top: -33,
									left: 1,
									width: 65,
									height: 63,
								}}
							/>
						</View>
					</View>
					<View 
						style = {{
							position: "absolute",
							bottom: 6,
							right: 0,
							width: 70,
							height: 68,
							backgroundColor: "#ffffff",
							borderRadius: 35,
							paddingHorizontal: 17,
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
								fontSize: 12,
								marginTop: 38,
							}}>
							{"Blood"}
						</Text>
					</View>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							position: "absolute",
							top: 6,
							right: 3,
							width: 65,
							height: 63,
							paddingHorizontal: 15,
						}}
						>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12,
								marginTop: 33,
							}}>
							{"Blood"}
						</Text>
					</ImageBackground>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 40,
						marginLeft: 31,
					}}>
					{"TOP ACHIVERS OF THE MONTH"}
				</Text>
				<View 
					style = {{
						marginBottom: 54,
					}}>
					<View 
						style = {{
							backgroundColor: "#ffffff",
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
						fontWeight: "bold",
						marginBottom: 24,
						marginLeft: 29,
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
							backgroundColor: "#ffffff",
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
									marginRight: 13,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
									fontWeight: "bold",
									flex: 1,
								}}>
								{"NGO name"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 15,
								marginHorizontal: 21,
								width: 364,
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
								fontWeight: "bold",
								marginBottom: 35,
								marginLeft: 30,
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
									fontWeight: "bold",
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
									fontWeight: "bold",
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
									backgroundColor: "#ffffff",
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
										fontWeight: "bold",
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
					<LinearGradient 
						start={{x:0.07402593877430229, y:0.5000125681285112}}
						end={{x:0.937662307090367, y:0.5000112912481995}}
						colors={["#00c1ff", "#00ffc100"]}
						style = {{
							position: "absolute",
							bottom: 132,
							right: -5,
							width: 385,
							height: 12,
							borderRadius: 15,
						}}>
					</LinearGradient>
				</View>
				<View 
					style = {{
						marginBottom: 26,
						marginHorizontal: 12,
					}}>
					<LinearGradient 
						start={{x:0.07402593877430229, y:0.5000125681285112}}
						end={{x:0.937662307090367, y:0.5000112912481995}}
						colors={["#00c1ff", "#00ffc100"]}
						style = {{
							width: 385,
							height: 12,
							borderRadius: 15,
							marginTop: 373,
						}}>
					</LinearGradient>
					<View 
						style = {{
							position: "absolute",
							bottom: 0,
							left: 0,
							width: 400,
							height: 500,
							backgroundColor: "#ffffff",
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
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
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
									fontWeight: "bold",
									flex: 1,
								}}>
								{"  NGO name"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 15,
								marginHorizontal: 21,
								width: 358,
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
								fontWeight: "bold",
								marginBottom: 35,
								marginLeft: 30,
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
									fontWeight: "bold",
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
									fontWeight: "bold",
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
									backgroundColor: "#ffffff",
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
										fontWeight: "bold",
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
					<LinearGradient 
						start={{x:0.07402593877430229, y:0.5000125681285112}}
						end={{x:0.937662307090367, y:0.5000112912481995}}
						colors={["#00c1ff", "#00ffc100"]}
						style = {{
							position: "absolute",
							bottom: 132,
							right: 1,
							width: 385,
							height: 12,
							borderRadius: 15,
						}}>
					</LinearGradient>
				</View>
				<View 
					style = {{
						marginBottom: 34,
						marginHorizontal: 13,
					}}>
					<View 
						style = {{
							backgroundColor: "#ffffff",
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
									fontWeight: "bold",
									flex: 1,
								}}>
								{" NGO name"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
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
								fontWeight: "bold",
								marginBottom: 35,
								marginLeft: 30,
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
									fontWeight: "bold",
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
									fontWeight: "bold",
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
									backgroundColor: "#ffffff",
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
										fontWeight: "bold",
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
					<LinearGradient 
						start={{x:0.07402593877430229, y:0.5000125681285112}}
						end={{x:0.937662307090367, y:0.5000112912481995}}
						colors={["#00c1ff", "#00ffc100"]}
						style = {{
							position: "absolute",
							bottom: 132,
							right: -5,
							width: 385,
							height: 12,
							borderRadius: 15,
						}}>
					</LinearGradient>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 5,
						marginLeft: 20,
					}}>
					{"ACHIVERMENTS OF THE MONTH"}
				</Text>
				<View 
					style = {{
						marginHorizontal: 13,
					}}>
					<View 
						style = {{
							backgroundColor: "#ffffff",
							borderRadius: 15,
							paddingVertical: 14,
						}}>
						<View 
							style = {{
								width: 330,
								height: 330,
								backgroundColor: "#f2f3f7",
								borderColor: "#d9d9d9",
								borderRadius: 20,
								borderWidth: 1,
								paddingVertical: 11,
								paddingHorizontal: 10,
								marginBottom: 8,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 12,
									width: 308,
								}}>
								{"Lorem Ipsum is simply dummy text of the printing \nand typesetting industry. Lorem Ipsum has been \nthe industry's standard dummy text ever since the \n1500s, when an unknown printer took a galley of type\nand scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, READ MORE"}
							</Text>
						</View>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 11,
								marginHorizontal: 3,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 20,
									height: 20,
									marginRight: 17,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 20,
									height: 20,
									marginRight: 17,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 20,
									height: 20,
								}}
							/>
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
									width: 20,
									height: 20,
									marginRight: 17,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 20,
									height: 20,
								}}
							/>
						</View>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
								marginHorizontal: 14,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 12,
								}}>
								{"Liked by jaydeep,aniket and 100 others"}
							</Text>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 12,
								}}>
								{"Liked by jaydeep,aniket and 100 others"}
							</Text>
						</View>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginHorizontal: 14,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 12,
								}}>
								{"View all 10 comments"}
							</Text>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 12,
								}}>
								{"View all 10 comments"}
							</Text>
						</View>
					</View>
					<View 
						style = {{
							position: "absolute",
							top: 14,
							right: -254,
							width: 330,
							height: 330,
							backgroundColor: "#f2f3f7",
							borderColor: "#d9d9d9",
							borderRadius: 20,
							borderWidth: 1,
							paddingHorizontal: 10,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12,
								marginTop: 11,
								width: 308,
							}}>
							{"Lorem Ipsum is simply dummy text of the printing \nand typesetting industry. Lorem Ipsum has been \nthe industry's standard dummy text ever since the \n1500s, when an unknown printer took a galley of type\nand scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, READ MORE"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
