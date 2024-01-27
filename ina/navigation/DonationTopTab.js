import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ActiveFunds from "../screens/User/FundReq/ActiveFunds";
import ComplatedFunds from "../screens/User/FundReq/ComplatedFunds";

const HomeTopTab = createMaterialTopTabNavigator();
export function DonationTopTabs() {
    return (
      <HomeTopTab.Navigator screenOptions={{ headerShown:false }}>
        <HomeTopTab.Screen name="Active Funds" component={ActiveFunds} />
        <HomeTopTab.Screen name="Complated Funds" component={ComplatedFunds} />
      </HomeTopTab.Navigator>
    );
  }