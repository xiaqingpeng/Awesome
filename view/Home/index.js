import React, {Fragment} from 'react';
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
export default class DrawerExample extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      text: '初始状态',
      refreshing: false,
    };
    this.onOpenChange = (isOpen) => {
      console.log('是否打开了 Drawer', isOpen.toString());
    };
  }

  handleDetail = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.drawer && this.drawer.openDrawer();
        }}>
        <EvilIcons name={'navicon'} size={30} color={'white'} />
      </TouchableOpacity>
    );
  };
  //下拉视图开始刷新时调用
  _onRefresh=()=> {
   
    if (this.state.refreshing === false) {
      this._updateState('正在刷新......', true);
      console.log('可以发起请求',this.state.refreshing)
     
      //5秒后结束刷新
      setTimeout(() => {
        this._updateState('结束状态', false);
      }, 5000);
    }
  }

  //更新State
  _updateState(message, refresh) {
    this.setState({text: message, refreshing: refresh});
  }

  render() {
    const {route} = this.props;

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
            onPress={() => this.drawer.closeDrawer()}>
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
            this.drawer && this.drawer.closeDrawer();
          }}></DrawerFooter>
      </Fragment>
    );
    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={(el) => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#F0F0F0">
        <Fragment>
        
            <Header
              leftComponent={this.handleDetail()}
              centerComponent={{
                text: route.name,
                style: {color: '#fff', fontSize: 20},
              }}></Header>
            <ScrollView
              contentContainerStyle={{
                // alignItems: 'center',
                // justifyContent: 'center',
              }}
              indicatorStyle={'black'}
              showsHorizontalScrollIndicator={true}
              bounces={true}
              showsHorizontalScrollIndicator={
                false
              }
              refreshControl={
                <RefreshControl
                  tintColor={'rgb(3,127,255)'}
                  titleColor={'brown'}
                  title={'正在刷新......'}
                  refreshing={this.state.refreshing}
                  onRefresh={() => this._onRefresh()}
                />
              }>
              <Swiper></Swiper>
              <FastList></FastList>
            </ScrollView>
        
        </Fragment>
      </Drawer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
