import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text } from "react-native";
import { Service } from "../../../components/User/Home/TopServices";

export default ServiceList = (props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "whitesmoke",
          // paddingTop: 20,
          // paddingBottom: 171,
          // paddingHorizontal: 24,
        }}
      >

        <Service/>
        <Service/>
        <Service/>
        <Service/>
        <Service/>
        <Service/>
        <Service/>
      </ScrollView>
    </SafeAreaView>
  );
};
