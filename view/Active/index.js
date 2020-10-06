import React, {Fragment, useEffect, useState,useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {ScreenWidth} from '../.../../../common/tool';
import { ThemeContext } from '../../common/context'
function ActiveScreen({route}) {
  const [backgroundColor, setBackgroundColor] = useContext(ThemeContext)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //state数据

  const [text, setText] = useState('初始状态');
  const [refreshing, setRefreshing] = useState(false);
  //下拉视图开始刷新时调用
  const _onRefresh = () => {
    if (refreshing === false) {
      _updateState('正在刷新......', true);

      //5秒后结束刷新
      setTimeout(() => {
        _updateState('结束状态', false);
      }, 5000);
    }
  };

  //更新State
  const _updateState = (message, refresh) => {
    setRefreshing(refresh);
    setText(message);
  };
  return (
    <Fragment>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Header 
          containerStyle={{backgroundColor}}
          centerComponent={{
            text: route.name,
            style: {color: '#fff', fontSize: 20},
          }}></Header>
        <ScrollView
          style={[styles.bgColor]}
          contentContainerStyle={{
            flex: 1,
            width: ScreenWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          indicatorStyle={'black'}
          showsHorizontalScrollIndicator={true}
          bounces={true}
          refreshControl={
            <RefreshControl
              tintColor={'rgb(3,127,255)'}
              titleColor={'brown'}
              title={'正在刷新......'}
              refreshing={refreshing}
              onRefresh={() => _onRefresh()}
            />
          }>
          <Text>{text}</Text>
         
           
      
         
        </ScrollView>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  bgColor: {
    backgroundColor: '#EEE',
  },
});
export default ActiveScreen;
