import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MasterAuth from '../screens/Auth/MasterAuth';
import LoginAuth from '../screens/Auth/LoginAuth';
import RegisterUserAuth from '../screens/Auth/RegisterUserAuth';
import RegisterNgoAuth from '../screens/Auth/RegisterNgoAuth';
import NGOHome from '../screens/NGO/Home/Home';
import { BottomTabs } from './BottomTab';
import NGOProfile from '../screens/User/NGO/NGOProfile';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{presentation:"containedModal"}}>
          <Stack.Screen name="User" component={BottomTabs}  options={{headerShown:false}} />
          <Stack.Screen name="MasterAuth" component={MasterAuth} />
          <Stack.Screen name="LoginAuth" component={LoginAuth} />
          <Stack.Screen name="UserRegisterAuth" component={RegisterUserAuth} />
          <Stack.Screen name="NGORegisterAuth" component={RegisterNgoAuth} />
          <Stack.Screen name="NGOHome" component={NGOHome} />
          <Stack.Screen name="NGOProfile" component={NGOProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
