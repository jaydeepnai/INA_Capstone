import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
// import appointment_list from "../appointment_list";
import Appointment_complete from "./Appointment_complete";
import Appointment_list from "../appointment_list";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const HomeTopTab = createMaterialTopTabNavigator();
const Appointment = () => {
    return (
	<HomeTopTab.Navigator screenOptions={{ headerShown:false }}>
        <HomeTopTab.Screen name="Pandding" component={Appointment_list} />
        <HomeTopTab.Screen name="Complated" component={Appointment_complete} />
    </HomeTopTab.Navigator>)
}
export default Appointment;