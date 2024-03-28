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
					backgroundColor: "#FFFFFF",
					paddingTop: 9,
					paddingBottom: 99,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 32,
						marginHorizontal: 27,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 58,
							height: 48,
							marginRight: 84,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 32,
						}}>
						{"Filters"}
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
							width: 50,
							height: 50,
						}}
					/>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 32,
						marginBottom: 25,
						marginHorizontal: 101,
					}}>
					{"Top rated NGOs"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#F5F5F500",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 10,
						marginBottom: 31,
						marginHorizontal: 33,
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
							marginBottom: 25,
						}}>
						<View 
							style = {{
								marginBottom: 15,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									borderRadius: 10,
									height: 175,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									bottom: -62,
									left: 2,
									borderRadius: 50,
									width: 90,
									height: 90,
								}}
							/>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 6,
								marginHorizontal: 9,
							}}>
							{"ANIMAL FRIENDS UNITED"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
								marginHorizontal: 24,
							}}>
							{"Empowering Paws, Enriching Lives"}
						</Text>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<View 
							style = {{
								width: 68,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#D2F694",
								borderRadius: 30,
								paddingVertical: 5,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
									marginRight: 9,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"4.0"}
							</Text>
						</View>
						<View 
							style = {{
								width: 114,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#D2F694",
								borderRadius: 30,
								paddingVertical: 5,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
									marginRight: 5,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 14,
								}}>
								{"10am - 6pm"}
							</Text>
						</View>
						<View 
							style = {{
								width: 114,
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#D2F694",
								borderRadius: 30,
								paddingVertical: 5,
								paddingHorizontal: 11,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 14,
								}}>
								{"Maninagar"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style = {{
						backgroundColor: "#F5F5F500",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 10,
						marginBottom: 31,
						marginHorizontal: 33,
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
							marginBottom: 26,
						}}>
						<View 
							style = {{
								marginBottom: 14,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									borderRadius: 10,
									height: 175,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									bottom: -62,
									left: 2,
									borderRadius: 50,
									width: 90,
									height: 90,
								}}
							/>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 6,
								marginHorizontal: 12,
							}}>
							{"ATELIER AFRICA SAFARIS"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
								marginHorizontal: 24,
							}}>
							{"Empowering Paws, Enriching Lives"}
						</Text>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<View 
							style = {{
								width: 68,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#D2F694",
								borderRadius: 30,
								paddingVertical: 5,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
									marginRight: 9,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"4.0"}
							</Text>
						</View>
						<View 
							style = {{
								width: 114,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#D2F694",
								borderRadius: 30,
								paddingVertical: 5,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
									marginRight: 5,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 14,
								}}>
								{"10am - 6pm"}
							</Text>
						</View>
						<View 
							style = {{
								width: 114,
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#D2F694",
								borderRadius: 30,
								paddingVertical: 5,
								paddingHorizontal: 11,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 14,
								}}>
								{"Maninagar"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style = {{
						backgroundColor: "#F5F5F500",
						borderRadius: 15,
						paddingVertical: 15,
						paddingHorizontal: 10,
						marginBottom: 18,
						marginHorizontal: 33,
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
							marginBottom: 18,
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
								fontSize: 20,
								marginBottom: 6,
								marginHorizontal: 2,
							}}>
							{"ELEPHANTA REUNION NGO"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 14,
								marginHorizontal: 24,
							}}>
							{"Empowering Paws, Enriching Lives"}
						</Text>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<View 
							style = {{
								width: 68,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#D2F694",
								borderRadius: 30,
								paddingVertical: 5,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
									marginRight: 9,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
								}}>
								{"4.0"}
							</Text>
						</View>
						<View 
							style = {{
								width: 114,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#D2F694",
								borderRadius: 30,
								paddingVertical: 5,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
									marginRight: 5,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 14,
								}}>
								{"10am - 6pm"}
							</Text>
						</View>
						<View 
							style = {{
								width: 114,
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#D2F694",
								borderRadius: 30,
								paddingVertical: 5,
								paddingHorizontal: 11,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 22,
									height: 22,
								}}
							/>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 14,
								}}>
								{"Maninagar"}
							</Text>
						</View>
					</View>
				</View>
				<Text 
					style = {{
						color: "#D2F694",
						fontSize: 14,
						marginBottom: 28,
						marginHorizontal: 17,
					}}>
					{"See More"}
				</Text>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 32,
						marginBottom: 20,
						marginHorizontal: 114,
					}}>
					{"Near by NGOs"}
				</Text>
				<View 
					style = {{
						marginBottom: 60,
						marginHorizontal: 30,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 12,
							paddingHorizontal: 11,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
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
							position: "absolute",
							bottom: -3,
							left: 12,
							color: "#000000",
							fontSize: 14,
							width: 206,
						}}>
						{"Let’s find the best NGOs Around you."}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 32,
						marginBottom: 53,
						marginHorizontal: 56,
					}}>
					{"Top Category of NGOs"}
				</Text>
				<ScrollView 
					horizontal 
					style = {{
						flexDirection: "row",
						marginBottom: 39,
						marginHorizontal: 5,
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
							marginRight: 20,
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
								{"Blood"}
							</Text>
						</View>
						<ImageBackground 
							source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
							resizeMode = {'stretch'}
							style = {{
								position: "absolute",
								top: -32,
								left: 2,
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
				</ScrollView>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 32,
						marginBottom: 26,
						marginHorizontal: 162,
					}}>
					{"Ratings"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 40,
						marginHorizontal: 35,
					}}>
					<View 
						style = {{
							width: 80,
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F2F3F7",
							borderRadius: 15,
							padding: 5,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 20,
								marginRight: 11,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								flex: 1,
							}}>
							{"4.5"}
						</Text>
					</View>
					<View 
						style = {{
							width: 80,
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#F2F3F7",
							borderRadius: 15,
							paddingVertical: 5,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 20,
								marginRight: 11,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"4.5"}
						</Text>
					</View>
					<View 
						style = {{
							width: 80,
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F2F3F7",
							borderRadius: 15,
							padding: 5,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 20,
								marginRight: 11,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								flex: 1,
							}}>
							{"4.5"}
						</Text>
					</View>
					<View 
						style = {{
							width: 80,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "#F2F3F7",
							borderRadius: 15,
							paddingVertical: 5,
							paddingLeft: 5,
							paddingRight: 17,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 20,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"4.5"}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 32,
						marginBottom: 41,
						marginHorizontal: 138,
					}}>
					{"NGO types"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 15,
						marginHorizontal: 12,
					}}>
					<View 
						style = {{
							width: 84,
							alignItems: "center",
							backgroundColor: "#F2F3F7",
							borderRadius: 15,
							paddingVertical: 11,
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
							width: 90,
							alignItems: "center",
							backgroundColor: "#F2F3F7",
							borderRadius: 15,
							paddingVertical: 11,
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
							width: 199,
							alignItems: "center",
							backgroundColor: "#F2F3F7",
							borderRadius: 15,
							paddingVertical: 11,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Women Emporement"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginHorizontal: 28,
					}}>
					<View 
						style = {{
							width: 101,
							alignItems: "center",
							backgroundColor: "#F2F3F7",
							borderRadius: 15,
							paddingVertical: 11,
							marginRight: 13,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Education"}
						</Text>
					</View>
					<View 
						style = {{
							width: 124,
							alignItems: "center",
							backgroundColor: "#F2F3F7",
							borderRadius: 15,
							paddingVertical: 11,
							marginRight: 8,
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
							width: 89,
							alignItems: "center",
							backgroundColor: "#F2F3F7",
							borderRadius: 15,
							paddingVertical: 11,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"See All..."}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}