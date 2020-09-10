import React, {Fragment} from 'react';
import {Text, View, Button, Dimensions} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {ScreenWidth, ScreenHeight} from '../../common/tool';
function HomeScreen({route}) {
  const navigation = useNavigation();
  return (
    <Fragment>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Header
          centerComponent={{
            text: route.name,
            style: {color: '#fff', fontSize: 20},
          }}></Header>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button
            title="活动"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
         
        </View>
      </View>
    </Fragment>
  );
}

export default HomeScreen;
