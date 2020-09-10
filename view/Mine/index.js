import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ListItem, Header} from 'react-native-elements';
import dataSource from './listData';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './indexStyle.js';

const MineScreen = ({route}) => {
  const handleMineCenter = () => {
    return dataSource.map((item, index) => {
      return (
        <TouchableOpacity
          onPress={() => handleLogin({...item, index: index})}
          key={index}>
          <View>
            <ListItem
              leftAvatar={
                <Image style={styles.left_image} source={item.icon}></Image>
              }
              rightAvatar={null}
              rightTitle={
                <View style={styles.rightTitle}>
                  <Text>{item.num}</Text>
                  <Text>{item.unit}</Text>
                </View>
              }
              title={null}
              subtitle={item.content}
              bottomDivider
            />
          </View>
        </TouchableOpacity>
      );
    });
  };
  const handleLogin = (props) => {
    console.log(props);
  };
  return (
    <View>
      <Header
        centerComponent={{
          text: route.name,
          style: {color: '#fff', fontSize: 20},
        }}></Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mine_container}>
          <TouchableOpacity onPress={() => handleLogin()}>
            <View style={styles.header}>
              <ListItem
                leftAvatar={
                  <View style={styles.header_left_image}>
                    <SimpleLineIcons
                      name="user"
                      color="white"
                      size={30}></SimpleLineIcons>
                  </View>
                }
                rightAvatar={
                  <SimpleLineIcons
                    name="arrow-right"
                    size={22}></SimpleLineIcons>
                }
                title={'登录/注册'}
                subtitle={<Text>添加职位@添加公司</Text>}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.mine_center}>{handleMineCenter()}</View>
        </View>
      </ScrollView>
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
