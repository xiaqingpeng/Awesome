import React, {Fragment,useContext} from 'react';
import {View, Text} from 'react-native';

import {Grid} from '@ant-design/react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
} from '../../../common/tool';
import { ThemeContext} from '../../../common/context'
import styles from './indexStyle';
const dataSource = [
  {
    icon:(backgroundColor)=> (
      <Ionicons
        name="scan-outline"
        size={30}
        color={backgroundColor}></Ionicons>
    ),
    text: '扫一扫',
  },
  {
    icon:(backgroundColor)=> (
      <FontAwesome
        name="qrcode"
        size={30}
        color={backgroundColor}></FontAwesome>
    ),
    text: '我的二维码',
  },
  {
    icon:(backgroundColor)=> (
      <AntDesign name="user" size={30} color={backgroundColor}></AntDesign>
    ),
    text: '我的好友',
  },
  {
    icon:(backgroundColor)=> (
      <FontAwesome5
        name="car"
        size={30}
        color={backgroundColor}></FontAwesome5>
    ),
    text: '驾驶模式',
  },
];

const DrawerHeader = () => {
  const navigation = useNavigation();
  const [backgroundColor, setBackgroundColor] = useContext(ThemeContext)
  return (
    <Fragment>
      <Grid
        data={dataSource}
        columnNum={4}
        hasLine={false}
        itemStyle={styles.itemStyle}
        onPress={(data, index) => {
          if (index === 0) {
            navigation.navigate('DrawerSceen', {name: data.text});
          } else if (index === 1) {
            navigation.navigate('DrawerQrCode', {name: data.text});
          }
        }}
        renderItem={(data, index) => {
          return (
            <View style={styles.container_header}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 20,
                }}>
                {data.icon(backgroundColor)}
              </View>

              <Text style={{fontWeight: 'bold', fontSize: 12}}>
                {data.text}
              </Text>
            </View>
          );
        }}
      />

      <View style={styles.music_tool}>
        <View style={styles.music_tool_view}>
          <FontAwesome
            name="microphone"
            size={30}
            color={backgroundColor}></FontAwesome>
          <Text style={styles.music_tool_text}>听歌识曲</Text>
        </View>
        <View style={styles.music_tool_view}>
          <AntDesign
            name="tool"
            size={30}
            color={backgroundColor}></AntDesign>
          <Text style={styles.music_tool_text}>音乐工具</Text>
        </View>
      </View>
    </Fragment>
  );
};

export default DrawerHeader;
