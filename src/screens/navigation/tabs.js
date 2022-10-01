import React from 'react'
import {Image, TouchableOpacityBase} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Home } from "../screens/";
import { icons, COLORS } from "../../../constants";
 import HomeScreen from '../HomeScreen';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
 
const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: COLORS.black
    }
}


const Tabs = () => {
    return (
        <Tab.Navigator
        tabOptions={tabOptions}
        screenOptions={ ({ route }) => ({
        tabBarIcon: ({focused} )  => {
            const tintColor = focused ? COLORS.white : COLORS.gray;

                switch(route.name) {
                    case "Home":
                        return (
                            <Image
                            source={icons.dashboard_icon}
                            resizeMethod="contain"
                            style={{
                                tintColor: tintColor,
                                width: 25,
                                height:25
                            }}
                            />
                        )

                        case "Search":
                            return (
                                <Image
                                source={icons.search_icon}
                                resizeMethod="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height:25
                                }}
                                />
                            )

                            case "Notification":
                                return (
                                    <Image
                                    source={icons.notification_icon}
                                    resizeMethod="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height:25
                                    }}
                                    />
                                )

                                case "Settings":
                                    return (
                                        <Image
                                        source={icons.menu_icon}
                                        resizeMethod="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height:25
                                        }}
                                        />
                                    )
                }

        }      
        })}
        >

        <Tab.Screen
        name='Home'
        component={HomeScreen}
        />

        <Tab.Screen
        name='Search'
        component={SignUpScreen}
        />
{/* 
        <Tab.Screen
        name='Notification'
        component={HomeScreen}
        />

        <Tab.Screen
        name='Settings'
        component={HomeScreen}
        /> */}
        </Tab.Navigator>
    )
}


export default Tabs;