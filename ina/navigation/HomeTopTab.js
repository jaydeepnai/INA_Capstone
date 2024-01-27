import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Trending from "../screens/User/Home/Trending";
import Foryou from "../screens/User/Home/Foryou";

const HomeTopTab = createMaterialTopTabNavigator();
export function HomeTopTabs() {
    return (
      <HomeTopTab.Navigator screenOptions={{ headerShown:false }}>
        <HomeTopTab.Screen name="Trending" component={Trending} />
        <HomeTopTab.Screen name="ForYou" component={Foryou} />
      </HomeTopTab.Navigator>
    );
  }