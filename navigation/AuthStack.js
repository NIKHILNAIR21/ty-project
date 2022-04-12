import React ,{useState , useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import {View} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const AuthStack = () =>{
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    useEffect(() =>{
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if(value == null){
                AsyncStorage.setItem('alreadyLaunched','true');
                setIsFirstLaunch(true);   
            } else{
                setIsFirstLaunch(false);
            }
            });
            GoogleSignin.configure({
              webClientId: '515294121177-6rr7rpeofdafd8v361rib2f1u4b61r39.apps.googleusercontent.com',
            });
    }, []);
   
    if (isFirstLaunch === null) {
        return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
      } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
      } else {
        routeName = 'Login';
      }
    
      return (
        <Stack.Navigator initialRouteName={routeName}>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{header: () => null}}
          />
             <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      );
}
export default AuthStack;