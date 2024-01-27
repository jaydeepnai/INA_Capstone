
import React from "react";
import Categories from "../../../components/NGO/Home/Categories";
import Achievers from "../../../components/NGO/Home/Achievers";
import Fundraised from "../../../components/NGO/Home/fundraised";
import { ScrollView } from "react-native";

const Homescreen = () => {
  return (
    <ScrollView>
      <Categories /> 
      <Achievers />
      <Fundraised />
    </ScrollView>
  );
};
export default Homescreen;
