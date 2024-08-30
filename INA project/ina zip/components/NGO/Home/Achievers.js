import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Achievers = () => {
    return (
        <View>
            <Text
                style={{
                    color: "#000000",
                    fontSize: 20,
                    margin: 10,
                    marginHorizontal: 15,
                }}>
                TOP ACHIEVERS OF THE MONTH
            </Text>
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
                            {/* <Achiever/>
                            <Achiever/>
                            <Achiever/>
                            <Achiever/>
                            <Achiever/>
                            <Achiever/>
                            <Achiever/>
                            <Achiever/>
                            <Achiever/>
                            <Achiever/>
                            <Achiever/>
                            <Achiever/> */}
                        </ScrollView>
            </View>
        </View>
    )
}

export default Achievers

const styles = StyleSheet.create({})


