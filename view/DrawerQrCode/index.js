import React, {Fragment, useEffect} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
function AdviceScreen({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    navigation.openDrawer();
    return () => {
      navigation.closeDrawer();
    };
  }, []);
  const handleDetail = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Tabbar');
        }}>
        <Ionicons name={'arrow-back'} size={30} color={'white'} />
      </TouchableOpacity>
    );
  };
  return (
    <Fragment>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Header
          leftComponent={handleDetail}
          centerComponent={{
            text: route.name,
            style: {color: '#fff', fontSize: 20},
          }}></Header>

      
      </View>
    </Fragment>
  );
}
const styles = StyleSheet.create({});

export default AdviceScreen;
