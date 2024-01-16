import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";

export default NGOProfile = (props) => {
    
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
					paddingBottom: 107,
				}}>
				<View 
					style = {{
						marginBottom: 8,
					}}>
					<View 
						style = {{
							marginBottom: 17,
						}}>
						<Image
							source = {require("../../../assets/NGO/two_dog.jpg")} 
							resizeMode="contain"
               				style={{
                    			borderRadius: 15,
                    			height:230,
                    			width: "110%",
                    			marginBottom: 19,
                    			marginHorizontal: -10,
								}}
						/>
						<Image
							source = {require("../../../assets/NGO/NGO_pro.jpg")} 
							resizeMode = {"stretch"}
							style = {{
								backgroundColor:"bleck",
								position: "absolute",
								bottom: -52,
								left: 35,
								width: 110,
								height: 110,
								borderRadius: 15,
								
							}}
						/>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 32,
							marginBottom: 2,
							marginHorizontal: 21,
						}}>
						{"SafePaws NGO"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							marginHorizontal: 27,
						}}>
						{"“Caring for Paws, Changing Lives”"}
					</Text>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 26,
						marginHorizontal: 39,
					}}>
					<ImageBackground 
						// source={{uri:"https://i.imgur.com/1tMFzp8.png"}}
						// resizeMode = {'stretch'}
						// style = {{
						// 	width: 42,
						// 	paddingHorizontal: 8,
						// }}
						>
						<Image
							source={require("../../../assets/NGO/call.png")}
							resizeMode={"stretch"}
							style={{
								borderRadius: 35,
								width: 40,
								height: 40,
							}}
						/>
					</ImageBackground>
					<ImageBackground 
						// source={{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						// resizeMode = {'stretch'}
						// style = {{
						// 	width: 42,
						// 	paddingHorizontal: 13,
						// }}
						>
						<Image
							source={require("../../../assets/NGO/mail.png")}
							resizeMode={"stretch"}
							style={{
								borderRadius: 35,
								width: 40,
								height: 40,
							}}
						/>
					</ImageBackground>
					<ImageBackground 
						// source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						// resizeMode = {'stretch'}
						// style = {{
						// 	width: 42,
						// 	paddingHorizontal: 11,
						// }}
						>
						<Image
							source={require("../../../assets/NGO/facebook.png")}
							resizeMode={"stretch"}
							style={{
								borderRadius: 35,
								width: 40,
								height: 40,
							}}
						/>
					</ImageBackground>
					<ImageBackground 
						// source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						// resizeMode = {'stretch'}
						// style = {{
						// 	width: 42,
						// 	paddingHorizontal: 10,
						// }}
						>
						<Image
							source={require("../../../assets/NGO/instagram.png")}
							resizeMode={"stretch"}
							style={{
								borderRadius: 35,
								width: 40,
								height: 40,
							}}
						/>
					</ImageBackground>
					<ImageBackground 
						// source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						// resizeMode = {'stretch'}
						// style = {{
						// 	width: 42,
						// 	paddingHorizontal: 12,
						// }}
						>
						<Image
							source={require("../../../assets/NGO/twitter.png")}
							resizeMode={"stretch"}
							style={{
								borderRadius: 35,
								width: 40,
								height: 40,
							}}
						/>
					</ImageBackground>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 5,
						marginHorizontal: 41,
					}}>
					<Image
						source = {require("../../../assets/NGO/followers.png")} 
						resizeMode = {"stretch"}
						style = {{
							width: 35,
							height: 35,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {require("../../../assets/NGO/placard.png")} 
						resizeMode = {"stretch"}
						style = {{
							width: 35,
							height: 35,
							marginRight: 106,
						}}
					/>
					<Image
						source = {require("../../../assets/NGO/customer.png")} 
						resizeMode = {"stretch"}
						style = {{
							width: 35,
							height: 35,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 8,
						marginHorizontal: 43,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							marginRight: 4,
							flex: 1,
						}}>
						{"10m"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
							marginRight: 122,
						}}>
						{"60"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"40"}
					</Text>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 29,
						marginHorizontal: 22,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 10,
							marginRight: 4,
							flex: 1,
						}}>
						{"Followers"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
							marginRight: 46,
						}}>
						{"  NGO Events"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 10,
						}}>
						{"    NGO services"}
					</Text>
				</View>
				<Text 
					style = {{
						fontSize: 15,
						marginBottom: 47,
						marginHorizontal: 23,
						width: 384,
					}}>
					{"At SafePaws our mission is simple yet profound: to provide a haven for animals in need, where compassion meets action. Read more..."}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 8,
						marginHorizontal: 90,
					}}>
					<Image
						source = {require("../../../assets/NGO/id-card.png")} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
						}}
					/>
					<Image
						source = {require("../../../assets/NGO/share-post.png")} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
						}}
					/>
				</View>
				<View 
					style = {{
						width: 215,
						height: 1,
						backgroundColor: "#000000",
						marginBottom: 24,
						marginHorizontal: 1,
					}}>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						marginBottom: 25,
						marginHorizontal: 21,
					}}>
					{"DOCUMENTS"}
				</Text>
				<ScrollView 
					horizontal 
					style = {{
						flexDirection: "row",
						marginBottom: 21,
						marginHorizontal: 21,
					}}>
					<Image
						source = {require("../../../assets/NGO/certi.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 5,
							width: 220,
							height: 240,
							marginRight: 7,
						}}
					/>
					<Image
						source = {require("../../../assets/NGO/certi.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 5,
							width: 220,
							height: 240,
						}}
					/>
				</ScrollView>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 40,
						marginHorizontal: 182,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 8,
							height: 8,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 8,
							height: 8,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 8,
							height: 8,
						}}
					/>
				</View>
				<View 
					style = {{
						marginBottom: 23,
						marginHorizontal: 6,
					}}>
					<View 
						style = {{
							width: 424,
							height: 112,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								paddingTop: 38,
								paddingBottom: 6,
								paddingHorizontal: 16,
							}}>
							<View 
								style = {{
									width: 70,
									alignSelf: "flex-start",
									marginRight: 22,
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
									source = {require("../../../assets/NGO/dog.png")} 
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
									marginRight: 21,
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
									source = {require("../../../assets/NGO/dog.png")} 
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
									marginRight: 21,
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
									source = {require("../../../assets/NGO/dog.png")} 
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
									source = {require("../../../assets/NGO/dog.png")} 
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
						<Text 
							style = {{
								position: "absolute",
								top: -18,
								left: 20,
								color: "#000000",
								fontSize: 20,
							}}>
							{"SERVED SERVICES"}
						</Text>
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
						{/* <Text 
							style = {{
								color: "#000000",
								fontSize: 12,
								marginTop: 38,
							}}>
							{"Blood"}
						</Text> */}
					</View>
					{/* <ImageBackground 
						source={require("../../../assets/NGO/dog.png")} 
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
					</ImageBackground> */}
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 29,
						marginHorizontal: 1,
					}}>
					<Image
						source = {require("../../../assets/NGO/dog_adopt.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 10,
							width: 200,
							height: 254,
						}}
					/>
					<Image
						source = {require("../../../assets/NGO/cat.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 10,
							width: 200,
							height: 254,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						marginBottom: 15,
						marginHorizontal: 25,
					}}>
					{"TOP ACHIVERS OF THE MONTH"}
				</Text>
				<View 
					style = {{
						marginBottom: 21,
						marginHorizontal: 1,
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
									source = {require("../../../assets/NGO/me.jpg")} 
									resizeMode={"stretch"}
                        				style={{
                            			borderRadius: 35,
                            			width: 70,
                            			height: 70,
                        				}}
								/>
								<Image
									source = {require("../../../assets/NGO/one.png")} 
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
									source = {require("../../../assets/NGO/me.jpg")} 
									resizeMode={"stretch"}
                        				style={{
                            			borderRadius: 35,
                            			width: 70,
                            			height: 70,
                        				}}
								/>
								<Image
									source = {require("../../../assets/NGO/one.png")} 
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
									source = {require("../../../assets/NGO/me.jpg")} 
									resizeMode={"stretch"}
                        				style={{
                            			borderRadius: 35,
                            			width: 70,
                            			height: 70,
                        				}}
								/>
								<Image
									source = {require("../../../assets/NGO/one.png")} 
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
									source = {require("../../../assets/NGO/me.jpg")} 
									resizeMode={"stretch"}
                        				style={{
                            			borderRadius: 35,
                            			width: 70,
                            			height: 70,
                        				}}
								/>
								<Image
									source = {require("../../../assets/NGO/one.png")} 
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
									source = {require("../../../assets/NGO/me.jpg")} 
									resizeMode={"stretch"}
                        				style={{
                            			borderRadius: 35,
                            			width: 70,
                            			height: 70,
                        				}}
								/>
								<Image
									source = {require("../../../assets/NGO/one.png")} 
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
						marginBottom: 20,
						marginHorizontal: 25,
					}}>
					{"UPCOMING EVENTS"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 25,
						marginHorizontal: 22,
					}}>
					<Image
						source = {require("../../../assets/NGO/upcoming_event.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 10,
							width: 200,
							height: 254,
						}}
					/>
					<Image
						source = {require("../../../assets/NGO/upcoming.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 10,
							width: 200,
							height: 254,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#F5F5F5",
						borderRadius: 15,
						paddingVertical: 2,
						paddingHorizontal: 17,
						marginBottom: 31,
						marginHorizontal: 5,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 32,
							marginRight: 4,
							flex: 1,
						}}>
						{"Join as a Volunteer"}
					</Text>
					<Image
						source = {require("../../../assets/NGO/volunteer.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 73,
							height: 68,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						marginBottom: 25,
						marginHorizontal: 10,
					}}>
					{"SARVED UPLOADED MEDIA"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 4,
						marginHorizontal: 9,
					}}>
					<ImageBackground 
						source = {require("../../../assets/NGO/photo_9.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
						>
					</ImageBackground>
					<Image
						source = {require("../../../assets/NGO/photo_9.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
					<Image
						source = {require("../../../assets/NGO/photo_9.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 6,
						marginHorizontal: 9,
					}}>
					<Image
						source = {require("../../../assets/NGO/photo_9.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
					<Image
						source = {require("../../../assets/NGO/photo_9.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
					<Image
						source = {require("../../../assets/NGO/photo_9.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 27,
						marginHorizontal: 9,
					}}>
					<Image
						source = {require("../../../assets/NGO/photo_9.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
					<Image
						source = {require("../../../assets/NGO/photo_9.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
					<View 
						style = {{
							width: 133,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 133,
							}}
						/>
						<View 
							style = {{
								position: "absolute",
								bottom: 0,
								left: -2,
								width: 133,
								height: 132,
								backgroundColor: "#00000099",
								paddingLeft: 26,
								paddingRight: 15,
							}}>
							<Text 
								style = {{
									color: "#FFF730",
									fontSize: 20,
									marginTop: 58,
								}}>
								{"SEE MORE"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style = {{
						width: 364,
						height: 85,
						marginBottom: 31,
						marginHorizontal: 28,
					}}>
					<View 
						style = {{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 19,
							paddingLeft: 128,
							paddingRight: 52,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								width: 184,
							}}>
							{"Give us your Honest Feedback NOW!"}
						</Text>
					</View>
					<Image
						source = {require("../../../assets/NGO/feedback.png")} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							top: -14,
							left: -13,
							width: 84,
							height: 96,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 24,
						marginBottom: 5,
						marginHorizontal: 11,
					}}>
					{"Resource Available"}
				</Text>
				<View 
					style = {{
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							paddingVertical: 41,
							paddingHorizontal: 4,
						}}>
						<View 
							style = {{
								width: 201,
								marginRight: 5,
							}}>
							<View 
								style = {{
									alignItems: "center",
									backgroundColor: "#D2F694",
									borderRadius: 19,
									paddingTop: 76,
									paddingBottom: 22,
								}}>
								<Text 
									style = {{
										color: "#000000",
										fontSize: 32,
									}}>
									{"Food"}
								</Text>
							</View>
							<Image
								source = {require("../../../assets/NGO/food.jpg")} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									top: -41,
									left: 51,
									width: 96,
									height: 96,
								}}
							/>
						</View>
						<View 
							style = {{
								width: 201,
							}}>
							<View 
								style = {{
									alignItems: "center",
									backgroundColor: "#D2F694",
									borderRadius: 19,
									paddingTop: 76,
									paddingBottom: 22,
								}}>
								<Text 
									style = {{
										color: "#000000",
										fontSize: 32,
									}}>
									{"Clothes"}
								</Text>
							</View>
							<Image
								source = {require("../../../assets/NGO/cloth.jpg")} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									top: -41,
									left: 51,
									width: 96,
									height: 96,
								}}
							/>
						</View>
					</View>
					<View 
						style = {{
							position: "absolute",
							bottom: 33,
							right: -187,
							width: 201,
							height: 130,
							backgroundColor: "#D2F694",
							borderRadius: 19,
						}}>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}