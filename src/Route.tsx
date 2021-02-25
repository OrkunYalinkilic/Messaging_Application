import React from 'react';
import { Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createDrawerNavigator} from "react-navigation-drawer";

import Login from './Screens/Login/index';
import Register from './Screens/Register';

const AuthenticateStack = createStackNavigator({
    Login: {
        screen:Login,
       // navigationOptions:{header:null}
        
    },
    Register:{
        screen:Register,
       
    }
});

export  default createAppContainer(AuthenticateStack);
