import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import styles from './indexStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Grid }from '@ant-design/react-native';
const dataSource = [
  {
    icon: <Ionicons name="scan-outline" size={38} color={'rgb(3,127,254)'}></Ionicons>,
    text: '扫一扫',
  },
  {
    icon: <FontAwesome name="qrcode" size={45} color={'rgb(3,127,254)'}></FontAwesome>,
    text: '我的二维码',
  },
  {
    icon: <AntDesign name="user" size={40} color={'rgb(3,127,254)'}></AntDesign>,
    text: '我的好友',
  },
  {
    icon: <FontAwesome5 name="car" size={45} color={'rgb(3,127,254)'}></FontAwesome5>,
    text: '驾驶模式',
  },
];
class DrawerHeader extends React.Component {
  render() {
    return (
      <Fragment>
       <View style={{height:30}}></View>
       <Grid
          data={dataSource}
          columnNum={4}
          hasLine={false}
        />
    
        <View style={styles.music_tool}>
          <View style={styles.music_tool_view}>
            <FontAwesome name="microphone" size={30} color={'rgba(0,0,0,0.8)'}></FontAwesome>
            <Text style={styles.music_tool_text}>听歌识曲</Text>
          </View>
          <View style={styles.music_tool_view}>
            <AntDesign name="tool" size={30} color={'rgba(0,0,0,0.8)'}></AntDesign>
            <Text style={styles.music_tool_text}>音乐工具</Text>
          </View>
        </View>
      </Fragment>
    );
  }
}


export default DrawerHeader;
