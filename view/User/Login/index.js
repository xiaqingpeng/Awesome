import React, {useState} from 'react';
import {View, Text, TouchableOpacity,ImageBackground} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {SimpleLineIcons, FontAwesome, ScreenWidth,ScreenHeight} from '../../../common/tool';
import {useSelector, useDispatch} from 'react-redux';
import {getUserInfo} from './../redux/action';
function LoginScreen() {
  const navigation = useNavigation();
  const [tel, setTel] = useState('');
  const [pwd, setPwd] = useState('');
  const dispatch = useDispatch();
  return (
    <ImageBackground  source={require('../../../swiper_images/office.png')}
    style={{width:ScreenWidth,height:ScreenHeight
    }}>
    <View
      style={{
        flex: 1,
        width: ScreenWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Input
        containerStyle={{width: ScreenWidth * 0.8}}
        placeholder="请输入用户名/手机号码"
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
        leftIcon={<FontAwesome name="mobile-phone" size={32} color="black" />}
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
        secureTextEntry={true}
        autoCapitalize={'none'}
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
            getUserInfo(
              {
                telphone: tel,
                password: pwd,
                token: 'abcd',
              },
              (res) => {
                navigation.navigate('Tabbar');
              },
            ),
          );
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={()=>{
           navigation.navigate('Register')
        }}>
          <Text>立即注册</Text>
        </TouchableOpacity>

        <Text style={{marginLeft: 10, marginRight: 10}}>|</Text>

        <TouchableOpacity>
          <Text>忘记密码</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}

export default LoginScreen;
