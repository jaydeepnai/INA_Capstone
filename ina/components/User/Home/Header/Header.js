import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const HeaderLeft = () => {
  return (
    <View
    style = {{
      flexDirection: "row",
      margin:10
    }}>
     <Avatar.Image
          source={require("../../../../assets/logo.png")}
          size={60}
          style={{ marginTop: 10,backgroundColor: "white"}}
        />
    </View>
  )
}

export default HeaderLeft

const HeaderRight = () => {
    return (
      <View
      style = {{
        flexDirection: "row",
        margin:10
      }}>
       <Avatar.Image
            source={require("../../../../assets/profile.jpg")}
            size={40}
            style={{ marginTop: 5,backgroundColor: "white"}}
          />
      </View>
    )
  }
  
export {HeaderRight}

const styles = StyleSheet.create({})