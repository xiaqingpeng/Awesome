import React from 'react';
import {View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {SimpleLineIcons,FontAwesome,ScreenWidth} from '../../../common/tool'
function RegisterScreen() {
  const navigation = useNavigation();
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
        placeholder="请输入用户名/手机号码"
        maxLength={11}
        onChangeText={(e)=>{
          setTel(e)
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
        onChangeText={(e)=>{
            setPwd(e)
          }}
        inputContainerStyle={{
          borderWidth: 1,
          borderColor: '#8a8a8a',
          borderRadius: 20,
          paddingLeft: 10,
          paddingRight: 10,
          
        }}
        secureTextEntry={true}
        autoCapitalize={'none'}
        placeholder="请输入密码"
        leftIcon={<SimpleLineIcons name="lock" size={24} color="black" />}
      />
      <Button
        title="立即注册"
        disabled={true}
        disabledStyle={{
          width: ScreenWidth * 0.8 - 20,
          backgroundColor: '#0080fe',
          opacity: 0.6,
        }}
        // containerStyle={{width:ScreenWidth*0.8-20,backgroundColor: '#0080fe'}}
        titleStyle={{color: 'white'}}
        titleStyle={{fontSize: 25}}
        onPress={() => navigation.navigate('Drawer')}
      />
    </View>
  );
}

export default RegisterScreen;
