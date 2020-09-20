
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {LocaleConfig, Calendar} from 'react-native-calendars';
import {  ScreenWidth} from '../../common/tool'


// 日历组件 中文替换
LocaleConfig.locales['fr'] = {
    monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['周天.','周一.','周二.','周三.','周四.','周五.','周六.']
};
LocaleConfig.defaultLocale = 'fr';

// 日历组件 标记点的颜色
const vacation = {key:'vacation', color: '#33D9B5', selectedDotColor: '#33D9B5'};






export default class App extends Component{

  render() {
    return (
      <View style={styles.container}>
       
     
      

      
            <Calendar 
                style={{width:ScreenWidth*0.8}}
                monthFormat = { ' yyyy MM ' }
                markedDates={{
                    '2019-03-10': {selected: true, selectedColor: '#FFC1B5'},
                    '2019-03-11': {dots: [vacation],selected: true, selectedColor: '#FFC1B5'},
                    '2019-03-12': {dots: [vacation]},
                    '2019-03-13': {dots: [vacation]},
                }}
                markingType={'multi-dot'}

            />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});