import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {ScreenWidth} from '../../../common/tool';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useSelector, useDispatch} from 'react-redux';
import {getUserInfo} from './../redux/action';
function LoginScreen() {
  const navigation = useNavigation();
  const [tel, setTel] = useState('');
  const [pwd, setPwd] = useState('');
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        width: ScreenWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Input
        containerStyle={{width: ScreenWidth * 0.8}}
        placeholder="请输入手机号码"
        maxLength={11}
        onChangeText={(e) => {
          setTel(e);
        }}
        inputContainerStyle={{
          borderWidth: 1,
          borderColor: '#8a8a8a',
          borderRadius: 20,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        leftIcon={<SimpleLineIcons name="user" size={20} color="black" />}
      />
      <Input
        containerStyle={{width: ScreenWidth * 0.8}}
        onChangeText={(e) => {
          setPwd(e);
        }}
        inputContainerStyle={{
          borderWidth: 1,
          borderColor: '#8a8a8a',
          borderRadius: 20,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        placeholder="请输入密码"
        leftIcon={<SimpleLineIcons name="lock" size={24} color="black" />}
      />
      <Button
        title="登录"
        // disabled={true}
        disabledStyle={{
          width: ScreenWidth * 0.8 - 20,
          backgroundColor: '#0080fe',
          opacity: 0.6,
        }}
        containerStyle={{
          width: ScreenWidth * 0.8 - 20,
          backgroundColor: '#0080fe',
        }}
        titleStyle={{color: 'white'}}
        titleStyle={{fontSize: 25}}
        onPress={() => {
          dispatch(
            getUserInfo({
              telphone: tel,
              password: pwd,
              token: 'abcd',
            },(res)=>{
              navigation.navigate('Tabbar')
            }),
          );
        }}
      />
    </View>
  );
}

export default LoginScreen;
