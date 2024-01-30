import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StatusBar, } from "react-native";
import { getFontSize, responsiveMargin } from "../../../lib/Validation/RelativeValues";

export default DonationList = (props) => {


	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<StatusBar backgroundColor={"white"}></StatusBar>
			<ScrollView
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
					paddingTop: 15,
					paddingBottom: 20,
				}}>
				<View
					style={{
						marginBottom: 20,
						marginHorizontal: 20,
						overflow: "hidden",
					}}>
					<View
						style={{
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingTop: 18,
							paddingBottom: 29,
							paddingRight: 23,
							overflow: "hidden",
						}}>
						<Text
							style={{
								color: "#000000",
								fontSize: getFontSize(14),
								marginBottom: responsiveMargin(2),
								marginLeft: 28,
							}}>
							{"Hey User,\nYou recently donated ₹5000 in INA"}
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: responsiveMargin(2),
								marginLeft: 26,
							}}>
							<View
								style={{
									flex: 1,
									marginRight: responsiveMargin(2),
								}}>
								<Text
									style={{
										color: "#000000",
										fontSize: getFontSize(14),
										marginBottom: responsiveMargin(1),
									}}>
									{"Services: ₹50,000"}
								</Text>
								<Text
									style={{
										color: "#000000",
										fontSize: getFontSize(14),
									}}>
									{"Events: ₹35,000"}
								</Text>
							</View>
						</View>

						<View style={{
							flex: 1,
							flexDirection: "row"
						}}>

							<Image
								source={require("../../../assets/images/Donation_List/CharityImage.png")}
								resizeMode={"stretch"}
								style={{
									width: 60,
									height: 60,
									marginLeft:responsiveMargin(40)
								}}
							/>
							<View style={{
								marginTop:responsiveMargin(4)
							}}>
								<Text
									style={{
										color: "#000000",
										fontSize: getFontSize(12),
										marginLeft: responsiveMargin(4),
									}}>
									Total Donation

								</Text>
								<Text
									style={{
										color: "#000000",
										fontSize: getFontSize(14),
										marginLeft: responsiveMargin(4),
									}}>
									65,000

								</Text>
							</View>
						</View>

					</View>
				</View>



				<View style={{
					marginBottom: 70
				}}>
					<Text style={{
						fontSize: 25,
						fontWeight: "bold",
						paddingLeft: 20,
						paddingBottom: 20
					}}>
						Donation List
					</Text>
					<View
						style={{
							marginHorizontal: 15,
							marginBottom: 10,
						}}
					>
						<View
							style={{
								backgroundColor: "#D2F694",
								borderRadius: 15,
								paddingTop: 20,
								paddingBottom: 20,
								paddingLeft: 75,
								marginLeft: 55
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									marginBottom: 6,
								}}>
								{"Donation 1"}
							</Text>
							<Text
								style={{
									color: "#000000",
									fontSize: 15,
									marginBottom: 7,
								}}>
								{"₹5000 from UPI in INA"}
							</Text>
							<Text
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"12/08/2023"}
							</Text>
						</View>
						<Image
							source={require("../../../assets/animals.jpg")}
							resizeMode={"stretch"}
							style={{
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
						style={{
							marginHorizontal: 15,
							marginBottom: 10,
						}}
					>
						<View
							style={{
								backgroundColor: "#D2F694",
								borderRadius: 15,
								paddingTop: 20,
								paddingBottom: 20,
								paddingLeft: 75,
								marginLeft: 55
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									marginBottom: 6,
								}}>
								{"Donation 1"}
							</Text>
							<Text
								style={{
									color: "#000000",
									fontSize: 15,
									marginBottom: 7,
								}}>
								{"₹5000 from UPI in INA"}
							</Text>
							<Text
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"12/08/2023"}
							</Text>
						</View>
						<Image
							source={require("../../../assets/animals.jpg")}
							resizeMode={"stretch"}
							style={{
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
						style={{
							marginHorizontal: 15,
							marginBottom: 10,
						}}
					>
						<View
							style={{
								backgroundColor: "#D2F694",
								borderRadius: 15,
								paddingTop: 20,
								paddingBottom: 20,
								paddingLeft: 75,
								marginLeft: 55
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									marginBottom: 6,
								}}>
								{"Donation 1"}
							</Text>
							<Text
								style={{
									color: "#000000",
									fontSize: 15,
									marginBottom: 7,
								}}>
								{"₹5000 from UPI in INA"}
							</Text>
							<Text
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"12/08/2023"}
							</Text>
						</View>
						<Image
							source={require("../../../assets/animals.jpg")}
							resizeMode={"stretch"}
							style={{
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
						style={{
							marginHorizontal: 15,
							marginBottom: 10,
						}}
					>
						<View
							style={{
								backgroundColor: "#D2F694",
								borderRadius: 15,
								paddingTop: 20,
								paddingBottom: 20,
								paddingLeft: 75,
								marginLeft: 55
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									marginBottom: 6,
								}}>
								{"Donation 1"}
							</Text>
							<Text
								style={{
									color: "#000000",
									fontSize: 15,
									marginBottom: 7,
								}}>
								{"₹5000 from UPI in INA"}
							</Text>
							<Text
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"12/08/2023"}
							</Text>
						</View>
						<Image
							source={require("../../../assets/animals.jpg")}
							resizeMode={"stretch"}
							style={{
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
						style={{
							marginHorizontal: 15,
							marginBottom: 10,
						}}
					>
						<View
							style={{
								backgroundColor: "#D2F694",
								borderRadius: 15,
								paddingTop: 20,
								paddingBottom: 20,
								paddingLeft: 75,
								marginLeft: 55
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									marginBottom: 6,
								}}>
								{"Donation 1"}
							</Text>
							<Text
								style={{
									color: "#000000",
									fontSize: 15,
									marginBottom: 7,
								}}>
								{"₹5000 from UPI in INA"}
							</Text>
							<Text
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"12/08/2023"}
							</Text>
						</View>
						<Image
							source={require("../../../assets/animals.jpg")}
							resizeMode={"stretch"}
							style={{
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