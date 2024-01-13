import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../../../components/User/Home/Categories'
import TopNGOList from '../../../components/User/Home/TopNGOList'
import BrowseNGO from '../../../components/User/Home/BrowseNGO'
import Achievers from '../../../components/User/Home/Achievers'
import TopServices from '../../../components/User/Home/TopServices'
import TopPosts from '../../../components/User/Home/TopPosts'
import { Events } from '../../../components/User/Home/EventCarousel'

const Trending = () => {
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
				<Text
					style={{
						color: "#679D0A",
						fontSize: 12,
					}}>
					{"See All"}
				</Text>
			</View>
			<TopNGOList>
			</TopNGOList>
			<BrowseNGO />
			<Achievers />
			<TopServices />
			<TopPosts />
		</ScrollView>
	)
}

export default Trending

const styles = StyleSheet.create({})