import React, {Fragment} from 'react';
import {View, Text } from 'react-native';
import styles from './indexStyle';
import {Grid} from '@ant-design/react-native';
import {useNavigation} from '@react-navigation/native';
import {dataSource, array} from './listData';
import { ScreenWidth } from '../../../../common/tool'
const DrawerHeader = () => {
  const navigation = useNavigation();
  return (
    <Fragment>
      <Grid
        data={dataSource}
        columnNum={4}
        hasLine={false}
        onPress={(el, index) => {
          console.log(el, index);
        }}
        itemStyle={styles.itemStyle}
        renderItem={(data) => {
          return (
            <View style={styles.container_header}>
              <View style={styles.container_circle}>{data.icon}</View>
              <Text style={styles.container_text}>{data.text}</Text>
            </View>
          );
        }}
      />
      <View style={{marginTop:40,marginLeft:10,flex:1,
       
        width:ScreenWidth,
        justifyContent:'flex-start'}}>
         <Text style={{fontSize:20,fontWeight:'700'}}>
           为您推荐
         </Text>
      </View>
      <Grid
        data={array}
        columnNum={2}
        hasLine={false}
        itemStyle={styles.itemStyle_array}
        onPress={(el, index) => {
          console.log(el, index);
        }}
        renderItem={(data) => {
          return (
            <View style={styles.container_header_array}>
            
              <Text style={styles.container_text_array}>{data.text}</Text>
              <View style={styles.container_circle_array}>{data.icon}</View>
            </View>
          );
        }}
      />
    </Fragment>
  );
};

export default DrawerHeader;
