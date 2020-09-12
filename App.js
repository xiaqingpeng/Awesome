import React from 'react';
import { LogBox } from 'react-native'
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './Navigation/Nav/index.js';
import configureStore from './rudux/configureStore';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './view/Welcome';
import LoginScreen from './view/User/Login';
import RegisterScreen from './view/User/Register';
import {useSelector} from 'react-redux';
import Drawer from './Navigation/Drawer';
import Tabbar from './Navigation/Tabbar';
//激活原生端
import {enableScreens} from 'react-native-screens';
const enable = enableScreens();
const store = configureStore();
const Stack = createStackNavigator();
const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      options={{title: '欢迎'}}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerBackTitleVisible: false,
        headerShown:false
      }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        title: '注册',
        headerBackTitleVisible: false,
        // headerShown:false
      }}
    />
  </Stack.Navigator>
);
function App() {
  // const navigationRef = React.useRef();
  const {userInfo} = useSelector((state) => {
    console.log(state);
    return {
      userInfo: state.user.userInfo,
    };
  });
  // useReduxDevToolsExtension(navigationRef);
  console.log(userInfo);
  const {token} = userInfo;
  return (
    <NavigationContainer>
      {token ? <Drawer /> : <RootStack />}
    </NavigationContainer>
  );
}

export default () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
