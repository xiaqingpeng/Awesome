import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ListItem, Header} from 'react-native-elements';
import {dataSource} from './listData';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './indexStyle.js';
import {useNavigation} from '@react-navigation/native';
const MineScreen = ({route}) => {
  const navigation = useNavigation();
  const handleMineCenter = () => {
    return (dataSource || []).map((item, index) => {
      return (
        <TouchableOpacity
          onPress={() => handleLogin({...item, index: index})}
          key={index}>
          <View>
            <ListItem key={index} bottomDivider>
              {
                item.icon
              }
              <ListItem.Content>
                <ListItem.Subtitle>{item.content}</ListItem.Subtitle>
              </ListItem.Content>
              <SimpleLineIcons name="arrow-right" size={15} color={'#707070'}></SimpleLineIcons>
            </ListItem>
          </View>
        </TouchableOpacity>
      );
    });
  };
  const handleLogin = (props) => {
    console.log(props);
    navigation.navigate('LoginAndRegister');
  };
  return (
    <View>
      <Header
        centerComponent={{
          text: route.name,
          style: {color: '#fff', fontSize: 20},
        }}></Header>
    
        <View style={styles.mine_container}>
          <TouchableOpacity onPress={() => handleLogin()}>
            <View style={styles.header}>
              <ListItem>
                <View style={styles.header_left_image}>
                  <SimpleLineIcons
                    name="user"
                    color="white"
                    size={30}></SimpleLineIcons>
                </View>
                <ListItem.Content>
                  <ListItem.Title>登录/注册</ListItem.Title>
                  <ListItem.Subtitle>添加职位@添加公司</ListItem.Subtitle>
                </ListItem.Content>
                <SimpleLineIcons name="arrow-right" size={15} color={"#707070"}></SimpleLineIcons>
              </ListItem>
            </View>
          </TouchableOpacity>
          <View style={styles.mine_center}>{handleMineCenter()}</View>
        </View>
    </View>
  );
};
const Stack = createStackNavigator();
const MineNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="我的"
        options={{
          title: '我的',
          backBehavior: 'none',
          headerBackTitleVisible: false,
          headerBackAllowFontScaling: false,
        }}
        component={MineScreen}
      />
      {/* <Stack.Screen
        name="设置"
        options={{title: '设置'}}
        component={MineScreen}
      /> */}
    </Stack.Navigator>
  );
};
export default MineNavigator;
