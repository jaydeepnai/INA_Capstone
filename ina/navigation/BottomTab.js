import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTopTabs } from './HomeTopTab';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, FontAwesome6, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import HeaderLeft, { HeaderRight } from '../components/User/Home/Header/Header';
import Trending from '../screens/User/Home/Trending';
import Search from '../screens/User/Search/Search';
import Profile from '../screens/User/Profile/Profile';
import DonationList from '../screens/User/Donation/DonationList';
import FundReqList from '../screens/User/FundReq/FundList';
import { DonationTopTabs } from './DonationTopTab';

const Tab = createBottomTabNavigator();


export function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="UserHome"
          component={HomeTopTabs}
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
              headerTitleAlign : "center"
          }}
        />

        <Tab.Screen
          name="UserSearch"
          component={Search}
          options={{
            tabBarLabel: "Search",
            headerShown:false,
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
        
        {/* <Tab.Screen
          name="UserVollunteer"
          component={UserHome}
          options={{
            tabBarLabel: "Vollunteer",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="shoppingcart" size={24} color="#008E97" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
          }}
        /> */}

          <Tab.Screen
          name="UserProfile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Fontisto name="person" size={24} color="#2bc5b4" />
              ) : (
                <Fontisto name="person" size={24} color="black" />

              ),
              // headerLeft : ()=><HeaderLeft/>,
              // headerRight : ()=><HeaderRight/>,
              // headerTitleAlign : "center"
          }}
        />
      </Tab.Navigator>
    );
  }