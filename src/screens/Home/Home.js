import React from 'react'
import { AuthContext } from '../../context/AuthContext';
 import Tabs from "../../screens/navigation/tabs";
 
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


const Stack =createNativeStackNavigator();


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}


function Home() {
  return (
    <>
{/* <NavigationContainer theme={theme}> */}
<Stack.Navigator theme={theme}
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
  <Stack.Screen name="Home" component={Tabs} options={{  headerShown: false}} />

    </Stack.Navigator>

    </>
  )
}

export default Home