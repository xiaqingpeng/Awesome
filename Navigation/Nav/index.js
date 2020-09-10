import  React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../../view/Welcome';
import Drawer from '../Drawer';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

enableScreens();
const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();
export default function Nav() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Welcome"
        options={{title: '欢迎'}}
        component={WelcomeScreen}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="Drawer"
        options={{title: 'Drawer'}}
        component={Drawer} options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
}
