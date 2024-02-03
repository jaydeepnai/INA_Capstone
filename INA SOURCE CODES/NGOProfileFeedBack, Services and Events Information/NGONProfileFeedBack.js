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
					paddingBottom: 79,
				}}>
				<View 
					style = {{
						marginBottom: 25,
					}}>
					<View 
						style = {{
							marginBottom: 17,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								borderRadius: 15,
								height: 281,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								bottom: -52,
								left: 43,
								width: 115,
								height: 115,
							}}
						/>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 32,
							fontWeight: "bold",
							marginBottom: 2,
							marginLeft: 21,
						}}>
						{"SafePaws NGO"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							marginLeft: 27,
						}}>
						{"“Caring for Paws, Changing Lives”"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 32,
						marginBottom: 30,
						marginLeft: 33,
					}}>
					{"Reviews and Comments"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#ffffff",
						borderRadius: 15,
						paddingVertical: 18,
						marginBottom: 27,
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
				<View 
					style = {{
						backgroundColor: "#ffffff",
						borderRadius: 15,
						paddingVertical: 18,
						marginBottom: 27,
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
				<View 
					style = {{
						width: 390,
						height: 214,
						backgroundColor: "#ffffff",
						borderRadius: 15,
						paddingVertical: 18,
						marginBottom: 27,
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
						width: 390,
						height: 214,
						backgroundColor: "#ffffff",
						borderRadius: 15,
						paddingVertical: 18,
						marginBottom: 34,
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
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginLeft: 27,
					}}>
					{"See more..."}
				</Text>
			</ScrollView>
		</SafeAreaView>
		
    )
}
