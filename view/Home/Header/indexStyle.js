import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingTop: 50,
      justifyContent: 'space-evenly',
    },
    container_header: {
      flexDirection: 'column',
     
      justifyContent: 'center',
     alignItems:'center'
    },
    open_view: {
      alignItems: 'center',
    },
    open_view_list: {
      backgroundColor: 'white',
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    open_view_list_text: {
      fontSize: 16,
      color: 'black',
      marginTop: 20,
    },
    music_tool: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    music_tool_view: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
    },
    music_tool_text: {
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
export default styles