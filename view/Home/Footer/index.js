import React ,{useContext}from 'react';
import {View, Text} from 'react-native';
import {Ionicons, FontAwesome, AntDesign} from '../../../common/tool';
import {Grid} from '@ant-design/react-native';
import styles from './indexStyle';
import { ThemeContext} from '../../../common/context'
const dataSource = [
  {
    icon:(backgroundColor)=> (
      <AntDesign name="setting" size={30} color={'rgba(0,0,0,0.9)'}></AntDesign>
    ),
    text: '设置',
  },
  {
    icon:(backgroundColor)=> (
      <Ionicons
        name="exit-outline"
        size={30}
        color={'rgba(0,0,0,0.9)'}></Ionicons>
    ),
    text: '退出登录',
  },
  {
    icon:(backgroundColor)=> (
      <FontAwesome
        name="power-off"
        size={27}
        color={'rgba(0,0,0,0.9)'}></FontAwesome>
    ),
    text: '关闭',
  },
];
const  DrawerHeader=(props)=> {
  const [backgroundColor, setBackgroundColor] = useContext(ThemeContext)
    return (
      <Grid
        data={dataSource}
        columnNum={3}
        hasLine={false}
        itemStyle={styles.itemStyle}
        onPress={(data, index) => {
          if (index === 2) props.drawer();
        }}
        renderItem={(data, index) => {
          return (
            <View style={styles.container}>
              {data.icon(backgroundColor)}
              <Text style={{marginLeft: 3, fontWeight: 'bold'}}>
                {data.text}
              </Text>
            </View>
          );
        }}
      />
    )
}

export default DrawerHeader;
