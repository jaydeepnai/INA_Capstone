import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Pressable, Alert, Modal, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getFontSize, responsiveMargin, width } from '../../../lib/Validation/RelativeValues'
import { AntDesign } from '@expo/vector-icons'
import { Base_Color } from '../../../lib/React Query/variables'




const Achievers = () => {

    return (
        <View>

            <View
                style={{
                    width: 414,
                    height: "auto",
                    marginBottom: 15,
                    marginHorizontal: 3,
                }}>
                <ScrollView horizontal
                    style={{
                        margin: 10,
                        paddingRight:150
                    }}>
                    <Achiever image={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    name={"John"}
                    />
                    <Achiever image={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    name={"Lisa"}
                    />
                    <Achiever image={"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    name={"Mona"}
                    />
                    <Achiever image={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    name={"jey"}
                    />
                     <Achiever image={"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    name={"dalli"}
                    />
                     <Achiever image={"https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    name={"soun"}
                    />
                     <Achiever image={"https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    name={"dalli"}
                    />
                     <Achiever image={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    name={"dalli"}
                    />
                    <View style={{marginLeft:50}}></View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Achievers





const Achiever = ({image,name}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <AntDesign name="close" size={24} color="white" />
                        </Pressable>

                        <View
                            style={{
                                backgroundColor: "#f2f3f7",
                                borderRadius: 15,
                                paddingVertical: 14,

                            }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: responsiveMargin(4),
                                    marginHorizontal: responsiveMargin(7),
                                }}>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: getFontSize(18),
                                        marginRight: 4,
                                        flex: 1,
                                    }}>
                                    {"Rubina Shah"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: getFontSize(14),
                                        paddingRight: responsiveMargin(16)
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
                                    source={{uri:image}}
                                    style={{
                                        borderRadius: 100,
                                        width: 100,
                                        height: 100,
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
                                            source={require("../../../assets/NGO/me.jpg")}
                                            resizeMode={"stretch"}
                                            style={{
                                                borderRadius: 100,
                                                width: 30,
                                                height: 30,
                                                marginRight: 8,
                                            }}
                                        />
                                        <Text
                                            style={{
                                                color: "#000000",
                                                fontSize: getFontSize(10),
                                                marginRight: 27,
                                            }}>
                                            {name}
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#000000",
                                                fontSize: getFontSize(10),
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
                                        fontSize: getFontSize(10),
                                        paddingRight: responsiveMargin(5)
                                    }}>
                                    {"See all review.."}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginHorizontal: responsiveMargin(2),
                                    paddingTop: responsiveMargin(2)
                                }}>
                                <View
                                    style={{
                                        width: 60,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#ffffff",
                                        borderRadius: 15,
                                        paddingVertical: 4,
                                    }}>
                                    <Image
                                        source={require("../../../assets/images/ratings.png")}
                                        resizeMode={"stretch"}
                                        style={{
                                            width: 18,
                                            height: 18,
                                            marginRight: 8,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: "#000000",
                                            fontSize: getFontSize(10),
                                        }}>
                                        {"4.5"}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: 135,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#ffffff",
                                        borderRadius: 15,
                                        paddingVertical: 4,
                                    }}>
                                    <Image
                                        source={require("../../../assets/images/email.png")}
                                        resizeMode={"stretch"}
                                        style={{
                                            width: 18,
                                            height: 18,
                                            marginRight: 8,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: "#000000",
                                            fontSize: getFontSize(10),
                                        }}>
                                        {"rubina@gmail.com"}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: 120,
                                        alignItems: "center",
                                        backgroundColor: "#ffffff",
                                        borderRadius: 15,
                                        paddingVertical: 7,
                                    }}>
                                    <Text
                                        style={{
                                            color: "#000000",
                                            fontSize: getFontSize(10),
                                        }}>
                                        {"11th Jan - 20th jan 24"}
                                    </Text>
                                </View>
                            </View>
                        </View>




                    </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={{ width: 70, marginHorizontal: 10 }}>
                    <Image
                        source={{uri:image}}
                        resizeMode={"stretch"}
                        style={{
                            borderRadius: 35,
                            width: 70,
                            height: 70,
                        }}
                    />
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 12,
                            textAlign: "center",
                        }}>
                        {name}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}



const styles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        bottom: 0,
    },
    modalView: {
        width: width * 0.90,
        marginLeft: responsiveMargin(5.5),
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: responsiveMargin(1.5),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        top:5,
        right:5,
        position:'absolute',
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        zIndex:1,
    },
    buttonOpen: {
        backgroundColor: 'white',
    },
    buttonClose: {
        backgroundColor: Base_Color,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});


