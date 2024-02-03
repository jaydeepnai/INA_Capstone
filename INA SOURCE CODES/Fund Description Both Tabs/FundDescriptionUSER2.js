import React from "react";
import { SafeAreaView, View, ScrollView, ImageBackground, Text, Image, } from "react-native";

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
					paddingBottom: 227,
				}}>
				<View 
					style = {{
						marginBottom: 34,
					}}>
					<View 
						style = {{
							marginBottom: 13,
						}}>
						<ImageBackground 
							source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
							resizeMode = {'stretch'}
							style = {{
								paddingTop: 241,
								paddingBottom: 14,
								paddingLeft: 179,
							}}
							>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 24,
									marginBottom: 5,
								}}>
								{"Hannah Baker"}
							</Text>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
								}}>
								{"Software Engineer"}
							</Text>
						</ImageBackground>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								bottom: -46,
								left: 38,
								width: 120,
								height: 120,
							}}
						/>
					</View>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 40,
							height: 40,
							paddingHorizontal: 5,
							marginHorizontal: 178,
						}}
						>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 30,
								marginTop: 5,
							}}
						/>
					</ImageBackground>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 40,
							height: 40,
							paddingHorizontal: 5,
							marginHorizontal: 154,
						}}
						>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 30,
								marginTop: 5,
							}}
						/>
					</ImageBackground>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 40,
							height: 40,
							paddingHorizontal: 5,
							marginHorizontal: 96,
						}}
						>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 30,
								marginTop: 5,
							}}
						/>
					</ImageBackground>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 40,
							height: 40,
							paddingHorizontal: 5,
							marginHorizontal: 38,
						}}
						>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 30,
								marginTop: 5,
							}}
						/>
					</ImageBackground>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 22,
						fontWeight: "bold",
						marginBottom: 17,
						marginLeft: 18,
					}}>
					{"FUND NAME"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#f5f5f5",
						borderRadius: 15,
						paddingTop: 24,
						paddingBottom: 36,
						marginBottom: 28,
						marginHorizontal: 17,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 22,
							fontWeight: "bold",
							marginBottom: 17,
							marginLeft: 24,
						}}>
						{"DESCRIPTION"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
							marginBottom: 33,
							marginHorizontal: 24,
							width: 348,
						}}>
						{"Paws for Compassion, founded in 2010 by a dedicated group of animal enthusiasts, is a non-governmental organization (NGO) committed to the welfare of dogs. Our mission revolves around the fundamental principles of rescue, rehabilitation, and rehoming, with the overarching goal of ensuring that every canine companion experiences a life filled with love and care. Operating nationally, our reach extends to both urban and rural communities, addressing the diverse needs of dogs across different environments."}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 22,
							fontWeight: "bold",
							marginBottom: 29,
							marginLeft: 25,
						}}>
						{"REQUIREMENTS"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
							marginHorizontal: 35,
							width: 326,
						}}>
						{"Requirement 1\nRequirement 2\nRequirement 3\nRequirement 4\nRequirement 5"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#f5f5f500",
						borderRadius: 15,
						paddingVertical: 10,
						marginBottom: 29,
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
					<View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 26,
							marginHorizontal: 18,
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
							fontSize: 20,
							marginLeft: 43,
						}}>
						{"12,898 Donors Donated in your Fund"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 22,
						fontWeight: "bold",
						marginBottom: 22,
						marginLeft: 32,
					}}>
					{"POSTS"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 8,
						marginHorizontal: 32,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 39,
							height: 40,
							marginRight: 11,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 7,
								marginLeft: 2,
							}}>
							{"opad_ngo"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12,
							}}>
							{"Vaccination of Animals  "}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 19,
							height: 20,
						}}
					/>
				</View>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						borderRadius: 10,
						height: 243,
						marginBottom: 14,
						marginHorizontal: 32,
					}}
				/>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 16,
						marginHorizontal: 48,
						width: 334,
					}}>
					{"Paws for Compassion, founded in 2010 by a dedicated group of animal enthusiasts, is a non-governmental organization (NGO)"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 10,
						marginHorizontal: 42,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 29,
							height: 30,
							marginRight: 13,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 29,
							height: 30,
							marginRight: 13,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 29,
							height: 30,
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
							width: 29,
							height: 30,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 7,
						marginLeft: 46,
					}}>
					{"398 likes"}
				</Text>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 29,
						marginLeft: 42,
					}}>
					{"View all 89 comments"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 9,
						marginHorizontal: 32,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 39,
							height: 40,
							marginRight: 11,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 7,
								marginLeft: 2,
							}}>
							{"opad_ngo"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12,
							}}>
							{"Vaccination of Animals  "}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 19,
							height: 20,
						}}
					/>
				</View>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						borderRadius: 10,
						height: 243,
						marginBottom: 14,
						marginHorizontal: 32,
					}}
				/>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 27,
						marginHorizontal: 44,
						width: 342,
					}}>
					{"Paws for Compassion, founded in 2010 by a dedicated group of animal enthusiasts, is a non-governmental organization (NGO)"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 10,
						marginHorizontal: 36,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 29,
							height: 30,
							marginRight: 13,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 29,
							height: 30,
							marginRight: 13,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 29,
							height: 30,
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
							width: 29,
							height: 30,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 7,
						marginLeft: 40,
					}}>
					{"398 likes"}
				</Text>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginLeft: 36,
					}}>
					{"View all 89 comments"}
				</Text>
			</ScrollView>
		</SafeAreaView>
		
    )
}
