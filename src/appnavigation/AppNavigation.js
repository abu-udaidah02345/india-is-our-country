import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MenuScreen from '../screens/MenuScreen';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Account from '../screens/Account';
import Video from '../screens/Video';
import Tabs from './Tabs';
import ContactUs from '../screens/account/ContactUs';
import AboutUs from '../screens/account/AboutUs';
import Notification from '../screens/account/Notification';
import Settings from '../screens/account/Settings';
import Blog from '../screens/account/Blog';
import TransActionHistory from '../screens/account/TransActionHistory';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Set headerShown to false for all screens
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen
          name="TransActionHistory"
          component={TransActionHistory}
        />

        <Stack.Screen name="MenuScreen" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
