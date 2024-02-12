import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
// import appointment_list from "../appointment_list";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Appointment_list_ngo from "./Appointment_list_ngo";
import Appointment_com_ngo from "./Appointment_com_ngo";

const HomeTopTab = createMaterialTopTabNavigator();
const Appointment_ngo = () => {
    return (
	<HomeTopTab.Navigator screenOptions={{ headerShown:false }}>
        <HomeTopTab.Screen name="Pandding" component={Appointment_list_ngo} />
        <HomeTopTab.Screen name="Complated" component={Appointment_com_ngo} />
    </HomeTopTab.Navigator>)
}
export default Appointment_ngo;