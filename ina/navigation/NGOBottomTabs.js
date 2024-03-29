import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import HeaderLeft, { HeaderRight } from '../components/User/Home/Header/Header';
import DonationList from '../screens/User/Donation/DonationList';
import { HiringSearch } from '../screens/NGO/Hiring/HiringFilter';
import { NGOTopTab } from './NGOTopTab';
import Plan from '../screens/NGO/Plans/Plan';
const Tab = createBottomTabNavigator();

export function NGOBottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="NGOHome2"
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
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
          headerTitleAlign: "center",
          title: 'NGO Home'
        }}
      />

        <Tab.Screen
          name="Hiring"
          component={HiringSearch}
          options={{
            tabBarLabel: "Hiring",
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
      <Tab.Screen
        name="Hiring"
        component={Search}
        options={{
          tabBarLabel: "Hiring",
          headerShown: false,
          tabBarLabelStyle: { color: "#008E97" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="hands-helping" size={24} color="#2bc5b4" />
            ) : (
              <FontAwesome5 name="hands-helping" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen
        name="NGODonation"
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
          headerTitleAlign: "center",
          title: "Donation List"
        }}
      />


      <Tab.Screen
        name="Plans"
        component={Plan}
        options={{
          tabBarLabel: "Plans",
          headerShown: true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="schedule-send" size={24} color="#2bc5b4" />
              ) : (
              <MaterialIcons name="schedule-send" size={24} color="#2bc5b4" />
            ),
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
          headerTitleAlign: "center"
        }}
      />

      <Tab.Screen
        name="Collabrations"
        component={Profile}
        options={{
          tabBarLabel: "Collabrations",
          tabBarLabelStyle: { color: "black" },

          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="people-carry" size={24} color="#2bc5b4" />
            ) : (
              <FontAwesome5 name="people-carry" size={24} color="black" />
            ),
        }}
      />

      {/* <Tab.Screen
        name="NGOProfile"
        component={Master_profile}
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "black" },

          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="user-circle-o" size={24} color="#2bc5b4" />
            ) : (
              // <FontAwesome name="user-o" size={24} color="black" />
              <FontAwesome name="user-circle-o" size={24} color="black" />
            ),
        }}
      /> */}


    </Tab.Navigator>
  );
  }
