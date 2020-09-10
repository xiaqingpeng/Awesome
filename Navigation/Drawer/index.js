import React, {Fragment} from 'react';
import {Button, View, Linking, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import TabbarScreen from '../Tabbar/index';
import Header from './Header';
import Footer from './Footer';
function OtherScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go to OtherScreen" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

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

export default function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props}></CustomDrawerContent>
      )}>
      <Drawer.Screen name="首页">
        {() => {
          return <TabbarScreen></TabbarScreen>;
        }}
      </Drawer.Screen>
      <Drawer.Screen name="OtherScreen" component={OtherScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
