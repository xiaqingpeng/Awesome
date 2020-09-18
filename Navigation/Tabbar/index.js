import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../view/Home';
import DetailScreen from '../../view/Detail';
import ActiveScreen from '../../view/Active';
import CarScreen from '../../view/Car';
import MineScreen from '../../view/Mine';

//引用iconfont
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();
const TabbarNavigation = () => {
  //底部公共样式
  const tabBarOptions = {
    activeTintColor: 'rgb(3,127,254)',
    inactiveTintColor: '#7b7b7b',
    style: {
      backgroundColor: 'white',
      padding: 0,
      margin: 0,
      height: Platform.OS === 'ios' ? 80 : 65,
      paddingTop: 2,
    },
    tabStyle: {
      //height: 65,
      // backgroundColor: 'pink',
      //   paddingTop:2,
    },
    labelStyle: {
      fontSize: 18,
    },
  };
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      initialRouteName="Home"
      tabBarOptions={({navigation}) => {
        console.log(navigation);
        return {
          tabBarVisible: navigation.state.index === 0,
        };
      }}>
      <Tab.Screen
        name="首页"
        component={HomeScreen}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => (
            <AntDesign name={'home'} size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="活动"
        component={ActiveScreen}
        options={{
          tabBarLabel: '活动',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name={'paper-plane-o'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="聊吧"
        component={DetailScreen}
        options={{
          tabBarLabel: '聊吧',
          tabBarIcon: ({color, size}) => (
            <Entypo name={'chat'} size={size + 5} color={color} />
          ),
        }}
      />
     
      <Tab.Screen
        name="购物车"
        component={CarScreen}
        options={{
          tabBarLabel: '购物车',
          tabBarIcon: ({color, size}) => (
            <AntDesign name={'shoppingcart'} size={size} color={color} />
          ),
          tabBarBadge: 4,
        }}
      />
      <Tab.Screen
        name="我的"
        headerMode={'none'}
        component={MineScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <Entypo name={'user'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabbarNavigation;
