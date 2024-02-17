import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Base_Color } from '../../../lib/React Query/variables'
import { AntDesign, Feather } from '@expo/vector-icons'

const TopNGOList = () => {
    return (
        <View style={{marginTop:-10}}>
                <NGOCard />
                <NGOCard />
                <NGOCard />
        </View>
    )
}

export default TopNGOList

const styles = StyleSheet.create({})


const NGOCard = () => {
    const navigation = useNavigation()

    return (
    <TouchableOpacity
        onPress={()=> navigation.navigate("NGOProfile")}
        style={{
            backgroundColor: "white",
            borderRadius: 15,
            paddingVertical: 15,
            paddingHorizontal: 10,
            marginBottom: 15,
            marginHorizontal: 20,
            elevation: 4
        }}>
        <View>
            <View style={{ marginBottom: 15, }}>
                <Image source={require("../../../assets/animals.jpg")}
                    resizeMode={"cover"}
                    style={{
                        borderRadius: 10,
                        height: 175,
                        width: "100%"
                    }} />
                <Image source={require("../../../assets/ngologo.jpg")}
                    resizeMode={"stretch"}
                    style={{
                        position: "absolute",
                        bottom: -40,
                        left: 2,
                        borderRadius: 50,
                        width: 90,
                        height: 90,
                        borderColor: "white",
                        borderWidth: 5
                    }}
                />
            </View>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 15,
                    marginLeft: 95,
                    bottom: 10,
                }}>
                ANIMAL FRIENDS UNITED
            </Text>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 10,
                    marginLeft: 95,
                    bottom: 10,
                }}>
                {"Empowering Paws, Enriching Lives"}
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Base_Color,
                            borderRadius: 30,
                            padding: 5,
                        }}>
                        <AntDesign name="star" size={20} color="white" />
                        <Text
                            style={{
                                color: "white",
                                fontSize: 17,
                            }}>
                            {"4.0"}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Base_Color,
                            borderRadius: 30,
                            padding: 7,
                        }}>
                        <AntDesign name="clockcircle" size={15} color="white" />
                        <Text
                            style={{
                                color: "white",
                                fontSize: 17,
                                paddingLeft:4
                            }}>
                            {"10am - 6pm"}
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            backgroundColor: Base_Color,
                            borderRadius: 30,
                            padding: 5,
                            flexDirection: "row",
                            // paddingLeft:4
                        }}>
                        <Feather name="map-pin" size={15} color="white" />
                        <Text
                            style={{
                                color: "white",
                                fontSize: 17,
                                paddingLeft:4
                            }}>
                            {"Maninagar"}
                        </Text>
                    </View>
            </View>
        </View>
    </TouchableOpacity>
)}
