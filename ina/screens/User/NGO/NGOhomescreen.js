import React from "react";
import NGOCategories from "../../../components/NGO/Home/NGOCategories";
import Achievers from "../../../components/NGO/Home/Achievers";
import Fundraised from "../../../components/NGO/Home/fundraised";
import { ScrollView } from "react-native";

const Homescreen = () => {
  return (
    <ScrollView>
      <NGOCategories /> 
      <Achievers />
      <Fundraised />
    </ScrollView>
  );
};

export default Homescreen;
