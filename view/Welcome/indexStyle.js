import {StyleSheet} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../../common/tool';
const styles = StyleSheet.create({
    container: {
      height: '100%',
    },
    view_content: {
      marginTop: 20,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    swiper_images: {
      width: ScreenWidth * 0.8,
      height: ScreenHeight * 0.8,
      resizeMode: 'contain',
    },
    text_view: {
      position: 'absolute',
      bottom: 80,
      left:(ScreenWidth-160)/2 ,
      height:50,
      width:160,
      borderColor:'rgb(3,127,254)',
      borderRadius:25
    },
    dot :{
      backgroundColor: 'rgb(3,127,254)',
      width: 10,
      height: 3,
      // borderRadius: 2,
      margin: 5,
    },
    activeDot:{
      backgroundColor: 'cyan',
      width: 10,
      height: 3,
      // borderRadius: 3,
      margin: 5,
    }
  });
  export default styles;