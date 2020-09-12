import React, {Fragment,useEffect} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux'
function HomeScreen({route}) {
   const navigation = useNavigation();
   const dispatch=useDispatch()
   const {home,detail} = useSelector(state => {
    return {
      home:state.home,
      detail:state.detail,
    }
  })
  useEffect(() => {
    
  }, [])
  console.log(home)
   const handleDetail=()=>{
     return <TouchableOpacity onPress={()=>{
      navigation.navigate('Drawer');
     }}>
          <EvilIcons name={'navicon'} size={30} color={'white'} />
     </TouchableOpacity>
   }
  return (
    <Fragment>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Header
          leftComponent={ handleDetail}
          centerComponent={{
            text: route.name,
            style: {color: '#fff', fontSize: 20},
          }}></Header>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button
            title="首页"
            onPress={() => {
              // dispatch(getUser(123,(res)=>{
              //   console.log(res)
              // }))
               navigation.navigate('Drawer');
            }}
          />
        </View>
      </View>
    </Fragment>
  );
}

export default  HomeScreen
