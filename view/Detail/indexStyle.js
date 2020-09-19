import { StyleSheet,StatusBar } from 'react-native'
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 35,
      },
      scene: {
        flex: 1,
      },
      customTitle: {
        paddingHorizontal: 9,
        paddingTop: 16,
        color: '#2b2b2b',
        fontWeight: 'bold',
      },
      Popover_Text: {
        marginBottom: 10,
        marginLeft: 15,
      },
      Popover_View: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        width: 100,
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center'
      },
      renderOverlayComponent:{
        textAlign: 'right',
        marginRight: 10,
        marginTop: 10,
      }
  });
export default styles