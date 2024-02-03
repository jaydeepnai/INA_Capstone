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
					paddingTop: 14,
					paddingBottom: 81,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 46,
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
						{"Borrow list"}
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
						alignItems: "center",
						marginBottom: 31,
						marginHorizontal: 12,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 16,
						}}
					/>
					<View 
						style = {{
							flex: 1,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 8,
							}}>
							{"Aniket Bhatti"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"issued book by 10 Jan to 15 Jan"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 42,
						marginHorizontal: 12,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 14,
						}}
					/>
					<View 
						style = {{
							flex: 1,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 8,
								marginLeft: 2,
							}}>
							{"Naishal Modi"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"issued book by 15 Jan to 20 Jan"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 42,
						marginHorizontal: 12,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 15,
						}}
					/>
					<View 
						style = {{
							flex: 1,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 8,
							}}>
							{"Jaydeep Nai"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"issued book by 5 Jan to 15 Jan"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						marginBottom: 42,
						marginHorizontal: 12,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 16,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							alignSelf: "flex-start",
							marginTop: 6,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 8,
							}}>
							{"Aniket Bhatti"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"issued book by 10 Jan to 15 Jan"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						marginBottom: 42,
						marginHorizontal: 12,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 16,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							alignSelf: "flex-start",
							marginTop: 6,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 8,
							}}>
							{"Aniket Bhatti"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"issued book by 10 Jan to 15 Jan"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						marginBottom: 42,
						marginHorizontal: 12,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 16,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							alignSelf: "flex-start",
							marginTop: 6,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 8,
							}}>
							{"Aniket Bhatti"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"issued book by 10 Jan to 15 Jan"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						marginHorizontal: 12,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 35,
							width: 70,
							height: 70,
							marginRight: 16,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							alignSelf: "flex-start",
							marginTop: 6,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 8,
							}}>
							{"Aniket Bhatti"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
							}}>
							{"issued book by 10 Jan to 15 Jan"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
