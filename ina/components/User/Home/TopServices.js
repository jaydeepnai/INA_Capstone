import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopServices = () => {
  return (
    <View>
      		<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 5,
						marginHorizontal: 24,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 20,
							marginRight: 4,
							flex: 1,
						}}>
						{"TOP SERVICES BY NGOs "}
					</Text>
					<Text 
						style = {{
							color: "#679D0A",
							fontSize: 12,
						}}>
						{"See All"}
					</Text>
			</View>
            <Service/>
            <Service/>
            <Service/>
            <Service/>
    </View>
  )
}

export default TopServices

const Service = ()=>{
    return (
        <View style = {{
						width: "auto",
						height: 122,
                        margin:10,
                        marginHorizontal:20
					}}>
						
					<View 
						style = {{
							backgroundColor: "white",
							borderRadius: 10,
							paddingVertical: 23,
							paddingHorizontal: 15,
							flexDirection:"row"
						}}>
							<View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 13,
							}}>
							{"ADOPTION"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 11,
								width: 334,
							}}>
							{"Our NGOated to facilitating animal \nadoption, connecting compassionate individuals \nwith rescue animals in search of loving homes."}
						</Text>
							</View>
					<Image
					source={require("../../../assets/NGOanimated.png")}
					resizeMode="contain"
					style={{
						borderRadius: 10,
						height:100,
						width: 100,
					}}/>
					</View>
				</View>
    )
}