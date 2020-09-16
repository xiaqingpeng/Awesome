import React, {Fragment} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import styles from './indexStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Grid} from '@ant-design/react-native';

const dataSource = [
  {
    icon: (
      <AntDesign
        name="setting"
        size={30}
        color={'rgba(0,0,0,0.9)'}></AntDesign>
    ),
    text: '设置',
  },
  {
    icon: (
      <Ionicons
        name="exit-outline"
        size={30}
        color={'rgba(0,0,0,0.9)'}></Ionicons>
    ),
    text: '退出登录',
  },
  {
    icon: (
      <FontAwesome name="power-off" size={27} color={'rgba(0,0,0,0.9)'}></FontAwesome>
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
        itemStyle={{backgroundColor:'white',height:50,
        opacity:0.6,
        alignItems:'center',
        justifyContent:'center'
      }}
        renderItem={(data,index) => {
          console.log(data);
          return (
            <TouchableOpacity onPress={()=>{
              if (index===2) this.props.drawer()
            }}>
            <View style={styles.container}>
               {data.icon}
              <Text style={{marginLeft:3,fontWeight:"bold"}}>{data.text}</Text>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

export default DrawerHeader;
