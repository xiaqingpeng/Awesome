import React from 'react';
import { LogBox } from 'react-native'
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import configureStore from './rudux/configureStore';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './view/Welcome';
import LoginScreen from './view/User/Login';
import RegisterScreen from './view/User/Register';
import LoginAndRegister from './view/User';
import {useSelector} from 'react-redux';
import Tabbar from './Navigation/Tabbar';
import DrawerSceen from './view/Drawer/DrawerSceen'
import DrawerQrCode from './view/Drawer/DrawerQrCode'
//激活原生端
import {enableScreens} from 'react-native-screens';
const enable = enableScreens();
const store = configureStore();
const Stack = createStackNavigator();

import { ColorComponent,ThemeProvider} from './common/context'
const RootStack = () => (
  <Stack.Navigator headerMode='none'>
     <Stack.Screen
      name="WelcomeScreen"
      options={{title: '欢迎'}}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Tabbar"
      component={Tabbar}
    />
    <Stack.Screen
      name="DrawerSceen"
      component={DrawerSceen}
      options={{
        title:'扫一扫'
      }}
    />
    <Stack.Screen
      name="DrawerQrCode"
      component={DrawerQrCode}
      options={{
        title:'我的二维码'
      }}
    />
    <Stack.Screen
      name="LoginAndRegister"
      options={{title: '欢迎'}}
      component={LoginAndRegister}
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
  return (
    <NavigationContainer>
       <RootStack /> 
    </NavigationContainer>
  );
}

export default () => {
  LogBox.ignoreAllLogs();
  return (
    <ThemeProvider >
        <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
   
  );
};
