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
					paddingBottom: 58,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 27,
						marginHorizontal: 22,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 60,
							height: 60,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 28,
							fontWeight: "bold",
						}}>
						{"Resource available"}
					</Text>
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
						marginBottom: 11,
						marginHorizontal: 17,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 15,
							width: 390,
							height: 177,
						}}
					/>
					<View 
						style = {{
							alignSelf: "flex-start",
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								top: 0,
								left: 0,
								width: 100,
								height: 100,
							}}
						/>
						<View 
							style = {{
								position: "absolute",
								top: 0,
								left: 0,
								width: 162,
								height: 42,
								backgroundColor: "#fff730",
								borderRadius: 15,
								paddingHorizontal: 19,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 20,
									marginTop: 15,
								}}>
								{"Borrow list   20"}
							</Text>
						</View>
					</View>
					<View 
						style = {{
							flex: 1,
							alignSelf: "flex-start",
							marginTop: 189,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 32,
								fontWeight: "bold",
								marginBottom: 13,
								marginLeft: 3,
							}}>
							{"Cloth"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
							}}>
							{"cloth type"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						backgroundColor: "#d2f694",
						borderRadius: 15,
						paddingVertical: 13,
						paddingHorizontal: 10,
						marginBottom: 29,
						marginHorizontal: 28,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 12,
						}}>
						<View 
							style = {{
								width: 65,
								alignItems: "center",
								backgroundColor: "#30fff2",
								borderRadius: 20,
								paddingVertical: 6,
								marginRight: 12,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 11,
									fontWeight: "bold",
								}}>
								{"Formal"}
							</Text>
						</View>
						<View 
							style = {{
								width: 65,
								alignItems: "center",
								backgroundColor: "#ffffff",
								borderRadius: 20,
								paddingVertical: 6,
								marginRight: 12,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 11,
									fontWeight: "bold",
								}}>
								{"Casual"}
							</Text>
						</View>
						<View 
							style = {{
								width: 65,
								alignItems: "center",
								backgroundColor: "#ffffff",
								borderRadius: 20,
								paddingVertical: 8,
								marginRight: 12,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 11,
									fontWeight: "bold",
								}}>
								{"for Merriage"}
							</Text>
						</View>
						<View 
							style = {{
								width: 71,
								alignItems: "center",
								backgroundColor: "#ffffff",
								borderRadius: 20,
								paddingVertical: 6,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 11,
									fontWeight: "bold",
								}}>
								{"Party ware"}
							</Text>
						</View>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<View 
							style = {{
								width: 75,
								alignItems: "center",
								backgroundColor: "#ffffff",
								borderRadius: 20,
								paddingVertical: 7,
								marginRight: 14,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 11,
									fontWeight: "bold",
								}}>
								{"Kurta-pajama"}
							</Text>
						</View>
						<View 
							style = {{
								width: 65,
								backgroundColor: "#ffffff",
								borderRadius: 20,
								paddingVertical: 7,
								paddingHorizontal: 4,
								marginRight: 14,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 11,
									fontWeight: "bold",
								}}>
								{"Pant-Shirt"}
							</Text>
						</View>
						<View 
							style = {{
								width: 51,
								alignItems: "center",
								backgroundColor: "#ffffff",
								borderRadius: 20,
								paddingVertical: 8,
								marginRight: 14,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 11,
									fontWeight: "bold",
								}}>
								{"Blezzer"}
							</Text>
						</View>
						<View 
							style = {{
								width: 80,
								alignItems: "center",
								backgroundColor: "#ffffff",
								borderRadius: 20,
								paddingVertical: 7,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 11,
									fontWeight: "bold",
								}}>
								{"Chaniya choli"}
							</Text>
						</View>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 14,
						marginLeft: 23,
					}}>
					{"Reserved date"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#d2f694",
						borderRadius: 15,
						paddingVertical: 23,
						paddingHorizontal: 15,
						marginBottom: 16,
						marginHorizontal: 28,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"10th Jan - 20th Jan "}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 16,
						marginLeft: 23,
					}}>
					{"Available date"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#d2f694",
						borderRadius: 15,
						paddingVertical: 19,
						paddingHorizontal: 7,
						marginBottom: 29,
						marginHorizontal: 26,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"20th Jan - 25th Jan "}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 17,
						marginLeft: 30,
					}}>
					{"Timing"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#d2f694",
						borderRadius: 15,
						paddingVertical: 20,
						paddingHorizontal: 7,
						marginBottom: 47,
						marginHorizontal: 26,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"10am - 6pm"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 24,
						fontWeight: "bold",
						marginBottom: 20,
						marginLeft: 31,
					}}>
					{"Reivew"}
				</Text>
				<View 
					style = {{
						width: 390,
						height: 214,
						backgroundColor: "#ffffff",
						borderRadius: 15,
						paddingVertical: 18,
						marginBottom: 22,
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
							marginBottom: 110,
							marginHorizontal: 16,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 45,
								height: 45,
								marginTop: 2,
								marginRight: 17,
							}}
						/>
						<View 
							style = {{
								width: 98,
								alignSelf: "flex-start",
								marginRight: 2,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
									fontWeight: "bold",
									marginBottom: 9,
								}}>
								{"Naishal Modi"}
							</Text>
							<View 
								style = {{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
								}}>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										width: 20,
										height: 20,
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
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										width: 20,
										height: 20,
									}}
								/>
							</View>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 17,
								height: 20,
								marginTop: 25,
								marginRight: 17,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 20,
								marginTop: 25,
							}}
						/>
						<View 
							style = {{
								flex: 1,
							}}>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginTop: 1,
							}}>
							{"2 days Ago"}
						</Text>
					</View>
					<View 
						style = {{
							width: 30,
							height: 30,
							marginHorizontal: 26,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 30,
							}}
						/>
						<Text 
							style = {{
								position: "absolute",
								top: -86,
								left: -318,
								color: "#000000",
								fontSize: 16,
								width: 352,
							}}>
							{"I used one plus buds previously and i was not happy with the product as it gave painin my ears after some use.Well coming to nord 2 buds i was skeptical whether to buyor not."}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						backgroundColor: "#ffffff",
						borderRadius: 15,
						paddingVertical: 18,
						marginBottom: 29,
						marginHorizontal: 20,
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
							marginBottom: 110,
							marginHorizontal: 16,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 45,
								height: 45,
								marginTop: 2,
								marginRight: 17,
							}}
						/>
						<View 
							style = {{
								width: 98,
								alignSelf: "flex-start",
								marginRight: 2,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 16,
									fontWeight: "bold",
									marginBottom: 9,
								}}>
								{"Naishal Modi"}
							</Text>
							<View 
								style = {{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
								}}>
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										width: 20,
										height: 20,
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
								<Image
									source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style = {{
										width: 20,
										height: 20,
									}}
								/>
							</View>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 17,
								height: 20,
								marginTop: 25,
								marginRight: 17,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 20,
								marginTop: 25,
							}}
						/>
						<View 
							style = {{
								flex: 1,
							}}>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginTop: 1,
							}}>
							{"2 days Ago"}
						</Text>
					</View>
					<View 
						style = {{
							width: 30,
							height: 30,
							marginHorizontal: 26,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 30,
							}}
						/>
						<Text 
							style = {{
								position: "absolute",
								top: -86,
								left: -318,
								color: "#000000",
								fontSize: 16,
								width: 352,
							}}>
							{"I used one plus buds previously and i was not happy with the product as it gave painin my ears after some use.Well coming to nord 2 buds i was skeptical whether to buyor not."}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginLeft: 35,
					}}>
					{"See more..."}
				</Text>
			</ScrollView>
		</SafeAreaView>
		
    )
}
