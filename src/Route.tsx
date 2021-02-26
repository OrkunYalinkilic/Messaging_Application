import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Login from './Screens/Login';
import Register from './Screens/Register';
import { Header } from 'react-native/Libraries/NewAppScreen';

const AuthenticateStack = createStackNavigator({
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    }
});

export default createAppContainer(AuthenticateStack);


