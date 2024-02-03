import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";

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
					paddingBottom: 1984,
				}}>
				<View 
					style = {{
						marginBottom: 45,
					}}>
					<View 
						style = {{
							marginBottom: 26,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								borderRadius: 20,
								height: 296,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								bottom: -91,
								right: 15,
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
							marginBottom: 6,
							marginLeft: 47,
						}}>
						{"SAFEPAWS"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
							marginLeft: 46,
						}}>
						{"Empowering Paws, Enriching Lives"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 25,
						marginHorizontal: 18,
						width: 394,
					}}>
					{"          Paws for Compassion, founded in 2010 by a dedicated group of animal enthusiasts, is a non-governmental organization (NGO) committed to the welfare of dogs. Our mission revolves around the fundamental principles of rescue, rehabilitation, and rehoming, with the overarching goal of ensuring that every canine companion experiences a life filled with love and care. Operating nationally, our reach extends to both urban and rural communities, addressing the diverse needs of dogs across different environments."}
				</Text>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 27,
						marginBottom: 20,
						marginLeft: 27,
					}}>
					{"SKILLS"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 16,
						marginHorizontal: 33,
					}}>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 90,
							alignItems: "center",
							paddingTop: 64,
							paddingBottom: 10,
						}}
						>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
							}}>
							{"95%"}
						</Text>
					</ImageBackground>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 90,
							alignItems: "center",
							paddingTop: 64,
							paddingBottom: 10,
						}}
						>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
							}}>
							{"75%"}
						</Text>
					</ImageBackground>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 90,
							alignItems: "center",
							paddingTop: 64,
							paddingBottom: 10,
						}}
						>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
							}}>
							{"87%"}
						</Text>
					</ImageBackground>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 90,
							paddingTop: 64,
							paddingBottom: 10,
							paddingLeft: 43,
							paddingRight: 30,
						}}
						>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
							}}>
							{"85%"}
						</Text>
					</ImageBackground>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 35,
						marginHorizontal: 1,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 22,
						}}>
						{"Skill 1"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 22,
						}}>
						{"Skill 2"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 22,
						}}>
						{"Skill 3"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 22,
						}}>
						{"Skill 4"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 27,
						marginBottom: 24,
						marginLeft: 26,
					}}>
					{"LANGUAGE SPOKEN"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 26,
						marginHorizontal: 16,
					}}>
					<View 
						style = {{
							width: 125,
							alignItems: "center",
							backgroundColor: "#f5f5f5",
							borderRadius: 15,
							paddingVertical: 7,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"English"}
						</Text>
					</View>
					<View 
						style = {{
							width: 125,
							alignItems: "center",
							backgroundColor: "#f5f5f5",
							borderRadius: 15,
							paddingVertical: 7,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Hindi"}
						</Text>
					</View>
					<View 
						style = {{
							width: 125,
							alignItems: "center",
							backgroundColor: "#f5f5f5",
							borderRadius: 15,
							paddingVertical: 6,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Gujarati"}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 27,
						marginBottom: 16,
						marginLeft: 27,
					}}>
					{"Select Date"}
				</Text>
				<ScrollView 
					horizontal 
					style = {{
						flexDirection: "row",
						marginBottom: 21,
						marginHorizontal: 26,
					}}>
					<View 
						style = {{
							width: 79,
							alignSelf: "flex-start",
							backgroundColor: "#efe617",
							borderRadius: 15,
							paddingVertical: 18,
							paddingHorizontal: 14,
							marginRight: 12,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 30,
								fontWeight: "bold",
								textAlign: "center",
								width: 51,
							}}>
							{"Mon\n11"}
						</Text>
					</View>
					<View 
						style = {{
							width: 79,
							alignSelf: "flex-start",
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 19,
							paddingHorizontal: 17,
							marginRight: 12,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 30,
								textAlign: "center",
								width: 45,
							}}>
							{"Tue\n12"}
						</Text>
					</View>
					<View 
						style = {{
							width: 79,
							alignSelf: "flex-start",
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 18,
							paddingHorizontal: 11,
							marginRight: 12,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 30,
								textAlign: "center",
								width: 57,
							}}>
							{"Wed\n13"}
						</Text>
					</View>
					<View 
						style = {{
							width: 79,
							alignSelf: "flex-start",
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 19,
							paddingHorizontal: 15,
							marginRight: 12,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 30,
								textAlign: "center",
								width: 49,
							}}>
							{"Thu\n14"}
						</Text>
					</View>
					<View 
						style = {{
							width: 79,
							alignSelf: "flex-start",
							backgroundColor: "#d2f694",
							borderRadius: 15,
							paddingVertical: 19,
							paddingHorizontal: 22,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 30,
								textAlign: "center",
								width: 35,
							}}>
							{"Fri\n15"}
						</Text>
					</View>
				</ScrollView>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 22,
						marginHorizontal: 81,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#f5f5f500",
						borderRadius: 15,
						paddingVertical: 10,
						paddingHorizontal: 18,
						marginBottom: 53,
						marginHorizontal: 15,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 0
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 130,
							alignItems: "center",
							paddingTop: 70,
							paddingBottom: 33,
						}}
						>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 27,
							}}>
							{"83%"}
						</Text>
					</ImageBackground>
					<View 
						style = {{
							width: 212,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 27,
								marginBottom: 16,
							}}>
							{"Donation Received"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginLeft: 1,
							}}>
							{"₹5,50,000 of ₹7,00,000 "}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 27,
						marginBottom: 18,
						marginLeft: 20,
					}}>
					{"LOCATION"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#d9d9d9",
						borderRadius: 15,
						paddingVertical: 24,
						paddingHorizontal: 12,
						marginBottom: 32,
						marginHorizontal: 14,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 18,
							width: 378,
						}}>
						{"Cloud 9  near umiya-vijay society satellite \nAhemedabad 380015"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 27,
						marginBottom: 17,
						marginLeft: 23,
					}}>
					{"CATEGORY"}
				</Text>
				<View 
					style = {{
						marginBottom: 28,
						marginHorizontal: 8,
					}}>
					<View 
						style = {{
							width: 424,
							height: 112,
							flexDirection: "row",
							justifyContent: "space-between",
							paddingTop: 38,
							paddingBottom: 6,
							paddingLeft: 16,
							paddingRight: 64,
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
						fontSize: 27,
						marginBottom: 13,
						marginLeft: 24,
					}}>
					{"DATE"}
				</Text>
				<View 
					style = {{
						width: 396,
						height: 44,
						alignItems: "center",
						backgroundColor: "#d9d9d9",
						borderRadius: 15,
						paddingVertical: 12,
						marginBottom: 31,
						marginHorizontal: 9,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"Time Line :  1st jan 24 - 31st jan 24"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 27,
						marginBottom: 22,
						marginLeft: 27,
					}}>
					{"TIME"}
				</Text>
				<View 
					style = {{
						width: 170,
						height: 34,
						alignItems: "center",
						backgroundColor: "#d9d9d9",
						borderRadius: 15,
						paddingTop: 12,
						paddingBottom: 2,
						marginBottom: 32,
						marginHorizontal: 26,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"10:AM - 06:PM"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 27,
						marginBottom: 9,
						marginLeft: 30,
					}}>
					{"BUDGET"}
				</Text>
				<View 
					style = {{
						width: 178,
						height: 39,
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#d9d9d9",
						borderRadius: 15,
						paddingVertical: 11,
						marginBottom: 31,
						marginHorizontal: 25,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginRight: 18,
						}}>
						{"Budget"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"20,000"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 27,
						marginBottom: 14,
						marginLeft: 29,
					}}>
					{"FEEDBACK"}
				</Text>
				<View 
					style = {{
						width: 67,
						height: 35,
						alignItems: "center",
						backgroundColor: "#d9d9d9",
						borderRadius: 15,
						paddingVertical: 7,
						marginBottom: 32,
						marginHorizontal: 26,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"10.0"}
					</Text>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#d9d9d9",
						borderRadius: 15,
						paddingVertical: 10,
						paddingHorizontal: 17,
						marginBottom: 39,
						marginHorizontal: 20,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 24,
							marginRight: 4,
							flex: 1,
						}}>
						{"Join as a Volunteer"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 15,
							width: 50,
							height: 50,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 27,
						fontWeight: "bold",
						marginBottom: 17,
						marginLeft: 29,
					}}>
					{"SERVICES UPLOADED MEDIA"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 4,
						marginHorizontal: 8,
					}}>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 133,
						}}
						>
					</ImageBackground>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
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
						marginHorizontal: 6,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
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
						marginHorizontal: 6,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 133,
							height: 133,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
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
								paddingLeft: 29,
								paddingRight: 12,
							}}>
							<Text 
								style = {{
									color: "#fff730",
									fontSize: 20,
									fontWeight: "bold",
									marginTop: 66,
								}}>
								{"SEE MORE"}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
