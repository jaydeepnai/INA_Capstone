import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MasterAuth from '../screens/Auth/MasterAuth';
import LoginAuth from '../screens/Auth/LoginAuth';
import RegisterUserAuth from '../screens/Auth/RegisterUserAuth';
import RegisterNgoAuth from '../screens/Auth/RegisterNgoAuth';
import UserHome  from '../screens/User/Home/Home';
import NGOHome from '../screens/NGO/Home/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group name="Auth" screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' },  headerShown: false }}>
          <Stack.Screen name="MasterAuth" component={MasterAuth} />
          <Stack.Screen name="LoginAuth" component={LoginAuth} />
          <Stack.Screen name="UserRegisterAuth" component={RegisterUserAuth} />
          <Stack.Screen name="NGORegisterAuth" component={RegisterNgoAuth} />
        </Stack.Group>
        <Stack.Group name="UserAPP" screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }}}>
          <Stack.Screen name="UserHome" component={UserHome} />
        </Stack.Group>
        <Stack.Group name="NGOAPP" screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }}}>
          <Stack.Screen name="NGOHome" component={NGOHome} />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
