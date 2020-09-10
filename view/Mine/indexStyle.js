import { StyleSheet } from 'react-native'
 const styles = StyleSheet.create({
    mine_container: {
        backgroundColor: '#cccccc',
    },
    header: {
        marginBottom: Platform.OS === 'ios' ? 5 : 0,
    },
    header_left_image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#8a8a8a',
        justifyContent: 'center',
        alignItems: 'center',
    },

    left_image: {
        width: 30,
        height: 30,
    },

    rightTitle: {
        flexDirection: 'row',
    },
});
export default styles