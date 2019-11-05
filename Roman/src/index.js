import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './pages/main';
import SignInScreen from './pages/signin';

// criar a navegaçao com o login = autenticaçao
const AuthStack = createStackNavigator({
  Sign: {screen: SignInScreen},
})

const MainNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
    }
  },
  {
    // define a rota inicial
    initialRouteName: 'Login',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      inactiveBackgroundColor: '#b727ff',
      activeBackgroundColor: '#9900e6',
      style: {
        width: '100%',
        height: 50,
      },
    },
  },
);

export default createAppContainer(createSwitchNavigator(
    {
      // define as telas que vão aparecer
      AuthStack,
      MainNavigator
    }, 
  ),
);