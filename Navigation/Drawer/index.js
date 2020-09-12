import React, {Fragment,useEffect} from 'react';
import {Button, View, Linking, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import TabbarScreen from '../Tabbar/index';
import Header from './Header';
import Footer from './Footer';
import AdviceScreen from '../../view/DrawerLink/advice'
function OtherScreen() {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.openDrawer();
    return ()=>{
      navigation.closeDrawer()
    }
  }, [])
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go to OtherScreen" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack=createStackNavigator()

function CustomDrawerContent(props) {
  console.log(props);
  return (
    <Fragment>
      <Header></Header>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        />
      </DrawerContentScrollView>
      <Footer></Footer>
    </Fragment>
  );
}


const DrawerStack=()=> {
  
  return (
    <Drawer.Navigator
      headerMode="none"
      drawerContent={(props) => (
        <CustomDrawerContent {...props}></CustomDrawerContent>
      )}>
      <Drawer.Screen
        name="公告信息"
        options={{title: '公告信息'}}
        component={AdviceScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

const Root= () => (
  <Stack.Navigator >
    <Stack.Screen
      name="Tabbar"
      options={{
        headerBackTitleVisible: false,
        headerShown:false
      }}
      component={TabbarScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Drawer"
      component={DrawerStack}
      options={{
    
        headerBackTitleVisible: false,
        headerShown:false
      }}
    />
    
  </Stack.Navigator>
);

export default Root
