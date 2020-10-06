import React, {Fragment, useState,useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {Button, Drawer, List} from '@ant-design/react-native';
import {Header} from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DrawerHeader from './Header';
import DrawerFooter from './Footer';
import Swiper from './components/Swiper';
import FastList from './components/FastList';
import { ThemeContext } from '../../common/context'
export default DrawerExample = (props) => {
  let draw = null;
  const [text, setText] = useState('初始状态');
  const [refreshing, setRefreshing] = useState(false);
  const [backgroundColor, setBackgroundColor] = useContext(ThemeContext)
  const onOpenChange = (isOpen) => {
    console.log('是否打开了 Drawer', isOpen.toString());
  };
  const handleDetail = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          drawer && drawer.openDrawer();
        }}>
        <EvilIcons name={'navicon'} size={30} color={'white'} />
      </TouchableOpacity>
    );
  };
  //下拉视图开始刷新时调用
  const _onRefresh = () => {
    if (refreshing === false) {
      _updateState('正在刷新......', true);
      console.log('可以发起请求', refreshing);

      //5秒后结束刷新
      setTimeout(() => {
        _updateState('结束状态', false);
      }, 5000);
    }
  };

  //更新State
  const _updateState = (message, refresh) => {
    setText(message);
    setRefreshing(refresh);
  };

  const {route} = props;

  const itemArr = () => (
    <List.Item multipleLine>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Categories </Text>
        <Button
          type="primary"
          size="small"
          onPress={() => drawer.closeDrawer()}>
          close drawer
        </Button>
      </View>
    </List.Item>
  );

  const sidebar = (
    <Fragment>
      <DrawerHeader></DrawerHeader>
      <ScrollView style={[styles.container]}>
        <List>{itemArr()}</List>
      </ScrollView>
      <DrawerFooter
        drawer={() => {
          drawer && drawer.closeDrawer();
        }}></DrawerFooter>
    </Fragment>
  );
  return (
    <Drawer
      sidebar={sidebar}
      position="left"
      open={false}
      drawerRef={(el) => (drawer = el)}
      onOpenChange={onOpenChange}
      drawerBackgroundColor="#F0F0F0">
      <Fragment>
        <Header containerStyle={{backgroundColor}}
          leftComponent={handleDetail()}
          centerComponent={{
            text: route.name,
            style: {color: '#fff', fontSize: 20},
          }}></Header>
        <ScrollView
          contentContainerStyle={
            {
              // alignItems: 'center',
              // justifyContent: 'center',
            }
          }
          indicatorStyle={'black'}
          showsHorizontalScrollIndicator={true}
          bounces={true}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              tintColor={'rgb(3,127,255)'}
              titleColor={'brown'}
              title={'正在刷新......'}
              refreshing={refreshing}
              onRefresh={() => _onRefresh()}
            />
          }>
          <Swiper></Swiper>
          <FastList></FastList>
        </ScrollView>
      </Fragment>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
