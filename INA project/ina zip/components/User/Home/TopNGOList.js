import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Base_Color } from '../../../lib/React Query/variables'
import { AntDesign, Feather } from '@expo/vector-icons'

const TopNGOList = () => {
    return (
        <View style={{marginTop:-10}}>
                <NGOCard 
                image={"https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                logo={"https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                ngoName= {"GreenGrowth Learning "}
                aim={"Empowering communities through sustainable agriculture "}
                />
                <NGOCard 
                logo={"https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                image={"https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                ngoName= {"NourishNexus Foundation"}
                aim={"Connecting agriculture and education to combat"}
                />
                <NGOCard 
                logo={"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                image={"https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                ngoName= {"Cultivate Initiative"}
                aim={"Fostering agricultural skills and knowledge"}
                />
        </View>
    )
}

export default TopNGOList

const styles = StyleSheet.create({})


const NGOCard = ({image,logo,ngoName,aim}) => {
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
                <Image 
                source={{uri:image}}
                    resizeMode={"cover"}
                    style={{
                        borderRadius: 10,
                        height: 175,
                        width: "100%"
                    }} />
                <Image  source={{uri:logo}}
                    resizeMode={"stretch"}
                    style={{
                        position: "absolute",
                        bottom: -50,
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
                {ngoName}
            </Text>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 10,
                    marginLeft: 95,
                    bottom: 10,
                }}>
                    {aim}
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
