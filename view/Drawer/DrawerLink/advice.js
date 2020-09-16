import React, {Fragment, useEffect} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import ActionButton from 'react-native-action-button';
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

        <ActionButton
          buttonColor="rgba(3,127,254,1)"
          onPress={() => {
            console.log('点赞');
          }}
          renderIcon={()=><AntDesign name="like2" color="white" size={25}></AntDesign>
          }></ActionButton>
        <ActionButton
          buttonColor="red"
          offsetY={110}
          onPress={() => {
            console.log('收藏');
          }}></ActionButton>
        <ActionButton
          buttonColor="purple"
          offsetY={190}
          onPress={() => {
            console.log('分享');
            
          }}
          renderIcon={
            ()=><AntDesign name="sharealt" color="white" size={25}></AntDesign>
          }></ActionButton>
      </View>
    </Fragment>
  );
}
const styles = StyleSheet.create({});

export default AdviceScreen;
