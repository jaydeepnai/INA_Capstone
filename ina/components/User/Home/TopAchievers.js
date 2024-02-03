import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import Achievers from "./Achievers";
import { responsiveMargin } from "../../../lib/Validation/RelativeValues";

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
                    backgroundColor: "#ffffff",
                    paddingTop: 16,
                    paddingBottom: 77,
                }}>

                <View>

                <Text
                    style={{
                        color: "#000000",
                        fontSize: 20,
                        marginLeft: responsiveMargin(6),
                    }}>
                    TOP ACHIEVERS OF THE MONTH
                </Text>

                    <View style={{
                        marginLeft: responsiveMargin(4),
                    }}>
                    <Achievers />
                    </View>

                </View>


                <View
                    style={{
                        backgroundColor: "#f2f3f7",
                        borderRadius: 15,
                        paddingVertical: 14,
                        marginBottom: 20,
                        marginHorizontal: 19,
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 9,
                            marginHorizontal: 49,
                        }}>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 14,
                                marginRight: 4,
                                flex: 1,
                            }}>
                            {"Rubina"}
                        </Text>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 15,
                            }}>
                            {"Reivews"}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginHorizontal: 20,
                        }}>
                        <Image
                            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 100,
                                width: 99,
                                height: 102,
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                            }}>
                        </View>
                        <View
                            style={{
                                width: 198,
                                alignSelf: "flex-start",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 9,
                                paddingHorizontal: 10,
                                marginTop: 7,
                            }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 10,
                                }}>
                                <Image
                                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 8,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 10,
                                        marginRight: 27,
                                    }}>
                                    {"Naishal Modi"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 10,
                                        flex: 1,
                                    }}>
                                    {"2 day ago"}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                    width: 178,
                                }}>
                                {"Reviewed in India on 8 January 2024\nColour: Sheen GreenVerified Purchase\nNice productBass Quality is awesome.\nThe product is worth."}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 4,
                            marginHorizontal: 7,
                        }}>
                        <View
                            style={{
                                width: 136,
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 8,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"past services: @Angle trust"}
                            </Text>
                        </View>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 10,
                            }}>
                            {"see all review.."}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginHorizontal: 2,
                        }}>
                        <View
                            style={{
                                width: 53,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 4,
                            }}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginRight: 8,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"4.5"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 120,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 4,
                            }}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginRight: 7,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"rubina@gmail.com"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 140,
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 7,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"Date:11th Jan - 20th jan 24"}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: "#f2f3f7",
                        borderRadius: 15,
                        paddingVertical: 13,
                        marginBottom: 25,
                        marginHorizontal: 19,
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 9,
                            marginHorizontal: 53,
                        }}>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 14,
                                marginRight: 4,
                                flex: 1,
                            }}>
                            {"Maria"}
                        </Text>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 15,
                            }}>
                            {"Reivews"}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginHorizontal: 20,
                        }}>
                        <Image
                            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 100,
                                width: 99,
                                height: 102,
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                            }}>
                        </View>
                        <View
                            style={{
                                width: 198,
                                alignSelf: "flex-start",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 9,
                                paddingHorizontal: 10,
                                marginTop: 8,
                            }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 9,
                                }}>
                                <Image
                                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 8,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 10,
                                        marginRight: 27,
                                    }}>
                                    {"Naishal Modi"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 10,
                                        flex: 1,
                                    }}>
                                    {"2 day ago"}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                    width: 178,
                                }}>
                                {"Reviewed in India on 8 January 2024\nColour: Sheen GreenVerified Purchase\nNice productBass Quality is awesome.\nThe product is worth."}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 4,
                            marginHorizontal: 7,
                        }}>
                        <View
                            style={{
                                width: 136,
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 7,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"past services: @Angle trust"}
                            </Text>
                        </View>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 10,
                            }}>
                            {"see all review.."}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginHorizontal: 2,
                        }}>
                        <View
                            style={{
                                width: 53,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 4,
                            }}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginRight: 8,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"4.5"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 120,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 4,
                            }}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginRight: 7,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"rubina@gmail.com"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 140,
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 7,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"Date:11th Jan - 20th jan 24"}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: "#f2f3f7",
                        borderRadius: 15,
                        paddingVertical: 13,
                        marginBottom: 26,
                        marginHorizontal: 19,
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 10,
                            marginHorizontal: 50,
                        }}>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 14,
                                marginRight: 4,
                                flex: 1,
                            }}>
                            {"Alex"}
                        </Text>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 15,
                            }}>
                            {"Reivews"}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginHorizontal: 20,
                        }}>
                        <Image
                            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 100,
                                width: 99,
                                height: 102,
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                            }}>
                        </View>
                        <View
                            style={{
                                width: 198,
                                alignSelf: "flex-start",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 9,
                                paddingHorizontal: 10,
                                marginTop: 7,
                            }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 9,
                                }}>
                                <Image
                                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 8,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 10,
                                        marginRight: 27,
                                    }}>
                                    {"Naishal Modi"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 10,
                                        flex: 1,
                                    }}>
                                    {"2 day ago"}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                    width: 178,
                                }}>
                                {"Reviewed in India on 8 January 2024\nColour: Sheen GreenVerified Purchase\nNice productBass Quality is awesome.\nThe product is worth."}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 4,
                            marginHorizontal: 7,
                        }}>
                        <View
                            style={{
                                width: 136,
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 7,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"past services: @Angle trust"}
                            </Text>
                        </View>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 10,
                            }}>
                            {"see all review.."}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginHorizontal: 2,
                        }}>
                        <View
                            style={{
                                width: 53,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 4,
                            }}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginRight: 8,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"4.5"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 120,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 4,
                            }}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginRight: 7,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"rubina@gmail.com"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 140,
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 7,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"Date:11th Jan - 20th jan 24"}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: "#f2f3f7",
                        borderRadius: 15,
                        paddingVertical: 13,
                        marginBottom: 32,
                        marginHorizontal: 19,
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 10,
                            marginHorizontal: 56,
                        }}>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 14,
                                marginRight: 4,
                                flex: 1,
                            }}>
                            {"Hasti"}
                        </Text>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 15,
                            }}>
                            {"Reivews"}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginHorizontal: 20,
                        }}>
                        <Image
                            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                            resizeMode={"stretch"}
                            style={{
                                borderRadius: 100,
                                width: 99,
                                height: 102,
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                            }}>
                        </View>
                        <View
                            style={{
                                width: 198,
                                alignSelf: "flex-start",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 9,
                                paddingHorizontal: 10,
                                marginTop: 7,
                            }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 9,
                                }}>
                                <Image
                                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                    resizeMode={"stretch"}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 8,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 10,
                                        marginRight: 27,
                                    }}>
                                    {"Naishal Modi"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 10,
                                        flex: 1,
                                    }}>
                                    {"2 day ago"}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                    width: 178,
                                }}>
                                {"Reviewed in India on 8 January 2024\nColour: Sheen GreenVerified Purchase\nNice productBass Quality is awesome.\nThe product is worth."}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 4,
                            marginHorizontal: 7,
                        }}>
                        <View
                            style={{
                                width: 136,
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 7,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"past services: @Angle trust"}
                            </Text>
                        </View>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 10,
                            }}>
                            {"see all review.."}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginHorizontal: 2,
                        }}>
                        <View
                            style={{
                                width: 53,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 4,
                            }}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginRight: 8,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"4.5"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 120,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 4,
                            }}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginRight: 7,
                                }}
                            />
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"rubina@gmail.com"}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 140,
                                alignItems: "center",
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                paddingVertical: 7,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 10,
                                }}>
                                {"Date:11th Jan - 20th jan 24"}
                            </Text>
                        </View>
                    </View>
                </View>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 16,
                        marginLeft: 17,
                    }}>
                    {"See more..."}
                </Text>
            </ScrollView>
        </SafeAreaView>

    )
}
