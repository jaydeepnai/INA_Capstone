import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StatusBar, } from "react-native";

export default DonationList = (props) => {
    
    
    return (
        <SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
                <StatusBar backgroundColor={"white"}></StatusBar>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#FFFFFF",
					paddingTop: 15,
					paddingBottom: 20,
		    		}}>
				<View 
					style = {{
						marginBottom: 20,
						marginHorizontal: 20,
                        overflow: "hidden",
					}}>
					<View 
						style = {{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingTop: 18,
							paddingBottom: 29,
							paddingRight: 23,
                            overflow: "hidden",
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 14,
								marginLeft: 28,
								width: 313,
							}}>
							{"Hey User,\nYou recently donated ₹5000 in INA"}
						</Text>
						<View 
							style = {{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 15,
								marginLeft: 26,
							}}>
							<View 
								style = {{
									flex: 1,
									marginRight: 4,
								}}>
								<Text 
									style = {{
										color: "#000000",
										fontSize: 20,
										marginBottom: 11,
									}}>
									{"Services: ₹50,000"}
								</Text>
								<Text 
									style = {{
										color: "#000000",
										fontSize: 20,
									}}>
									{"Events: ₹35,000"}
								</Text>
							</View>
							<Image
								source = {require("../../../assets/images/Donation_List/CharityImage.png")}
								resizeMode = {"stretch"}
								style = {{
									width: 80,
									height: 80,
								}}
							/>
						</View>
                        {/* <View */}
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
								marginLeft: 218,
								width: 123,
							}}>
							Total Donation
                        
						</Text>
                        <Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginLeft: 218,
								width: 123,
							}}>
							65,000
                        
						</Text>
					</View>
					<Image
						source = {require("../../../assets/images/Donation_List/donation.png")}
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: -11,
							left: -6,
							width: 100,
							height: 100,
                            borderBottomLeftRadius: 10
						}}
					/>
				</View>
                <View style={{
                    marginBottom:70
                }}>
                <Text style={{
                    fontSize:25,
                    fontWeight: "bold",
                    paddingLeft:20,
                    paddingBottom:20
                }}>
                    Donation List
                </Text>
				<View 
					style = {{
						marginHorizontal: 15,
                        marginBottom: 10,
					}}
                    >
					<View 
						style = {{
							backgroundColor: "#D2F694",
							borderRadius: 15,
							paddingTop: 20,
							paddingBottom: 20,
							paddingLeft: 75,
                            marginLeft:55
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 6,
							}}>
							{"Donation 1"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
								marginBottom: 7,
							}}>
							{"₹5000 from UPI in INA"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
							}}>
							{"12/08/2023"}
						</Text>
					</View>
					<Image
						source = {require("../../../assets/animals.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: 0,
							left: 0,
							borderRadius: 100,
							width: 120,
							height: 120,
						}}
					/>
				</View>
                <View 
					style = {{
						marginHorizontal: 15,
                        marginBottom: 10,
					}}
                    >
					<View 
						style = {{
							backgroundColor: "#D2F694",
							borderRadius: 15,
							paddingTop: 20,
							paddingBottom: 20,
							paddingLeft: 75,
                            marginLeft:55
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 6,
							}}>
							{"Donation 1"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
								marginBottom: 7,
							}}>
							{"₹5000 from UPI in INA"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
							}}>
							{"12/08/2023"}
						</Text>
					</View>
					<Image
						source = {require("../../../assets/animals.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: 0,
							left: 0,
							borderRadius: 100,
							width: 120,
							height: 120,
						}}
					/>
				</View>
                <View 
					style = {{
						marginHorizontal: 15,
                        marginBottom: 10,
					}}
                    >
					<View 
						style = {{
							backgroundColor: "#D2F694",
							borderRadius: 15,
							paddingTop: 20,
							paddingBottom: 20,
							paddingLeft: 75,
                            marginLeft:55
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 6,
							}}>
							{"Donation 1"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
								marginBottom: 7,
							}}>
							{"₹5000 from UPI in INA"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
							}}>
							{"12/08/2023"}
						</Text>
					</View>
					<Image
						source = {require("../../../assets/animals.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: 0,
							left: 0,
							borderRadius: 100,
							width: 120,
							height: 120,
						}}
					/>
				</View>
                <View 
					style = {{
						marginHorizontal: 15,
                        marginBottom: 10,
					}}
                    >
					<View 
						style = {{
							backgroundColor: "#D2F694",
							borderRadius: 15,
							paddingTop: 20,
							paddingBottom: 20,
							paddingLeft: 75,
                            marginLeft:55
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 6,
							}}>
							{"Donation 1"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
								marginBottom: 7,
							}}>
							{"₹5000 from UPI in INA"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
							}}>
							{"12/08/2023"}
						</Text>
					</View>
					<Image
						source = {require("../../../assets/animals.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: 0,
							left: 0,
							borderRadius: 100,
							width: 120,
							height: 120,
						}}
					/>
				</View>
                <View 
					style = {{
						marginHorizontal: 15,
                        marginBottom: 10,
					}}
                    >
					<View 
						style = {{
							backgroundColor: "#D2F694",
							borderRadius: 15,
							paddingTop: 20,
							paddingBottom: 20,
							paddingLeft: 75,
                            marginLeft:55
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 20,
								marginBottom: 6,
							}}>
							{"Donation 1"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
								marginBottom: 7,
							}}>
							{"₹5000 from UPI in INA"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
							}}>
							{"12/08/2023"}
						</Text>
					</View>
					<Image
						source = {require("../../../assets/animals.jpg")} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: 0,
							left: 0,
							borderRadius: 100,
							width: 120,
							height: 120,
						}}
					/>
				</View>
                </View>
			</ScrollView>
		</SafeAreaView>
		
    )
}