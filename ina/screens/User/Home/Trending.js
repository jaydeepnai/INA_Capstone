import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Categories from '../../../components/User/Home/Categories'
import TopNGOList from '../../../components/User/Home/TopNGOList'
import BrowseNGO from '../../../components/User/Home/BrowseNGO'
import Achievers from '../../../components/User/Home/Achievers'
import TopServices from '../../../components/User/Home/TopServices'
import TopPosts from '../../../components/User/Home/TopPosts'
import TopAchievers from '../../../components/User/Home/TopAchievers'
import { Events } from '../../../components/User/Home/EventCarousel'
import { useNavigation } from '@react-navigation/native'


const Trending = () => {
	const navigation = useNavigation()
	return (
		<ScrollView>
			<Events />
			<Categories />


			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginBottom: 32,
					marginHorizontal: 20,
				}}>
				<Text
					style={{
						color: "#000000",
						fontSize: 20,
						marginRight: 4,
						flex: 1,
					}}>
					{"TOP POVERTY NGO "}
				</Text>
				<TouchableOpacity onPress={()=>{
					navigation.navigate("NGOResult");
				}}>
				<Text
					style={{
						color: "#679D0A",
						fontSize: 12,
					}}>
					{"See All"}
				</Text>
				</TouchableOpacity>
			</View>


			<TopNGOList>
			</TopNGOList>
			<BrowseNGO />

			<View style={{
                flex:1,
                flexDirection:'row',
                alignItems:'center',
            }}>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 20,
                        margin: 10,
                        marginHorizontal: 15,
                    }}>
                    TOP ACHIEVERS OF THE MONTH
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate("TopAchievers")}>
                    <Text
                        style={{
                            textAlign: "center",
                            marginRight: 20,
                            color: "green",
                        }}
                    >
                        See All
                    </Text>
                </TouchableOpacity>
            </View>


			<Achievers />
			<TopServices />
			<TopPosts />
		</ScrollView>
	)
}

export default Trending

const styles = StyleSheet.create({})


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Trending = () => {
//   return (
// 	<View>
// 	  <Text>Trending</Text>
// 	</View>
//   )
// }

// export default Trending

// const styles = StyleSheet.create({})