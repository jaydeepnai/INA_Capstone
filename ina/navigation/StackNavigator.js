// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import MasterAuth from "../screens/Auth/MasterAuth";
// import LoginAuth from "../screens/Auth/LoginAuth";
// import RegisterUserAuth from "../screens/Auth/RegisterUserAuth";
// import RegisterNgoAuth from "../screens/Auth/RegisterNgoAuth";
// import NGOHome from "../screens/NGO/Home/Home";
// import { BottomTabs } from "./BottomTab";
// import NGOProfile from "../screens/User/NGO/NGOProfile";
// import NGOResults from "../screens/User/Search/NGOResults";
// import Homescreen from "../screens/User/NGO/NGOhomescreen";
// import Achievers from "../components/User/Home/Achievers";
// import EventDetails from "../components/User/Home/EventDetails";
// import Schedule from "../screens/User/Profile/Schedule";
// import Categories from "../screens/User/Home/Categories";
// import HeaderLeft, { HeaderRight } from "../components/User/Home/Header/Header";
// import ServiceList from "../screens/User/Home/ServiceList";
// import CreateFund from "../screens/User/FundReq/CreateFund";
// import NGOTotalImages from "../screens/User/NGO/NGOTotalImages";
// import NGOService from "../screens/User/NGO/NGOService";
// import WorkHistory from "../screens/User/Profile/WorkHistory";
// import TopAchievers from "../components/User/Home/TopAchievers";
// import Appointment from "../components/User/Home/Appointment";
// import Edit_screen from "../components/Edit_screen";
// import NGOImage from "../screens/User/NGO/NGOImage";
// import { NGOBottomTabs } from "./NGOBottomTabs";
// import HiringResult from "../screens/NGO/Hiring/HiringResult";
// import Edit_screen_ngo from "../screens/NGO/profile/Edit_screen_ngo";
// import work_history_ngo from "../screens/NGO/profile/work_history_ngo";
// import schedule_ngo from "../screens/NGO/profile/Schedule_ngo";
// import Appointment_ngo from "../screens/NGO/profile/Appointment_ngo";
// import Appointment_list_ngo from "../screens/NGO/profile/Appointment_list_ngo";
// import Appointment_com_ngo from "../screens/NGO/profile/Appointment_com_ngo";
// import Create_event from "../screens/NGO/Plans/Create_event";
// import FormCheck from "../screens/NGO/Home/FormCheck";
// import Post_reivew from "../components/User/Home/Post_reivew";
// import FilterPopUp from "../screens/User/Search/FilterPopUp";
// const Stack = createNativeStackNavigator();

// const StackNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         screenOptions={{ presentation: "containedModal", headerShown: false }}
//       >
//         <Stack.Screen name="User" component={BottomTabs} />
//         <Stack.Screen name="NGO" component={NGOBottomTabs} />
        
        
//         <Stack.Screen name="NGOImage" options={{
//           headerShown: true,
//           headerTitleAlign: "center",
//         }} component={NGOImage} />
//           headerShown: true,
//           headerTitleAlign: "center",
//         }} component={NGOImage} />
//         <Stack.Screen name="Homescreen" component={Homescreen} />
//         <Stack.Screen
//           name="Categories"
//           options={{
//             headerShown: true,
//             headerTitleAlign: "center",
//           }}
//           component={Categories}
//         />

//         <Stack.Screen
//           name="ServiceList"
//           options={{
//             headerShown: true,
//             headerTitleAlign: "center",
//             title: "Services"
//           }}
//           component={ServiceList}
//         />
        
//         <Stack.Screen name="Achievers" component={Achievers} />
//         <Stack.Screen name="NGOResult" component={NGOResults} options={{ headerShown: false }}/>

//         <Stack.Screen name="UserSchedule" component={Schedule} />
//         <Stack.Screen name="EventDetails" component={EventDetails} />
//         <Stack.Screen name="NGOServiceDetails" component={NGOService} />
//         <Stack.Screen name="CreateFund" component={CreateFund} />
//         <Stack.Screen name="MasterAuth" component={MasterAuth} />
//         <Stack.Screen name="Edit_screen" component={Edit_screen} />
//         <Stack.Screen name="UserRegisterAuth" component={RegisterUserAuth} />
//         <Stack.Screen name="NGORegisterAuth" component={RegisterNgoAuth} />
//         <Stack.Screen name="Create_event" component={Create_event} />

//         {/* ngo edit screen */}
//         <Stack.Screen name="Edit_screen_ngo" component={Edit_screen_ngo} />
//         <Stack.Screen name="work_history_ngo" component={work_history_ngo} />
//         <Stack.Screen name="schedule_ngo" component={schedule_ngo} />
//         <Stack.Screen name="Appointment_ngo" component={Appointment_ngo} />
//         <Stack.Screen name="Appointment_list_ngo" component={Appointment_list_ngo} />
//         <Stack.Screen name="Appointment_com_ngo" component={Appointment_com_ngo} />

//         <Stack.Screen name="LoginAuth" component={LoginAuth} />

//         <Stack.Screen name="FilterPopUp" component={FilterPopUp} />










//         <Stack.Screen name="Post_reivew" options={{
//           headerShown: true,
//         }} component={Post_reivew} />
        









        
//         <Stack.Screen name="NGOProfile" component={NGOProfile} />
//         <Stack.Screen name="HiringResult" component={HiringResult} />
//         <Stack.Screen name="HiringResult" component={HiringResult} />

//         <Stack.Screen name="Appointment" options={{
//           headerShown: true,
//         }} component={Appointment} />

//         <Stack.Screen name="NGOTotalImages" component={NGOTotalImages} options={{
//           headerShown: true,
//           headerTitleAlign: "center",
//           title: 'NGO IMAGES'
//         }} />

//         <Stack.Screen name="WorkHistory" component={WorkHistory} options={{
//           headerShown: true,
//           headerTitleAlign: "center",
//           title: 'USER WORKHISTORY'
//         }} />
//         }} />


//         <Stack.Screen name="TopAchievers" component={TopAchievers} options={{
//           headerShown: true,
//           // headerLeft: () => <HeaderLeft />,
//           // headerRight: () => <HeaderRight />,
//           headerTitleAlign: "center",
//           title: 'TOP ACHIEVERS'
//         }}
//         />
//         <Stack.Screen name="TopAchievers" component={TopAchievers} options={{
//           headerShown: true,
//           // headerLeft: () => <HeaderLeft />,
//           // headerRight: () => <HeaderRight />,
//           headerTitleAlign: "center",
//           title: 'TOP ACHIEVERS'
//         }}
//         />
        

//       </Stack.Navigator>
// </NavigationContainer>
//   );
// };

// export default StackNavigator;



















import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MasterAuth from "../screens/Auth/MasterAuth";
import LoginAuth from "../screens/Auth/LoginAuth";
import RegisterUserAuth from "../screens/Auth/RegisterUserAuth";
import RegisterNgoAuth from "../screens/Auth/RegisterNgoAuth";
import NGOHome from "../screens/NGO/Home/Home";
import { BottomTabs } from "./BottomTab";
import NGOProfile from "../screens/User/NGO/NGOProfile";
import NGOResults from "../screens/User/Search/NGOResults";
import Homescreen from "../screens/User/NGO/NGOhomescreen";
import Achievers from "../components/User/Home/Achievers";
import EventDetails from "../components/User/Home/EventDetails";
import Schedule from "../screens/User/Profile/Schedule";
import Categories from "../screens/User/Home/Categories";
import HeaderLeft, { HeaderRight } from "../components/User/Home/Header/Header";
import ServiceList from "../screens/User/Home/ServiceList";
import CreateFund from "../screens/User/FundReq/CreateFund";
import NGOTotalImages from "../screens/User/NGO/NGOTotalImages";
import NGOService from "../screens/User/NGO/NGOService";
import WorkHistory from "../screens/User/Profile/WorkHistory";
import TopAchievers from "../components/User/Home/TopAchievers";
import Appointment from "../components/User/Home/Appointment";
import Edit_screen from "../components/Edit_screen";
import NGOImage from "../screens/User/NGO/NGOImage";
import { NGOBottomTabs } from "./NGOBottomTabs";
import HiringResult from "../screens/NGO/Hiring/HiringResult";
import Edit_screen_ngo from "../screens/NGO/profile/Edit_screen_ngo";
import work_history_ngo from "../screens/NGO/profile/work_history_ngo";
import schedule_ngo from "../screens/NGO/profile/Schedule_ngo";
import Appointment_ngo from "../screens/NGO/profile/Appointment_ngo";
import Appointment_list_ngo from "../screens/NGO/profile/Appointment_list_ngo";
import Appointment_com_ngo from "../screens/NGO/profile/Appointment_com_ngo";
import Create_event from "../screens/NGO/Plans/Create_event";
import FormCheck from "../screens/NGO/Home/FormCheck";
import Post_reivew from "../components/User/Home/Post_reivew";
import FilterPopUp from "../screens/User/Search/FilterPopUp";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ presentation: "containedModal", headerShown: false }}
      >
        <Stack.Screen name="User" component={BottomTabs} />
        <Stack.Screen name="NGO" component={NGOBottomTabs} />


        <Stack.Screen name="NGOImage" options={{
          headerShown: true,
          headerTitleAlign: "center",
        }} component={NGOImage} />
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen
          name="Categories"
          options={{
            headerShown: true,
            headerTitleAlign: "center",
          }}
          component={Categories}
        />

        <Stack.Screen
          name="ServiceList"
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            title: "Services"
          }}
          component={ServiceList}
        />

        <Stack.Screen name="Achievers" component={Achievers} />
        <Stack.Screen name="NGOResult" component={NGOResults} options={{ headerShown: false }} />

        <Stack.Screen name="UserSchedule" component={Schedule} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
        <Stack.Screen name="NGOServiceDetails" component={NGOService} />
        <Stack.Screen name="CreateFund" component={CreateFund} />
        <Stack.Screen name="MasterAuth" component={MasterAuth} />
        <Stack.Screen name="Edit_screen" component={Edit_screen} />
        <Stack.Screen name="UserRegisterAuth" component={RegisterUserAuth} />
        <Stack.Screen name="NGORegisterAuth" component={RegisterNgoAuth} />
        <Stack.Screen name="Create_event" component={Create_event} />

        {/* ngo edit screen */}
        <Stack.Screen name="Edit_screen_ngo" component={Edit_screen_ngo} />
        <Stack.Screen name="work_history_ngo" component={work_history_ngo} />
        <Stack.Screen name="schedule_ngo" component={schedule_ngo} />
        <Stack.Screen name="Appointment_ngo" component={Appointment_ngo} />
        <Stack.Screen name="Appointment_list_ngo" component={Appointment_list_ngo} />
        <Stack.Screen name="Appointment_com_ngo" component={Appointment_com_ngo} />

        <Stack.Screen name="LoginAuth" component={LoginAuth} />

        <Stack.Screen name="FilterPopUp" component={FilterPopUp} />



        <Stack.Screen name="Post_reivew" options={{
          headerShown: true,
        }} component={Post_reivew} />


        <Stack.Screen name="NGOProfile" component={NGOProfile} />
        <Stack.Screen name="HiringResult" component={HiringResult} />

        <Stack.Screen name="Appointment" options={{
          headerShown: true,
        }} component={Appointment} />

        <Stack.Screen name="NGOTotalImages" component={NGOTotalImages} options={{
          headerShown: true,
          headerTitleAlign: "center",
          title: 'NGO IMAGES'
        }} />

        <Stack.Screen name="WorkHistory" component={WorkHistory} options={{
          headerShown: true,
          headerTitleAlign: "center",
          title: 'USER WORKHISTORY'
        }} />


        <Stack.Screen name="TopAchievers" component={TopAchievers} options={{
          headerShown: true,
          // headerLeft: () => <HeaderLeft />,
          // headerRight: () => <HeaderRight />,
          headerTitleAlign: "center",
          title: 'TOP ACHIEVERS'
        }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;