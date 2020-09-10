import  React ,{Fragment}from 'react';
import { Text, View,Button } from 'react-native';
import Drawer from '../../Navigation/Drawer';
import { useNavigation } from '@react-navigation/native';

function DetailScreen() {
  const navigation = useNavigation();
    return (
      <Fragment>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button
            title="详情"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </View>
      </Fragment>
    );
  }

  export default  DetailScreen


