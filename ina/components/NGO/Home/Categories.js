import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Categories = () => {
    return ( 
            <View>  
                <View 
					style = {{
						marginBottom: 22,
					}}>
					<View 
						style = {{
							width: 430,
							height: 112,
							flexDirection: "row",
							justifyContent: "space-between",
							paddingTop: 38,
							paddingBottom: 6,
							paddingLeft: 16,
							paddingRight: 70,
						}}>
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
								source = {require("../../../assets/NGO/me.jpg")} 
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
						fontSize: 20,
						marginBottom: 40,
						marginHorizontal: 31,
					}}>
                </Text>
            </View>
    )}
    export default Categories