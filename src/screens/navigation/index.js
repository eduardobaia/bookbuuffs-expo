import { View, Text } from 'react-native'
import React, {useContext, useState}  from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import ConfirmEmailScreen from '../ConfirmEmailScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import NewPasswordScreen from '../NewPasswordScreen';
import HomeScreen from '../HomeScreen';
 
import { AuthContext } from '../../context/AuthContext';
import Home from '../Home';
 
const Stack = createNativeStackNavigator();


const Navigation = () => {



  const {userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown:false}}>
      {userInfo.authenticationToken ?
       ( <Stack.Screen name="Home2" component={HomeScreen} /> ) 
       : (
         <>
       <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="Home" component={Home} /> 
         </>
        ) }   
     
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation