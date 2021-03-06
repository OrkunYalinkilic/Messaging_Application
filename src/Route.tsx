import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import { Header } from 'react-native/Libraries/NewAppScreen';

/* 
const AppStack = createStackNavigator({
    HomeIndex: {
        screen: HomeIndex
    }
}) */

const AuthenticateStack = createStackNavigator({
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
    Home: {
        screen: Home,
        

    }
});
/* 
const SwitchNavigator = createSwitchNavigator({
    Auth: AuthenticateStack,
    AuthRedirect,
    App: AppStack
}, {
    initialRouteName: 'AuthRedirect'
}) */

export default createAppContainer(AuthenticateStack);
