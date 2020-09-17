import {StyleSheet} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../../common/tool';
const styles = StyleSheet.create({
  view_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  center_container:{
    height: ScreenHeight - 200,
    width: ScreenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_text: {
    fontSize: 25, color: '#0080fe'
  },
  bottom_container:{
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button_container:{
    width: 150,
    height: 50,
    borderRadius: 10,
    borderColor: '#0080fe',
    borderWidth: 1 
  },
  register_title:{
    fontSize:25
  },
  login_title:{
    fontSize: 25,color:"white"
  }
});
export default styles;
