import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Trending from "../screens/NGO/Home/Trending";
import Foryou from "../screens/NGO/Home/Foryou";


const NGOTopTabs = createMaterialTopTabNavigator();

export function NGOTopTab() {
    return (
      <NGOTopTabs.Navigator screenOptions={{ headerShown:false }}>
        <NGOTopTabs.Screen name="Trending" component={Trending} />
        <NGOTopTabs.Screen name="ForYou" component={Foryou} />
      </NGOTopTabs.Navigator>
    );
  }

