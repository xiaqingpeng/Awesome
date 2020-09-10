import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import styles from './indexStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Grid} from '@ant-design/react-native';

const dataSource = [
  {
    icon: (
      <Ionicons
        name="scan-outline"
        size={30}
        color={'rgba(0,0,0,0.9)'}></Ionicons>
    ),
    text: '设置',
  },
  {
    icon: (
      <FontAwesome
        name="qrcode"
        size={30}
        color={'rgba(0,0,0,0.9)'}></FontAwesome>
    ),
    text: '退出登录',
  },
  {
    icon: (
      <AntDesign name="user" size={30} color={'rgba(0,0,0,0.9)'}></AntDesign>
    ),
    text: '关闭',
  },
];
class DrawerHeader extends React.Component {
  render() {
    return (
      <Grid
        data={dataSource}
        columnNum={3}
        hasLine={false}
        itemStyle={{backgroundColor:'#ccc',height:50,
        opacity:0.6,
        alignItems:'center',
        justifyContent:'center'
      }}
        renderItem={(data) => {
          console.log(data);
          return (
            <View style={styles.container}>
               {data.icon}
              <Text style={{marginLeft:3,fontWeight:"bold"}}>{data.text}</Text>
            </View>
          );
        }}
      />
    );
  }
}

export default DrawerHeader;
