import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent: 'space-evenly',
  },
  container_header: {
    flexDirection: 'column',

    justifyContent: 'center',
    alignItems: 'center',
  },
  open_view: {
    alignItems: 'center',
  },
  open_view_list: {
    backgroundColor: 'white',
    width: 50,

    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  open_view_list_text: {
    fontSize: 16,
    color: 'black',
  },
  container_circle: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgb(3,127,254)',
    borderRadius: 20,
  },
  container_text: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },
  itemStyle: {
    height: 50,
    marginTop: 50,
  },
  itemStyle_array: {
    height: 50,
    marginTop: 50,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_array: {
    flexDirection: 'row',

    justifyContent: 'space-evenly',
  },
  container_header_array: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
    width: '90%',
    borderRadius: 5,
    backgroundColor: 'rgba(3,127,255,0.1)',
  },
  open_view_array: {
    alignItems: 'center',
  },
  open_view_list_array: {
    backgroundColor: 'white',
    width: 50,

    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  open_view_list_text_array: {
    fontSize: 16,
    color: 'black',
  },
  container_circle_array: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
   
   
  },
  container_text_array: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginRight:20,

  },
});
export default styles;
