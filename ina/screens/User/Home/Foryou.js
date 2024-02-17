import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopPosts, { Post } from '../../../components/User/Home/TopPosts'

const Foryou = () => {
  return (
    <ScrollView style={{marginTop:20}}>
       <TopPosts/>
    </ScrollView>
  )
}

export default Foryou

const styles = StyleSheet.create({})