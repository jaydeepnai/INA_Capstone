import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';

// Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
             

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
							backgroundColor: "#C3EE7A",
							borderRadius: 20,
							paddingVertical: 14,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
							}}>
							{"TRENDING"}
						</Text>
					</View>
					<View 
						style = {{
							width: 130,
							alignItems: "center",
							backgroundColor: "#D2F694",
							borderRadius: 20,
							paddingTop: 17,
							paddingBottom: 7,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
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
							backgroundColor: "#FFFFFF",
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
						fontSize: 20,
						marginBottom: 20,
						marginHorizontal: 31,
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
									backgroundColor: "#FFFFFF",
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
									backgroundColor: "#FFFFFF",
									borderColor: "#F5F5F5",
									borderRadius: 35,
									borderWidth: 1,
									paddingTop: 36,
									paddingBottom: 19,
									shadowColor: "#FFF730",
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
									backgroundColor: "#FFFFFF",
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
									backgroundColor: "#FFFFFF",
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
							backgroundColor: "#FFFFFF",
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
						marginBottom: 40,
						marginHorizontal: 31,
					}}>
					{"TOP ACHIVERS OF THE MONTH"}
				</Text>
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
							<View style={{ width: 70,marginHorizontal:10}}>
                    <Image
                        source={require("../../../assets/NGO/me.jpg")}
                        resizeMode={"stretch"}
                        style={{
                            borderRadius: 35,
                            width: 70,
                            height: 70,
                        }}
                    />
                    
                </View>
				<View style={{ width: 70,marginHorizontal:10}}>
                    <Image
                        source={require("../../../assets/NGO/me.jpg")}
                        resizeMode={"stretch"}
                        style={{
                            borderRadius: 35,
                            width: 70,
                            height: 70,
                        }}
                    />
                    
                </View>
				<View style={{ width: 70,marginHorizontal:10}}>
                    <Image
                        source={require("../../../assets/NGO/me.jpg")}
                        resizeMode={"stretch"}
                        style={{
                            borderRadius: 35,
                            width: 70,
                            height: 70,
                        }}
                    />
								{/* <Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										position: "absolute",
										bottom: 6,
										right: -7,
										width: 25,
										height: 22,
									}}
								/> */}
							</View>
							<View style={{ width: 70,marginHorizontal:10}}>
                    <Image
                        source={require("../../../assets/NGO/me.jpg")}
                        resizeMode={"stretch"}
                        style={{
                            borderRadius: 35,
                            width: 70,
                            height: 70,
                        }}
                    />
								{/* <Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										position: "absolute",
										bottom: 6,
										right: -7,
										width: 25,
										height: 22,
									}}
								/> */}
							</View>
							<View style={{ width: 70,marginHorizontal:10}}>
                    <Image
                        source={require("../../../assets/NGO/me.jpg")}
                        resizeMode={"stretch"}
                        style={{
                            borderRadius: 35,
                            width: 70,
                            height: 70,
                        }}
                    />
								{/* <Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										position: "absolute",
										bottom: 6,
										right: -6,
										width: 25,
										height: 22,
									}}
								/> */}
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
									alignItems: "center",
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
					<View 
						style = {{
							position: "absolute",
							bottom: 132,
							right: -5,
							width: 385,
							height: 12,
							borderRadius: 15,
						}}>
					</View>
				</View>
				<View 
					style = {{
						marginBottom: 26,
						marginHorizontal: 12,
					}}>
					<View 
						
						style = {{
							width: 385,
							height: 12,
							borderRadius: 15,
							marginTop: 373,
						}}>
					</View>
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
					
					<View
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
					</View>
					
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
					
					<View
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
					</View>
					
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						marginBottom: 5,
						marginHorizontal: 20,
					}}>
					{"ACHIVERMENTS OF THE MONTH"}
				</Text>
				<View 
					style = {{
						marginHorizontal: 13,
					}}>
					<View 
						style = {{
							backgroundColor: "#FFFFFF",
							borderRadius: 15,
							paddingVertical: 14,
						}}>
						<View 
							style = {{
								width: 330,
								height: 330,
								backgroundColor: "#F2F3F7",
								borderColor: "#D9D9D9",
								borderRadius: 20,
								borderWidth: 1,
								paddingVertical: 11,
								paddingHorizontal: 10,
								marginBottom: 8,
							}}>
							<Text 
								style = {{
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
							backgroundColor: "#F2F3F7",
							borderColor: "#D9D9D9",
							borderRadius: 20,
							borderWidth: 1,
							paddingHorizontal: 10,
						}}>
						<Text 
							style = {{
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