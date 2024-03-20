import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput} from "react-native";
import { responsiveMargin } from "../../../lib/Validation/RelativeValues";

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
					paddingTop: 6,
					paddingBottom: 364,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 39,
						marginHorizontal: 30,
					}}>
					{/* <Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 33,
							height: 33,
							marginRight: 92,
							marginTop:35,
						}}
					/> */}
					
					{/* <Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"HOME"}
					</Text> */}
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					{/* <Image
						source={require("../../assets/NGO/post.jpg")}
						resizeMode = {"stretch"}
						style = {{
							width: 33,
							height: 31,
							borderRadius:100,
						}}
					/> */}
				</View>
				{/* <Image
					source={require("../../assets/NGO/post.jpg")}
					resizeMode = {"stretch"}
					style = {{
						borderRadius: 10,
						height: 200,
						width:300,
						marginBottom: 18,
						marginHorizontal: 31,
						marginRight:responsiveMargin(100),
					}}
				/> */}
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 6,
						marginHorizontal: 23,
					}}>
					{/* <Image
						source={require("../../assets/NGO/heart.png")}  
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
							marginRight: 11,
						}}
					/> */}
					{/* <Image
						source={require("../../assets/NGO/comments.png")}  
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 20,
							marginRight: 11,
						}}
					/> */}
					{/* <Image
						source={require("../../assets/NGO/share.png")} 
						resizeMode = {"stretch"}
						style = {{
							width: 20,
							height: 22,
						}}
					/> */}
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					{/* <Image
						source={require("../../assets/NGO/save.png")} 
						resizeMode = {"stretch"}
						style = {{
							width: 25,
							height: 25,
						}}
					/> */}
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 9,
						marginHorizontal: 35,
					}}>
					{"Study is more important in our life📝🖍"}
				</Text>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 9,
						marginHorizontal: 37,
					}}>
					{"398 likes"}
				</Text>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 13,
						marginHorizontal: 35,
					}}>
					{"View all 100 comments"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#D9D9D9",
						marginBottom: 14,
						marginHorizontal: 2,
					}}>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 35,
						marginHorizontal: 12,
					}}>
					{"Comments"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 4,
						marginHorizontal: 13,
					}}>
					{/* <Image
						source={require("../../assets/NGO/me.jpg")}  
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
							marginRight: 11,
							borderRadius:100,
						}}
					/> */}
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									marginRight: 9,
								}}>
								{"Narendra modi "}
							</Text>
							{/* <Image
								source={require("../../assets/NGO/correct.png")} 
								resizeMode = {"stretch"}
								style = {{
									width: 15,
									height: 15,
									marginRight: 11,
								}}
							/> */}
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									flex: 1,
								}}>
								{"23 m"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"Great Work boys ❤❤✔"}
						</Text>
					</View>
					<View 
						style = {{
							width: 20,
						}}>
						{/* <Image
							source={require("../../assets/NGO/like.png")} 
							resizeMode = {"stretch"}
							style = {{
								height: 17,
								marginBottom: 6,
								marginHorizontal: 2,
								
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"390"}
						</Text> */}
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 13,
						marginBottom: 12,
						marginHorizontal: 66,
					}}>
					{"Reply"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 29,
						marginHorizontal: 65,
					}}>
					<View 
						style = {{
							width: 49,
							backgroundColor: "#000000",
							marginRight: 10,
						}}>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							flex: 1,
						}}>
						{"View 100 replies"}
					</Text>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 4,
						marginHorizontal: 13,
					}}>
					{/* <Image
						source={require("../../assets/NGO/me.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
							marginRight: 11,
							borderRadius:100
						}}
					/> */}
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									marginRight: 9,
								}}>
								{"Narendra modi "}
							</Text>
							{/* <Image
								source={require("../../assets/NGO/correct.png")} 
								resizeMode = {"stretch"}
								style = {{
									width: 15,
									height: 15,
									marginRight: 11,
								}}
							/> */}
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									flex: 1,
								}}>
								{"23 m"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"Great Work boys ❤❤✔"}
						</Text>
					</View>
					<View 
						style = {{
							width: 20,
						}}>
						{/* <Image
							source={require("../../assets/NGO/like.png")} 
							resizeMode = {"stretch"}
							style = {{
								height: 17,
								marginBottom: 6,
								marginHorizontal: 2,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"390"}
						</Text> */}
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 13,
						marginBottom: 12,
						marginHorizontal: 66,
					}}>
					{"Reply"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 33,
						marginHorizontal: 65,
					}}>
					<View 
						style = {{
							width: 49,
							backgroundColor: "#000000",
							marginRight: 10,
						}}>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							flex: 1,
						}}>
						{"View 100 replies"}
					</Text>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 4,
						marginHorizontal: 13,
					}}>
					{/* <Image
						source={require("../../assets/NGO/me.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
							marginRight: 11,
							borderRadius:100
						}}
					/> */}
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									marginRight: 9,
								}}>
								{"Narendra modi "}
							</Text>
							{/* <Image
								source={require("../../assets/NGO/correct.png")} 
								resizeMode = {"stretch"}
								style = {{
									width: 15,
									height: 15,
									marginRight: 11,
								}}
							/> */}
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									flex: 1,
								}}>
								{"23 m"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"Great Work boys ❤❤✔"}
						</Text>
					</View>
					<View 
						style = {{
							width: 20,
						}}>
						{/* <Image
							source={require("../../assets/NGO/like.png")} 
							resizeMode = {"stretch"}
							style = {{
								height: 17,
								marginBottom: 6,
								marginHorizontal: 2,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"390"}
						</Text> */}
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 13,
						marginBottom: 12,
						marginHorizontal: 66,
					}}>
					{"Reply"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 29,
						marginHorizontal: 65,
					}}>
					<View 
						style = {{
							width: 49,
							backgroundColor: "#000000",
							marginRight: 10,
						}}>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							flex: 1,
						}}>
						{"View 100 replies"}
					</Text>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 4,
						marginHorizontal: 13,
					}}>
					{/* <Image
						source={require("../../assets/NGO/me.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
							marginRight: 11,
							borderRadius:100
						}}
					/> */}
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									marginRight: 9,
								}}>
								{"Narendra modi "}
							</Text>
							{/* <Image
								source={require("../../assets/NGO/correct.png")} 
								resizeMode = {"stretch"}
								style = {{
									width: 15,
									height: 15,
									marginRight: 11,
								}}
							/> */}
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									flex: 1,
								}}>
								{"23 m"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"Great Work boys ❤❤✔"}
						</Text>
					</View>
					<View 
						style = {{
							width: 20,
						}}>
						{/* <Image
							source={require("../../assets/NGO/like.png")} 
							resizeMode = {"stretch"}
							style = {{
								height: 17,
								marginBottom: 6,
								marginHorizontal: 2,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"390"}
						</Text> */}
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 13,
						marginBottom: 12,
						marginHorizontal: 66,
					}}>
					{"Reply"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 28,
						marginHorizontal: 65,
					}}>
					<View 
						style = {{
							width: 49,
							backgroundColor: "#000000",
							marginRight: 10,
						}}>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							flex: 1,
						}}>
						{"View 100 replies"}
					</Text>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 4,
						marginHorizontal: 13,
					}}>
					{/* <Image
						source={require("../../assets/NGO/me.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
							marginRight: 11,
							borderRadius:100
						}}
					/> */}
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									marginRight: 9,
								}}>
								{"Narendra modi "}
							</Text>
							{/* <Image
								source={require("../../assets/NGO/correct.png")} 
								resizeMode = {"stretch"}
								style = {{
									width: 15,
									height: 15,
									marginRight: 11,
								}}
							/> */}
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									flex: 1,
								}}>
								{"23 m"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"Great Work boys ❤❤✔"}
						</Text>
					</View>
					<View 
						style = {{
							width: 20,
						}}>
						{/* <Image
							source={require("../../assets/NGO/like.png")} 
							resizeMode = {"stretch"}
							style = {{
								height: 17,
								marginBottom: 6,
								marginHorizontal: 2,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"390"}
						</Text> */}
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 13,
						marginBottom: 12,
						marginHorizontal: 66,
					}}>
					{"Reply"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 29,
						marginHorizontal: 65,
					}}>
					<View 
						style = {{
							width: 49,
							backgroundColor: "#000000",
							marginRight: 10,
						}}>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							flex: 1,
						}}>
						{"View 100 replies"}
					</Text>
				</View>


				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 4,
						marginHorizontal: 13,
					}}>
					{/* <Image
						source={require("../../assets/NGO/me.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
							marginRight: 11,
							borderRadius:100
						}}
					/> */}
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									marginRight: 9,
								}}>
								{"Narendra modi "}
							</Text>
							{/* <Image
								source={require("../../assets/NGO/correct.png")} 
								resizeMode = {"stretch"}
								style = {{
									width: 15,
									height: 15,
									marginRight: 11,
								}}
							/> */}
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									flex: 1,
								}}>
								{"23 m"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"Great Work boys ❤❤✔"}
						</Text>
					</View>
					<View 
						style = {{
							width: 20,
						}}>
						{/* <Image
							source={require("../../assets/NGO/like.png")} 
							resizeMode = {"stretch"}
							style = {{
								height: 17,
								marginBottom: 6,
								marginHorizontal: 2,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"390"}
						</Text> */}
					</View>
				</View>

				<Text 
					style = {{
						color: "#000000",
						fontSize: 13,
						marginBottom: 12,
						marginHorizontal: 66,
					}}>
					{"Reply"}
				</Text>


				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 29,
						marginHorizontal: 65,
					}}>
					<View 
						style = {{
							width: 49,
							backgroundColor: "#000000",
							marginRight: 10,
						}}>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							flex: 1,
						}}>
						{"View 100 replies"}
					</Text>
				</View>

				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 4,
						marginHorizontal: 13,
					}}>
					{/* <Image
						source={require("../../assets/NGO/me.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
							marginRight: 11,
							borderRadius:100
						}}
					/> */}
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 4,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									marginRight: 9,
								}}>
								{"Narendra modi "}
							</Text>
							{/* <Image
								source={require("../../assets/NGO/correct.png")} 
								resizeMode = {"stretch"}
								style = {{
									width: 15,
									height: 15,
									marginRight: 11,
								}}
							/> */}
							<Text 
								style = {{
									color: "#000000",
									fontSize: 13,
									flex: 1,
								}}>
								{"23 m"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"Great Work boys ❤❤✔"}
						</Text>
					</View>
					<View 
						style = {{
							width: 20,
						}}>
						{/* <Image
							source={require("../../assets/NGO/like.png")}  
							resizeMode = {"stretch"}
							style = {{
								height: 17,
								marginBottom: 6,
								marginHorizontal: 2,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 13,
							}}>
							{"390"}
						</Text> */}
					</View>
				</View>

				<Text 
					style = {{
						color: "#000000",
						fontSize: 13,
						marginBottom: 12,
						marginHorizontal: 66,
					}}>
					{"Reply"}
				</Text>


				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 15,
						marginHorizontal: 65,
					}}>
					<View 
						style = {{
							width: 49,
							backgroundColor: "#000000",
							marginRight: 10,
						}}>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							flex: 1,
						}}>
						{"View 100 replies"}
					</Text>
				</View>

				<Text 
					style = {{
						color: "#000000",
						fontSize: 16,
						marginBottom: 28,
						marginHorizontal: 24,
					}}>
					{"See more..."}
				</Text>

				<View 
					style = {{
						backgroundColor: "#D9D9D9",
						marginBottom: 21,
					}}>
				</View>

				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginHorizontal: 14,
					}}>
					{/* <Image
						source={require("../../assets/NGO/me.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							width: 40,
							height: 40,
							marginRight: 15,
							borderRadius:100
						}}
					/> */}

							<TextInput
							 	style={styles.input}
        						placeholder="Add a Comment..."
        						keyboardType="web-search"
							/>
								{/* const styles = StyleSheet.create({
									input: {
									  height: 40,
									  borderColor: 'gray',
									  borderWidth: 1,
									  paddingHorizontal: 10,
									  marginBottom: 10,
									  borderRadius: 5,
									}
								  }); */}
      						
							
				</View>

			</ScrollView>
		</SafeAreaView>
		
    )
}