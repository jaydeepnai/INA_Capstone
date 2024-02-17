import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
import { Base_Color } from "../../../lib/React Query/variables";
import { getFontSize, height, responsiveMargin } from "../../../lib/Validation/RelativeValues";

const HiringSearch = (props) => {


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
					paddingTop: 39,
					height:"100%"
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
					{"Select Rating"}
				</Text>
				<ScrollView
					horizontal
					style={{
						flexDirection: "row",
						marginBottom: responsiveMargin(5),
						marginHorizontal: 14,
					}}>
					<View
						style={{
							width: 79,
							alignSelf: "flex-start",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: Base_Color,
							borderRadius: 15,
							paddingVertical: 5,
							marginRight: 10,
						}}>
						<AntDesign name="star" size={24} color="white" />
						<Text
							style={{
								color: "#ffffff",
								fontSize: 20,
								fontWeight: "bold",
							}}>
							{"5.0"}
						</Text>
					</View>
					<View
						style={{
							width: 79,
							alignSelf: "flex-start",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: Base_Color,
							borderRadius: 15,
							paddingVertical: 5,
							marginRight: 10,
						}}>
						<AntDesign name="star" size={24} color="white" />
						<Text
							style={{
								color: "#ffffff",
								fontSize: 20,
								fontWeight: "bold",
							}}>
							{"5.0"}
						</Text>
					</View>
					<View
						style={{
							width: 79,
							alignSelf: "flex-start",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: Base_Color,
							borderRadius: 15,
							paddingVertical: 5,
							marginRight: 10,
						}}>
						<AntDesign name="star" size={24} color="white" />
						<Text
							style={{
								color: "#ffffff",
								fontSize: 20,
								fontWeight: "bold",
							}}>
							{"5.0"}
						</Text>
					</View>
				</ScrollView>
				<Text
					style={{
						color: "#000000",
						fontSize: getFontSize(20),
						fontWeight: "bold",
						marginBottom: responsiveMargin(5),
						marginLeft: responsiveMargin(5),
					}}>
					{"Category"}
				</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: Base_Color,
						borderRadius: 10,
						padding: responsiveMargin(4),
						marginBottom: 15,
						marginHorizontal: 20,
					}}>
					<MaterialIcons name="pets" size={24} color="white" />

					<Text
						style={{
							color: "#ffffff",
							fontSize: 20,
							fontWeight: "bold",
							paddingLeft:10,
							flex: 1,
						}}>
						{"NGOs for Animals"}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "whitesmoke",
						borderRadius: 10,
						padding: responsiveMargin(4),
						marginBottom: 15,
						marginHorizontal: 20,
					}}>
					<MaterialIcons name="pets" size={24} color="black" />

					<Text
						style={{
							color: "gray",
							fontSize: 20,
							fontWeight: "bold",
							flex: 1,
							paddingLeft:10
						}}>
						{"NGOs for Animals"}
					</Text>
				</View>
				<Text
					style={{
						color: "#000000",
						fontSize: getFontSize(20),
						fontWeight: "bold",
						marginBottom: responsiveMargin(5),
						marginLeft: responsiveMargin(5),
					}}>
					{"Skills"}
				</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: responsiveMargin(5),
						marginHorizontal: 15,
					}}>
					<View
						style={{
							width: 65,
							alignItems: "center",
							backgroundColor: Base_Color,
							borderRadius: 14,
							paddingVertical: 7,
							marginRight: 10,
						}}>
						<Text
							style={{
								color: "white",
								fontSize: 15,
							}}>
							{"Skill 1"}
						</Text>
					</View>
					<View
						style={{
							width: 65,
							alignItems: "center",
							backgroundColor: "#f2f3f7",
							borderRadius: 14,
							paddingVertical: 7,
							marginRight: 10,
						}}>
						<Text
							style={{
								color: "#000000",
								fontSize: 15,
							}}>
							{"Skill 1"}
						</Text>
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
					{"Language spoken"}
				</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 48,
						marginHorizontal: 20,
					}}>
					<View
						style={{
							width: 65,
							alignItems: "center",
							backgroundColor: Base_Color,
							borderRadius: 14,
							paddingVertical: 7,
							marginRight: 10,
						}}>
						<Text
							style={{
								color: "white",
								fontSize: 15,
							}}>
							{"Hindi"}
						</Text>
					</View>
					<View
						style={{
							width: 65,
							alignItems: "center",
							backgroundColor: "whitesmoke",
							borderRadius: 14,
							paddingVertical: 7,
							marginRight: 10,
						}}>
						<Text
							style={{
								color: "black",
								fontSize: 15,
							}}>
							{"Hindi"}
						</Text>
					</View>

				</View>
				
			</ScrollView>
				<TouchableOpacity
					onPress={() => props.navigation.navigate("HiringResult")}
					style={{
						alignItems: "center",
						backgroundColor: Base_Color,
						borderRadius: 30,
						position: "absolute",
						bottom:10,
						width: "95%",
						padding: 10,
						marginLeft: 10,
						justifyContent: "center",
					}}>
					<Text style={{
						color: "white",
					}}>
						Search
					</Text>
				</TouchableOpacity>
		</SafeAreaView>

	)
}

export { HiringSearch }