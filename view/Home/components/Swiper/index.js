import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-elements';
const dataSource = [
  require('../../../../swiper_images/swiper1.jpg'),
  require('../../../../swiper_images/swiper2.jpg'),
  require('../../../../swiper_images/swiper3.jpg'),
  require('../../../../swiper_images/swiper4.jpg'),
];
const swiperWidth = Dimensions.get('window').width;
const swiperHeight = Dimensions.get('window').height;
const ListArr = ['初级体验', '快速上手', '轻松掌握', '成为大神'];
class SwiperList extends Component {
  state = {
    showsPagination: true,
  };
  handleSwiper = navigation => {
    return dataSource.map((item, index) => {
      return (
          <View style={styles.view_content} key={index}>
              <Image style={styles.swiper_images} source={item}></Image>
          </View>
         
      );
    });
  };
  render() {
    const {navigation} = this.props;
    const dot = {
      backgroundColor: 'rgb(3,127,254)',
      width: 4,
      height: 4,
      borderRadius: 2,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    };
    const activeDot = {
      backgroundColor: 'white',
      width: 6,
      height: 6,
      borderRadius: 3,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    };
    return (
       
        <Swiper
          style={styles.container}
          showsButtons={false}
          autoplay={true}
          loop={true}
          onMomentumScrollEnd={(e, state, context) =>{
            // console.log(e, state.index, context)
          }
           
          }
           dot={<View style={dot} />}
           activeDot={<View style={activeDot} />}
           paginationStyle={{
            bottom:-20,
            left: 0,
          }}
          showsPagination={this.state.showsPagination}
          onIndexChanged={index => {
        
            // console.log(index)
          }}>
          {this.handleSwiper(navigation)}
        </Swiper>
     
    );
  }
}
const styles = StyleSheet.create({
  
  container:{
    height:120
  },
  view_content:{
    marginTop:20,
    padding:20,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems:"center"
  },
  

  swiper_images: {
    width: '100%',
    height: 100,
    // resizeMode: 'contain',
    borderRadius:8,
  },
});
export default SwiperList;
