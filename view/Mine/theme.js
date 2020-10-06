import React, {Fragment, useContext, useState} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {ScreenWidth, Ionicons,FontAwesome} from '../../common/tool';
import {
  ThemeContext,
  ThemeProvider,
  ColorComponent,
} from '../../common/context';
import {ListItem} from 'react-native-elements';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';

  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};
const Theme = ({
  route: {
    params: {name},
  },
}) => {
  const navigation = useNavigation();
  const [backgroundColor, setBackgroundColor] = useContext(ThemeContext);
  const handleDetail = () => {
    return (
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name={'arrow-back'} size={30} color={'white'} />
      </Pressable>
    );
  };
  return (
    <>
      <Header
        leftComponent={handleDetail}
        containerStyle={{backgroundColor}}
        centerComponent={{
          text: name,
          style: {color: '#fff', fontSize: 20},
        }}></Header>
      <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
        <Pressable
          onPress={() => {
            setBackgroundColor(getRandomColor());
          }}>
          <FontAwesome name='exchange' size={100} color={backgroundColor}></FontAwesome>
          <Text style={{textAlign:'center',color:backgroundColor,fontSize:20,marginTop:10}}>更换主题</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Theme;
