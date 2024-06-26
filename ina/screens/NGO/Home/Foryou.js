import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { getFontSize, responsiveMargin } from '../../../lib/Validation/RelativeValues'
import TopAchieverNGO from '../../../components/NGO/Home/TopAchieverNGO'
// import * as Progress from 'react-native-progress';

const Foryou = () => {
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
					paddingTop: 27,
					paddingBottom: 300,
				}}>
				<Text 
					style = {{
						color: "#000000",
						fontSize: getFontSize(22),
						marginBottom: 23,
						marginLeft: 12,
                        fontSize:20,
					}}>
					{"VOLUNTEER FOR VOLUNTEERING"}
				</Text>

        <TopAchieverNGO />

				<Text 
					style = {{
						color: "#000000",
						fontSize: getFontSize(22),
						marginBottom: 23,
						marginLeft: 15,
					}}>
					{"SHOW APPOINTMENTS"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 15,
						marginHorizontal: 17,
                        marginLeft: 10,
					}}>
					<View 
						style = {{
							width: 120,
							backgroundColor: "#d9d9d9",
							paddingTop: 4,
							paddingBottom: 32,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 5,
								marginLeft: 20,
							}}>
							{"MON"}
						</Text>
						<View 
							style = {{
								backgroundColor: "#000000",
								marginBottom: 2,
							}}>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 10,
								marginLeft: 4,
							}}>
							{"13"}
						</Text>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#f1b7b7",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 7,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Naishal"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#fff400CF",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 7,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.jaydeep"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#679d0a",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 7,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Aniket"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginLeft: 13,
							}}>
							{"+10 more"}
						</Text>
					</View>
					<View 
						style = {{
							width: 120,
							backgroundColor: "#d9d9d9",
							paddingTop: 4,
							paddingBottom: 32,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 5,
								marginLeft: 20,
							}}>
							{"THU"}
						</Text>
						<View 
							style = {{
								backgroundColor: "#000000",
								marginBottom: 2,
							}}>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 10,
								marginLeft: 4,
							}}>
							{"13"}
						</Text>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#f1b7b7",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 7,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Naishal"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#fff400CF",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 7,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.jaydeep"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#679d0a",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 7,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Aniket"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginLeft: 13,
							}}>
							{"+10 more"}
						</Text>
					</View>
					<View 
						style = {{
							width: 120,
							backgroundColor: "#d9d9d9",
							paddingTop: 4,
							paddingBottom: 32,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 5,
								marginLeft: 20,
							}}>
							{"WED"}
						</Text>
						<View 
							style = {{
								backgroundColor: "#000000",
								marginBottom: 2,
							}}>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginBottom: 10,
								marginLeft: 4,
							}}>
							{"13"}
						</Text>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#f1b7b7",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 7,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Naishal"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#fff400CF",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 7,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.jaydeep"}
							</Text>
						</View>
						<View 
							style = {{
								width: 66,
								height: 12,
								alignItems: "center",
								backgroundColor: "#679d0a",
								borderRadius: 15,
								paddingVertical: 1,
								marginBottom: 7,
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Mr.Aniket"}
							</Text>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
								marginLeft: 13,
							}}>
							{"+10 more"}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: getFontSize(22),
						marginBottom: 15,
						marginLeft: 25,
					}}>
					{"OUR UPCOMING EVENTS"}
				</Text>

        
				<View
                    style={{
                        marginBottom: 24,
                        marginHorizontal: 12,
                    }}>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderRadius: 20,
                            paddingTop: 19,
                            paddingBottom: 8,
                            shadowColor: "#00000040",
                            shadowOpacity: 0.3,
                            shadowOffset: {
                                width: 0,
                                height: 4
                            },
                            shadowRadius: 4,
                            elevation: 4,
                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: responsiveMargin(2),
                                marginHorizontal: 9,
                            }}>
                            <Image
                                source={require("../../../assets/profile.jpg")}
                                resizeMode={"cover"}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius:100,
                                    marginRight: 13,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                    flex: 1,
                                }}>
                                {"Sukrut parivar"}
                            </Text>
                        </View>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: 15,
                                marginHorizontal: 21,
                                width: 364,
                            }}>
                            {"Help Little Padma Saranya Dance Back to \nHealth!"}
                        </Text>
                        <Image
                            source={require("../../../assets/ngo_event1.webp")}
                            style={{
                                borderRadius: 20,
                                height: 180,
                                width:320,
                                marginBottom: 26,
                                marginHorizontal: responsiveMargin(2.5),
                            }}
                        />


                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: responsiveMargin(6),
                                marginLeft: 30,
                            }}>
                            {"₹ 13,948 raised of ₹ 20,000"}
                        </Text>

                        <View style={{
                            alignItems:'center',
                            marginBottom:responsiveMargin(6)
                        }}>
                            {/* <Progress.Bar progress={0.7} width={350} /> */}
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 8,
                                marginHorizontal: 20,
                            }}>
                            <Image
                                source={require("../../../assets/clock.png")}
                                resizeMode={"cover"}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 10,
                                    borderRadius:100,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                }}>
                                {"5 days left"}
                            </Text>
                            <View
                                style={{
                                    flex: 1,
                                    alignSelf: "stretch",
                                }}>
                            </View>
                            <Image
                                source={require("../../../assets/vol1.png")}
                                resizeMode={"stretch"}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 12,
                                    borderRadius:100
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                }}>
                                {"Volunteers"}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginHorizontal: 7,
                            }}>
                            <View
                                style={{
                                    width: 152,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    backgroundColor: "#ffffff",
                                    borderRadius: 20,
                                    paddingVertical: 16,
                                    paddingHorizontal: 11,
                                    marginRight: 137,
                                    justifyContent:"flex-start"
                                }}>
                                <Image
                                    source={require("../../../assets/share.png")}
                                    resizeMode={"stretch"}
                                    style={{
                                        borderRadius: 100,
                                        width: 35,
                                        height: 35,
                                        marginRight: 24,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: getFontSize(16),
                                        flex: 1,
                                    }}>
                                    {"Share"}
                                </Text>
                            </View>
                        </View>
                    </View>
        </View>


        <View
                    style={{
                        marginBottom: 24,
                        marginHorizontal: 12,
                    }}>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderRadius: 20,
                            paddingTop: 19,
                            paddingBottom: 8,
                            shadowColor: "#00000040",
                            shadowOpacity: 0.3,
                            shadowOffset: {
                                width: 0,
                                height: 4
                            },
                            shadowRadius: 4,
                            elevation: 4,
                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: responsiveMargin(2),
                                marginHorizontal: 9,
                            }}>
                            <Image
                                source={require("../../../assets/profile.jpg")}
                                resizeMode={"cover"}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius:100,
                                    marginRight: 13,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                    flex: 1,
                                }}>
                                {"Rahii Foundation"}
                            </Text>
                        </View>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: 15,
                                marginHorizontal: 21,
                                width: 364,
                            }}>
                            {"Help Little Padma Saranya Dance Back to \nHealth!"}
                        </Text>
                        <Image
                            source={require("../../../assets/ngo_event2.jpg")}
                            style={{
                                borderRadius: 20,
                                height: 180,
                                width:320,
                                marginBottom: 26,
                                marginHorizontal: responsiveMargin(2.5),
                            }}
                        />


                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: responsiveMargin(6),
                                marginLeft: 30,
                            }}>
                            {"₹ 29,400 raised of ₹ 50,000"}
                        </Text>

                        <View style={{
                            alignItems:'center',
                            marginBottom:responsiveMargin(6)
                        }}>
                            {/* <Progress.Bar progress={0.7} width={350} /> */}
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 8,
                                marginHorizontal: 20,
                            }}>
                            <Image
                                source={require("../../../assets/clock.png")}
                                resizeMode={"cover"}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 10,
                                    borderRadius:100,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                }}>
                                {"20 days left"}
                            </Text>
                            <View
                                style={{
                                    flex: 1,
                                    alignSelf: "stretch",
                                }}>
                            </View>
                            <Image
                                source={require("../../../assets/vol2.png")}
                                resizeMode={"stretch"}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 12,
                                    borderRadius:100
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                }}>
                                {"Volunteers"}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginHorizontal: 7,
                            }}>
                            <View
                                style={{
                                    width: 152,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    backgroundColor: "#ffffff",
                                    borderRadius: 20,
                                    paddingVertical: 16,
                                    paddingHorizontal: 11,
                                    marginRight: 137,
                                    justifyContent:"flex-start"
                                }}>
                                <Image
                                    source={require("../../../assets/share.png")}
                                    resizeMode={"stretch"}
                                    style={{
                                        borderRadius: 100,
                                        width: 35,
                                        height: 35,
                                        marginRight: 24,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: getFontSize(16),
                                        flex: 1,
                                    }}>
                                    {"Share"}
                                </Text>
                            </View>
                        </View>
                    </View>
        </View>



        <View
                    style={{
                        marginBottom: 24,
                        marginHorizontal: 12,
                    }}>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderRadius: 20,
                            paddingTop: 19,
                            paddingBottom: 8,
                            shadowColor: "#00000040",
                            shadowOpacity: 0.3,
                            shadowOffset: {
                                width: 0,
                                height: 4
                            }, 
                            shadowRadius: 4,
                            elevation: 4,
                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: responsiveMargin(2),
                                marginHorizontal: responsiveMargin(2),
                            }}>
                            <Image
                                source={require("../../../assets/profile.jpg")}
                                resizeMode={"cover"}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius:100,
                                    marginRight: 13,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                    flex: 1,
                                }}>
                                {"Angle trust"}
                            </Text>
                        </View>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: 15,
                                marginHorizontal: 21,
                                width: 364,
                            }}>
                            {"Help Little Padma Saranya Dance Back to \nHealth!"}
                        </Text>
                        <Image
                            source={require("../../../assets/ngo_event3.jpg")}
                            style={{
                                borderRadius: 20,
                                height: 180,
                                width:320,
                                marginBottom: 26,
                                marginHorizontal: responsiveMargin(2.5),
                            }}
                        />


                        <Text
                            style={{
                                color: "#000000",
                                fontSize: getFontSize(16),
                                marginBottom: responsiveMargin(6),
                                marginLeft: 30,
                            }}>
                            {"₹ 20,200 raised of ₹ 40,000"}
                        </Text>

                        <View style={{
                            alignItems:'center',
                            marginBottom:responsiveMargin(6)
                        }}>
                            {/* <Progress.Bar progress={0.7} width={350} /> */}
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 8,
                                marginHorizontal: 20,
                            }}>
                            <Image
                                source={require("../../../assets/clock.png")}
                                resizeMode={"cover"}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 10,
                                    borderRadius:100,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                }}>
                                {"15 days left"}
                            </Text>
                            <View
                                style={{
                                    flex: 1,
                                    alignSelf: "stretch",
                                }}>
                            </View>
                            <Image
                                source={require("../../../assets/vol1.png")}
                                resizeMode={"stretch"}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 12,
                                    borderRadius:100
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: getFontSize(16),
                                }}>
                                {"Volunteers"}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginHorizontal: 7,
                            }}>
                            <View
                                style={{
                                    width: 152,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    backgroundColor: "#ffffff",
                                    borderRadius: 20,
                                    paddingVertical: 16,
                                    paddingHorizontal: 11,
                                    marginRight: 137,
                                    justifyContent:"flex-start"
                                }}>
                                <Image
                                    source={require("../../../assets/share.png")}
                                    resizeMode={"stretch"}
                                    style={{
                                        borderRadius: 100,
                                        width: 35,
                                        height: 35,
                                        marginRight: 24,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: getFontSize(16),
                                        flex: 1,
                                    }}>
                                    {"Share"}
                                </Text>
                            </View>
                        </View>
                    </View>
        </View>


		

        
			</ScrollView>
		</SafeAreaView>
  )
}

export default Foryou

const styles = StyleSheet.create({})