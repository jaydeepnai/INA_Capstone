import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


// const Achievers = () => {

//     const navigation = useNavigation();
//     return (
//         <View>
//             <View style={{flexDirection:"row",alignItems:"center"}}>
//             <Text
//                 style={{
//                     color: "#000000",
//                     fontSize: 20,
//                     margin: 10,
//                     marginHorizontal: 15,
//                 }}>
//                 TOP ACHIEVERS OF THE MONTH
//             </Text>
//             <Text onPress={()=>{
//                 navigation.navigate("TopAchivers");
//             }} style={{
//                     color: "green",
//                 }}>
//                 See All
//             </Text>
//             </View>
//         </View>
//         )}


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

const styles = StyleSheet.create({})




const Achiever = () => {
    return (
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
    )
}