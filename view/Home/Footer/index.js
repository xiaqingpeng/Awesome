import React from 'react';
import {View, Text} from 'react-native';
import {Ionicons, FontAwesome, AntDesign} from '../../../common/tool';
import {Grid} from '@ant-design/react-native';
import styles from './indexStyle';

const dataSource = [
  {
    icon: (
      <AntDesign name="setting" size={30} color={'rgba(0,0,0,0.9)'}></AntDesign>
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
      <FontAwesome
        name="power-off"
        size={27}
        color={'rgba(0,0,0,0.9)'}></FontAwesome>
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
        itemStyle={styles.itemStyle}
        onPress={(data, index) => {
          if (index === 2) this.props.drawer();
        }}
        renderItem={(data, index) => {
          return (
            <View style={styles.container}>
              {data.icon}
              <Text style={{marginLeft: 3, fontWeight: 'bold'}}>
                {data.text}
              </Text>
            </View>
          );
        }}
      />
    );
  }
}

export default DrawerHeader;
