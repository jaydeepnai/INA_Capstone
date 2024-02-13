import React from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Base_Color } from "../../../lib/React Query/variables";
import { getFontSize, responsiveMargin, width } from "../../../lib/Validation/RelativeValues";


const HiringResult = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView
				style={{
					flex: 1,
					backgroundColor: "#ffffff",
					paddingVertical: 39,
				}}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 10,
						marginHorizontal: 21,
					}}>
					{/* <FontAwesome name="search" size={24} color="black" /> */}
					<View
						style={{
							width: "85%",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							padding: 11,
						}}>
						<FontAwesome name="search" size={24} color="black" />
						<Text
							style={{
								color: "gray",
								fontSize: 15,
								flex: 1,
								marginLeft: 10
							}}>
							{"Search for Requirments"}
						</Text>
					</View>
					<View
						style={{
							width: 30,
						}}>
						<Ionicons name="filter" size={24} color="black" />
						<View style={{
							position: "absolute",
							top: -7,
							backgroundColor: Base_Color,
							borderRadius: 50,
							justifyContent: "center",
							alignContent: "center",
							right: -6,
							width: 18,
							height: 18,
						}}>
							<Text style={{ textAlign: "center" }}>1</Text>
						</View>
					</View>
				</View>
				<Text
					style={{
						color: "#000000",
						fontSize: getFontSize(20),
						fontWeight: "bold",
						marginBottom: responsiveMargin(5),
						marginLeft: responsiveMargin(5),
					}}>
					{"Selected Rating"}
				</Text>
				<ScrollView horizontal>
					<View
						style={{
							width: 79,
							height: 30,
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: Base_Color,
							borderRadius: 15,
							paddingVertical: 5,
							marginBottom: 20,
							marginLeft: 10,
						}}>
						<AntDesign name="star" size={18} color="white" />
						<Text
							style={{
								color: "#ffffff",
								fontSize: 20,
								fontWeight: "bold",
								paddingLeft: 10
							}}>
							{"5.0"}
						</Text>
					</View>
					<View
						style={{
							width: 79,
							height: 30,
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: Base_Color,
							borderRadius: 15,
							paddingVertical: 5,
							marginBottom: 20,
							marginLeft: 10,
						}}>
						<AntDesign name="star" size={18} color="white" />
						<Text
							style={{
								color: "#ffffff",
								fontSize: 20,
								fontWeight: "bold",
								paddingLeft: 10
							}}>
							{"5.0"}
						</Text>
					</View>

				</ScrollView>
				<TouchableOpacity
					style={{
						width: width * 0.83,
						marginBottom: 22,
						marginHorizontal: 47,
					}}>
					<View
						style={{
							backgroundColor: "whitesmoke",
							borderRadius: 15,
							paddingVertical: 6,
							paddingLeft: 64,
						}}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 4,
								marginRight: 6,
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Naishal Modi"}
							</Text>
							<View
								style={{
									width: 112,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 6,
								}}>
								<Feather name="phone" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"9409564018"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
								marginRight: 12,
							}}>
							<View
								style={{
									width: 161,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
								}}>
								<MaterialIcons name="email" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"burger@gmail.com"}
								</Text>
							</View>
							<View
								style={{
									width: 61,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 8,
								}}>
								<FontAwesome name="star" size={18} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"4.8"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginRight: 50,
							}}>
							<View
								style={{
									width: 87,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									marginRight: 7,
								}}>
								<FontAwesome5 name="map-marker-alt" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"A’bad"}
								</Text>
							</View>
							<View
								style={{
									width: 101,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 9,
								}}>
								<MaterialIcons name="event" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"15 events"}
								</Text>
							</View>
						</View>
					</View>
					<Image
						source={require("../../../assets/profile.jpg")}
						resizeMode={"stretch"}
						style={{
							position: "absolute",
							bottom: 2,
							left: -40,
							width: 97,
							borderRadius: 100,
							height: 98,
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: width * 0.83,
						marginBottom: 22,
						marginHorizontal: 47,
					}}>
					<View
						style={{
							backgroundColor: "whitesmoke",
							borderRadius: 15,
							paddingVertical: 6,
							paddingLeft: 64,
						}}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 4,
								marginRight: 6,
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Naishal Modi"}
							</Text>
							<View
								style={{
									width: 112,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 6,
								}}>
								<Feather name="phone" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"9409564018"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
								marginRight: 12,
							}}>
							<View
								style={{
									width: 161,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
								}}>
								<MaterialIcons name="email" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"burger@gmail.com"}
								</Text>
							</View>
							<View
								style={{
									width: 61,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 8,
								}}>
								<FontAwesome name="star" size={18} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"4.8"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginRight: 50,
							}}>
							<View
								style={{
									width: 87,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									marginRight: 7,
								}}>
								<FontAwesome5 name="map-marker-alt" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"A’bad"}
								</Text>
							</View>
							<View
								style={{
									width: 101,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 9,
								}}>
								<MaterialIcons name="event" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"15 events"}
								</Text>
							</View>
						</View>
					</View>
					<Image
						source={require("../../../assets/profile.jpg")}
						resizeMode={"stretch"}
						style={{
							position: "absolute",
							bottom: 2,
							left: -40,
							width: 97,
							borderRadius: 100,
							height: 98,
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: width * 0.83,
						marginBottom: 22,
						marginHorizontal: 47,
					}}>
					<View
						style={{
							backgroundColor: "whitesmoke",
							borderRadius: 15,
							paddingVertical: 6,
							paddingLeft: 64,
						}}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 4,
								marginRight: 6,
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Naishal Modi"}
							</Text>
							<View
								style={{
									width: 112,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 6,
								}}>
								<Feather name="phone" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"9409564018"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
								marginRight: 12,
							}}>
							<View
								style={{
									width: 161,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
								}}>
								<MaterialIcons name="email" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"burger@gmail.com"}
								</Text>
							</View>
							<View
								style={{
									width: 61,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 8,
								}}>
								<FontAwesome name="star" size={18} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"4.8"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginRight: 50,
							}}>
							<View
								style={{
									width: 87,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									marginRight: 7,
								}}>
								<FontAwesome5 name="map-marker-alt" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"A’bad"}
								</Text>
							</View>
							<View
								style={{
									width: 101,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 9,
								}}>
								<MaterialIcons name="event" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"15 events"}
								</Text>
							</View>
						</View>
					</View>
					<Image
						source={require("../../../assets/profile.jpg")}
						resizeMode={"stretch"}
						style={{
							position: "absolute",
							bottom: 2,
							left: -40,
							width: 97,
							borderRadius: 100,
							height: 98,
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: width * 0.83,
						marginBottom: 22,
						marginHorizontal: 47,
					}}>
					<View
						style={{
							backgroundColor: "whitesmoke",
							borderRadius: 15,
							paddingVertical: 6,
							paddingLeft: 64,
						}}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 4,
								marginRight: 6,
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Naishal Modi"}
							</Text>
							<View
								style={{
									width: 112,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 6,
								}}>
								<Feather name="phone" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"9409564018"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
								marginRight: 12,
							}}>
							<View
								style={{
									width: 161,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
								}}>
								<MaterialIcons name="email" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"burger@gmail.com"}
								</Text>
							</View>
							<View
								style={{
									width: 61,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 8,
								}}>
								<FontAwesome name="star" size={18} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"4.8"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginRight: 50,
							}}>
							<View
								style={{
									width: 87,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									marginRight: 7,
								}}>
								<FontAwesome5 name="map-marker-alt" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"A’bad"}
								</Text>
							</View>
							<View
								style={{
									width: 101,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 9,
								}}>
								<MaterialIcons name="event" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"15 events"}
								</Text>
							</View>
						</View>
					</View>
					<Image
						source={require("../../../assets/profile.jpg")}
						resizeMode={"stretch"}
						style={{
							position: "absolute",
							bottom: 2,
							left: -40,
							width: 97,
							borderRadius: 100,
							height: 98,
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: width * 0.83,
						marginBottom: 22,
						marginHorizontal: 47,
					}}>
					<View
						style={{
							backgroundColor: "whitesmoke",
							borderRadius: 15,
							paddingVertical: 6,
							paddingLeft: 64,
						}}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 4,
								marginRight: 6,
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Naishal Modi"}
							</Text>
							<View
								style={{
									width: 112,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 6,
								}}>
								<Feather name="phone" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"9409564018"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
								marginRight: 12,
							}}>
							<View
								style={{
									width: 161,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
								}}>
								<MaterialIcons name="email" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"burger@gmail.com"}
								</Text>
							</View>
							<View
								style={{
									width: 61,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 8,
								}}>
								<FontAwesome name="star" size={18} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"4.8"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginRight: 50,
							}}>
							<View
								style={{
									width: 87,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									marginRight: 7,
								}}>
								<FontAwesome5 name="map-marker-alt" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"A’bad"}
								</Text>
							</View>
							<View
								style={{
									width: 101,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 9,
								}}>
								<MaterialIcons name="event" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"15 events"}
								</Text>
							</View>
						</View>
					</View>
					<Image
						source={require("../../../assets/profile.jpg")}
						resizeMode={"stretch"}
						style={{
							position: "absolute",
							bottom: 2,
							left: -40,
							width: 97,
							borderRadius: 100,
							height: 98,
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: width * 0.83,
						marginBottom: 22,
						marginHorizontal: 47,
					}}>
					<View
						style={{
							backgroundColor: "whitesmoke",
							borderRadius: 15,
							paddingVertical: 6,
							paddingLeft: 64,
						}}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 4,
								marginRight: 6,
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Naishal Modi"}
							</Text>
							<View
								style={{
									width: 112,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 6,
								}}>
								<Feather name="phone" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"9409564018"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
								marginRight: 12,
							}}>
							<View
								style={{
									width: 161,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
								}}>
								<MaterialIcons name="email" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"burger@gmail.com"}
								</Text>
							</View>
							<View
								style={{
									width: 61,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 8,
								}}>
								<FontAwesome name="star" size={18} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"4.8"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginRight: 50,
							}}>
							<View
								style={{
									width: 87,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									marginRight: 7,
								}}>
								<FontAwesome5 name="map-marker-alt" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"A’bad"}
								</Text>
							</View>
							<View
								style={{
									width: 101,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 9,
								}}>
								<MaterialIcons name="event" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"15 events"}
								</Text>
							</View>
						</View>
					</View>
					<Image
						source={require("../../../assets/profile.jpg")}
						resizeMode={"stretch"}
						style={{
							position: "absolute",
							bottom: 2,
							left: -40,
							width: 97,
							borderRadius: 100,
							height: 98,
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: width * 0.83,
						marginBottom: 22,
						marginHorizontal: 47,
					}}>
					<View
						style={{
							backgroundColor: "whitesmoke",
							borderRadius: 15,
							paddingVertical: 6,
							paddingLeft: 64,
						}}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 4,
								marginRight: 6,
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Naishal Modi"}
							</Text>
							<View
								style={{
									width: 112,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 6,
								}}>
								<Feather name="phone" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"9409564018"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
								marginRight: 12,
							}}>
							<View
								style={{
									width: 161,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
								}}>
								<MaterialIcons name="email" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"burger@gmail.com"}
								</Text>
							</View>
							<View
								style={{
									width: 61,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 8,
								}}>
								<FontAwesome name="star" size={18} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"4.8"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginRight: 50,
							}}>
							<View
								style={{
									width: 87,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									marginRight: 7,
								}}>
								<FontAwesome5 name="map-marker-alt" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"A’bad"}
								</Text>
							</View>
							<View
								style={{
									width: 101,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 9,
								}}>
								<MaterialIcons name="event" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"15 events"}
								</Text>
							</View>
						</View>
					</View>
					<Image
						source={require("../../../assets/profile.jpg")}
						resizeMode={"stretch"}
						style={{
							position: "absolute",
							bottom: 2,
							left: -40,
							width: 97,
							borderRadius: 100,
							height: 98,
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: width * 0.83,
						marginBottom: 22,
						marginHorizontal: 47,
					}}>
					<View
						style={{
							backgroundColor: "whitesmoke",
							borderRadius: 15,
							paddingVertical: 6,
							paddingLeft: 64,
						}}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 4,
								marginRight: 6,
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Naishal Modi"}
							</Text>
							<View
								style={{
									width: 112,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 6,
								}}>
								<Feather name="phone" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"9409564018"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
								marginRight: 12,
							}}>
							<View
								style={{
									width: 161,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
								}}>
								<MaterialIcons name="email" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"burger@gmail.com"}
								</Text>
							</View>
							<View
								style={{
									width: 61,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 8,
								}}>
								<FontAwesome name="star" size={18} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"4.8"}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginRight: 50,
							}}>
							<View
								style={{
									width: 87,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									marginRight: 7,
								}}>
								<FontAwesome5 name="map-marker-alt" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
										paddingLeft: 10
									}}>
									{"A’bad"}
								</Text>
							</View>
							<View
								style={{
									width: 101,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "white",
									borderRadius: 15,
									paddingVertical: 4,
									paddingHorizontal: 9,
								}}>
								<MaterialIcons name="event" size={15} color="black" />
								<Text
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"15 events"}
								</Text>
							</View>
						</View>
					</View>
					<Image
						source={require("../../../assets/profile.jpg")}
						resizeMode={"stretch"}
						style={{
							position: "absolute",
							bottom: 2,
							left: -40,
							width: 97,
							borderRadius: 100,
							height: 98,
						}}
					/>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
		// <Text>
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// 	hare krishna
		// </Text>
	)
}

export default HiringResult

const styles = StyleSheet.create({})