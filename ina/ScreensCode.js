// USER WORK-HISTORY [EVENT TAB]


import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";

export default (props) => {


    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    paddingTop: 24,
                    paddingBottom: 225,
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 5,
                        marginHorizontal: 12,
                    }}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 36,
                        }}>
                        {"User Work History"}
                    </Text>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </View>
                <View
                    style={{
                        backgroundColor: "#000000",
                        marginBottom: 11,
                    }}>
                </View>
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                        borderRadius: 50,
                        height: 100,
                        width: 100,
                        marginBottom: 24,
                        marginLeft: 150,
                    }}
                />
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 24,
                        marginBottom: 26,
                        marginLeft: 100,
                    }}>
                    {"Hannah Backer"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2,
                        marginHorizontal: 14,
                    }}>
                    <Text
                        style={{
                            color: "#948D8D",
                            fontSize: 20,
                            marginRight: 4,
                            flex: 1,
                        }}>
                        {"NGO"}
                    </Text>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 20,
                            marginRight: 86,
                        }}>
                        {"Events"}
                    </Text>
                    <Text
                        style={{
                            color: "#948D8D",
                            fontSize: 20,
                        }}>
                        {"Services"}
                    </Text>
                </View>
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                        height: 3,
                        marginBottom: 31,
                        marginHorizontal: 167,
                    }}
                />
                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                    }}>
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: 20,
                            paddingVertical: 14,
                            marginBottom: 38,
                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 13,
                                marginHorizontal: 35,
                            }}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 70,
                                    height: 65,
                                    marginRight: 10,
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                }}>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 28,
                                        marginBottom: 9,
                                    }}>
                                    {"Teeth Check-up"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 16,
                                        marginHorizontal: 7,
                                    }}>
                                    {" Raahi Foundation"}
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 15,
                                height: 210,
                                marginBottom: 13,
                                marginHorizontal: 35,
                            }}
                        />
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 20,
                                marginBottom: 20,
                                marginHorizontal: 52,
                            }}>
                            {"Time Line :  1st jan 24 - 31st jan 24"}
                        </Text>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: "10%",
                                marginRight: "10%",
                            }}>


                            <View
                                style={{
                                    width: "25%",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 1,
                                    marginRight: 6,
                                }}>
                                <Image
                                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        marginRight: 11,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 14,
                                    }}>
                                    {"5.12"}
                                </Text>
                            </View>




                            <View
                                style={{
                                    width: "40%",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                    marginRight: 6,
                                }}>
                                <Image
                                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 31,
                                        height: 31,
                                        marginRight: 5,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                    }}>
                                    {"SindhuBhavan"}
                                </Text>
                            </View>






                            <View
                                style={{
                                    width: "35%",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#D9D9D9",
                                    borderRadius: 15,
                                    paddingVertical: 2,
                                }}>
                                <Image
                                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 31,
                                        height: 31,
                                        marginRight: 5,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 13,
                                    }}>
                                    {"10AM-5PM"}
                                </Text>
                            </View>



                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}














// USER WORK-HISTORY [NGO TAB]



import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";

export default (props) => {


    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    paddingTop: 24,
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 5,
                        marginHorizontal: 12,
                    }}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 36,
                        }}>
                        {"User Work History"}
                    </Text>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </View>
                <View
                    style={{
                        backgroundColor: "#000000",
                        marginBottom: 11,
                    }}>
                </View>
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                        borderRadius: 50,
                        height: 100,
                        width: 100,
                        marginBottom: 24,
                        marginLeft: 150,
                    }}
                />
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 24,
                        marginBottom: 26,
                        marginLeft: 100,
                    }}>
                    {"Hannah Backer"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2,
                        marginHorizontal: 14,
                    }}>
                    <Text
                        style={{
                            color: "#948D8D",
                            fontSize: 20,
                            marginRight: 4,
                            flex: 1,
                        }}>
                        {"NGO"}
                    </Text>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 20,
                            marginRight: 86,
                        }}>
                        {"Events"}
                    </Text>
                    <Text
                        style={{
                            color: "#948D8D",
                            fontSize: 20,
                        }}>
                        {"Services"}
                    </Text>
                </View>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						width: 95,
						height: 3,
						marginBottom: 42,
						marginHorizontal: 6,
					}}
				/>




  



        
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#F2F3F7",
						borderRadius: 15,
						paddingVertical: 10,
						paddingLeft: 20,
            marginHorizontal:15,
					}}>

					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 50,
							width: 60,
							height: 60,
						}}
					/>
          
          <View style={{
            marginLeft:20,
          }}>
					<View 
						style = {{
							width: "80%",
              flexDirection:"row",
              justifyContent:"space-between"
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 17,
                marginBottom:10,
							}}>
							{"Aniket Bhatti"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 10,
                marginBottom:10,
                paddingRight:5,
							}}>
							{"01/01/24 to 31/1/24"}
						</Text>
            </View>

            <View>
            <Text 
						style = {{
							color: "#000000",
							fontSize: 14,
                marginBottom:10,
						}}>
						{"Progress Promoter"}
					</Text>
					</View>

          </View>

				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}

