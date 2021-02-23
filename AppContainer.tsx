import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Login from "./Views/Login";
import Home from "./Views/Home";

var navi = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        }
    },
    Home: {
        screen: Login,
        navigationOptions: {
            headerTitle:'ev'
        }
        
    },
});

export default createAppContainer(navi);