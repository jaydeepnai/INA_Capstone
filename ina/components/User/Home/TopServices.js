import { StyleSheet, Text, View } from 'react-native'
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

const styles = StyleSheet.create({})

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
						}}>
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
							{"Our NGO is dedicated to facilitating animal \nadoption, connecting compassionate individuals \nwith rescue animals in search of loving homes."}
						</Text>
					</View>
					<View 
						style = {{
							position: "absolute",
							bottom: -4,
							right: -12,
							width: 136,
							height: 126,
							borderColor: "#5E27FD",
							borderWidth: 1,
						}}>
					</View>
				</View>
    )
}