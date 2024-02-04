import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Pressable, Alert, Modal, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getFontSize, responsiveMargin } from '../../../lib/Validation/RelativeValues'




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
                    }}>
                    <Achiever />
                    <Achiever />
                    <Achiever />
                    <Achiever />
                    <Achiever />
                    <Achiever />
                    <Achiever />
                    <Achiever />
                    <Achiever />
                    <Achiever />
                    <Achiever />
                    <Achiever />
                </ScrollView>
            </View>
        </View>
    )
}

export default Achievers





const Achiever = () => {
    
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
                        
                        

                <View
                    style={{
                        backgroundColor: "#f2f3f7",
                        borderRadius: 15,
                        paddingVertical: 14,
                        marginBottom: responsiveMargin(3),
                        marginHorizontal: responsiveMargin(4),
                        
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: responsiveMargin(4),
                            marginHorizontal:responsiveMargin(7),
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
                                paddingRight:responsiveMargin(16)
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
                            source={require("../../../assets/images/TopAchievers/Achiever1.jpg")}
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
                                        borderRadius:100,
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
                                    {"Naishal Modi"}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize:  getFontSize(10),
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
                                paddingRight:responsiveMargin(5)
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
                            paddingTop:responsiveMargin(2)
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

                        

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>  CLOSE  </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={{ width: 70, marginHorizontal: 10 }}>
                <Image
                    source={require("../../../assets/NGO/me.jpg")}
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
                    Aniket
                </Text>
            </View>
        </TouchableOpacity>
        </View>
        
    )
}



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
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
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
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


