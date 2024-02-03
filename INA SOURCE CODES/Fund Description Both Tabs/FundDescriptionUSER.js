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
					paddingBottom: 209,
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
						marginBottom: 19,
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
				<Text 
					style = {{
						color: "#000000",
						fontSize: 22,
						fontWeight: "bold",
						marginBottom: 17,
						marginLeft: 18,
					}}>
					{"DOCUMENTS"}
				</Text>
				<ScrollView 
					horizontal 
					style = {{
						flexDirection: "row",
						marginHorizontal: 18,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 180,
							height: 299,
							marginRight: 17,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 180,
							height: 299,
							marginRight: 17,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 180,
							height: 299,
						}}
					/>
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
		
    )
}
