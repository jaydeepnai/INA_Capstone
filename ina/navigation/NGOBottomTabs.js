import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import HeaderLeft, { HeaderRight } from '../components/User/Home/Header/Header';
import Trending from '../screens/User/Home/Trending';
import Search from '../screens/User/Search/Search';
// import Profile from '../screens/User/Profile/Profile';
import DonationList from '../screens/User/Donation/DonationList';
import FundReqList from '../screens/User/FundReq/FundList';
import { DonationTopTabs } from './DonationTopTab';
import { NGOTopTab } from './NGOTopTab';
import Master_profile from '../screens/NGO/profile/Master_profile';
// import Master_profile from '../screens/NGO/profile/master_profile';
const Tab = createBottomTabNavigator();


export function NGOBottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="NGOHome1"
          component={NGOTopTab}
          options={{
            tabBarLabel: "Home",
            headerShown: true,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#2bc5b4" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
              headerLeft : ()=><HeaderLeft/>,
              headerRight : ()=><HeaderRight/>,
              headerTitleAlign : "center",
              title:'NGO Home'
          }}
        />

        <Tab.Screen
          name="UserSearch"
          component={Search}
          options={{
            tabBarLabel: "Search",
            headerShown:false,
            tabBarLabelStyle: { color: "#008E97" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="search" size={24} color="#2bc5b4"/>
              ) : (
                <AntDesign name="search1" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="UserDonation"
          component={DonationList}
          options={{
            tabBarLabel: "Donation",
            headerShown: true,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="attach-money" size={24} color="#2bc5b4" />
              ) : (
                <MaterialIcons name="attach-money" size={24} color="black" />
              ),
              // headerLeft : ()=><HeaderLeft/>,
              // headerRight : ()=><HeaderRight/>,
              headerTitleAlign : "center",
              title:"Donation List"
          }}
        />
        <Tab.Screen
          name="FundReq"
          component={DonationTopTabs}
          options={{
            tabBarLabel: "Funds",
            headerShown: true,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="piggy-bank" size={24} color="#2bc5b4" />
              ) : (
                <MaterialCommunityIcons name="piggy-bank" size={24} color="black" />
              ),
              headerLeft : ()=><HeaderLeft/>,
              headerRight : ()=><HeaderRight/>,
              headerTitleAlign : "center"
          }}
        />

       
          <Tab.Screen
          name="Master_profile"
          component={Master_profile}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "black" },
            
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="user-circle-o" size={24} color="#2bc5b4"/>
              ) : (
                // <FontAwesome name="user-o" size={24} color="black" />
                <FontAwesome name="user-circle-o" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
