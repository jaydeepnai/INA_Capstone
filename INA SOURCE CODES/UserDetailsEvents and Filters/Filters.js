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
					paddingTop: 17,
					paddingBottom: 299,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 16,
						marginHorizontal: 9,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 25,
							height: 25,
							marginRight: 18,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							fontWeight: "bold",
						}}>
						{"Filters"}
					</Text>
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							fontWeight: "bold",
							marginRight: 14,
						}}>
						{"Clear All"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 25,
							height: 25,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#f5f5f5",
						borderRadius: 10,
						paddingVertical: 12,
						paddingHorizontal: 8,
						marginBottom: 49,
						marginHorizontal: 18,
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
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							flex: 1,
						}}>
						{"Search an NGO"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 25,
						fontWeight: "bold",
						marginBottom: 15,
						marginLeft: 10,
					}}>
					{"Ratings"}
				</Text>
				<ScrollView 
					horizontal 
					style = {{
						flexDirection: "row",
						marginBottom: 25,
						marginHorizontal: 30,
					}}>
					<View 
						style = {{
							width: 80,
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							padding: 5,
							marginRight: 8,
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
								fontWeight: "bold",
								flex: 1,
							}}>
							{"4.5"}
						</Text>
					</View>
					<View 
						style = {{
							width: 80,
							alignSelf: "flex-start",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 5,
							marginRight: 8,
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
								fontWeight: "bold",
							}}>
							{"4.5"}
						</Text>
					</View>
					<View 
						style = {{
							width: 80,
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							padding: 5,
							marginRight: 8,
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
								fontWeight: "bold",
								flex: 1,
							}}>
							{"4.5"}
						</Text>
					</View>
					<View 
						style = {{
							width: 80,
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							padding: 5,
							marginRight: 7,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 20,
								marginRight: 13,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								fontWeight: "bold",
								flex: 1,
							}}>
							{"4.5"}
						</Text>
					</View>
					<View 
						style = {{
							width: 80,
							alignSelf: "flex-start",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingHorizontal: 6,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 20,
								marginTop: 5,
							}}
						/>
					</View>
				</ScrollView>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 25,
						fontWeight: "bold",
						marginBottom: 21,
						marginLeft: 10,
					}}>
					{"NGO Types"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 15,
						marginHorizontal: 10,
					}}>
					<View 
						style = {{
							width: 84,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 12,
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
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 12,
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
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 12,
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
						marginBottom: 29,
						marginHorizontal: 30,
					}}>
					<View 
						style = {{
							width: 101,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 12,
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
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 12,
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
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 12,
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
				<Text 
					style = {{
						color: "#000000",
						fontSize: 25,
						fontWeight: "bold",
						marginBottom: 15,
						marginLeft: 11,
					}}>
					{"Skills"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 15,
						marginHorizontal: 30,
					}}>
					<View 
						style = {{
							width: 84,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Skill 1"}
						</Text>
					</View>
					<View 
						style = {{
							width: 84,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Skill 1"}
						</Text>
					</View>
					<View 
						style = {{
							width: 84,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Skill 1"}
						</Text>
					</View>
					<View 
						style = {{
							width: 84,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Skill 1"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 28,
						marginHorizontal: 28,
					}}>
					<View 
						style = {{
							width: 84,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
							marginRight: 10,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Skill 1"}
						</Text>
					</View>
					<View 
						style = {{
							width: 84,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
							marginRight: 10,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Skill 1"}
						</Text>
					</View>
					<View 
						style = {{
							width: 89,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
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
				<Text 
					style = {{
						color: "#000000",
						fontSize: 25,
						fontWeight: "bold",
						marginBottom: 10,
						marginLeft: 10,
					}}>
					{"Language Knows"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 23,
						marginHorizontal: 34,
					}}>
					<View 
						style = {{
							width: 66,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
							marginRight: 11,
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
							width: 84,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
							marginRight: 17,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Gujarati"}
						</Text>
					</View>
					<View 
						style = {{
							width: 84,
							alignItems: "center",
							backgroundColor: "#f5f5f5",
							borderRadius: 15,
							paddingVertical: 11,
							marginRight: 7,
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
							width: 84,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Franch"}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 25,
						fontWeight: "bold",
						marginBottom: 21,
						marginLeft: 10,
					}}>
					{"Attend no. of Event joined"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 15,
						marginHorizontal: 39,
					}}>
					<View 
						style = {{
							width: 50,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 9,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 25,
								fontWeight: "bold",
							}}>
							{"1 - 5"}
						</Text>
					</View>
					<View 
						style = {{
							width: 50,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 9,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 25,
							}}>
							{"5-10"}
						</Text>
					</View>
					<View 
						style = {{
							width: 50,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 9,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 25,
							}}>
							{"10-11"}
						</Text>
					</View>
					<View 
						style = {{
							width: 50,
						}}>
						<View 
							style = {{
								backgroundColor: "#f2f3f7",
								borderRadius: 15,
							}}>
						</View>
						<Text 
							style = {{
								position: "absolute",
								bottom: 6,
								left: -1,
								color: "#000000",
								fontSize: 25,
							}}>
							{"11-20"}
						</Text>
					</View>
					<View 
						style = {{
							width: 72,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 9,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 25,
							}}>
							{"20-40"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 23,
						marginHorizontal: 39,
					}}>
					<View 
						style = {{
							width: 127,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 12,
							marginRight: 18,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"less than 5"}
						</Text>
					</View>
					<View 
						style = {{
							width: 127,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 12,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"more than 50"}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 25,
						fontWeight: "bold",
						marginBottom: 21,
						marginLeft: 10,
					}}>
					{"Attend no. of Services joined"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 15,
						marginHorizontal: 39,
					}}>
					<View 
						style = {{
							width: 50,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 9,
							marginRight: 15,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 25,
								fontWeight: "bold",
							}}>
							{"1"}
						</Text>
					</View>
					<View 
						style = {{
							width: 50,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 9,
							marginRight: 12,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 25,
								fontWeight: "bold",
							}}>
							{"2"}
						</Text>
					</View>
					<View 
						style = {{
							width: 50,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 9,
							marginRight: 17,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 25,
								fontWeight: "bold",
							}}>
							{"3"}
						</Text>
					</View>
					<View 
						style = {{
							width: 50,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 9,
							marginRight: 12,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 25,
								fontWeight: "bold",
							}}>
							{"4"}
						</Text>
					</View>
					<View 
						style = {{
							width: 50,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 9,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 25,
								fontWeight: "bold",
							}}>
							{"5"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 23,
						marginHorizontal: 39,
					}}>
					<View 
						style = {{
							width: 127,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 12,
							marginRight: 18,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"more than 5"}
						</Text>
					</View>
					<View 
						style = {{
							width: 127,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 12,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"more than 10"}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 25,
						fontWeight: "bold",
						marginBottom: 6,
						marginLeft: 11,
					}}>
					{"Gender"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 8,
						marginHorizontal: 39,
					}}>
					<View 
						style = {{
							width: 127,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
							marginRight: 18,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Male"}
						</Text>
					</View>
					<View 
						style = {{
							width: 127,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Female"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						width: 127,
						height: 40,
						alignItems: "center",
						backgroundColor: "#f2f3f7",
						borderRadius: 15,
						paddingVertical: 11,
						marginBottom: 18,
						marginHorizontal: 39,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
						}}>
						{"Other"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 25,
						fontWeight: "bold",
						marginBottom: 9,
						marginLeft: 10,
					}}>
					{"Account Status"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginHorizontal: 39,
					}}>
					<View 
						style = {{
							width: 127,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
							marginRight: 18,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Active"}
						</Text>
					</View>
					<View 
						style = {{
							width: 127,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 15,
							paddingVertical: 11,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"Inactive"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
