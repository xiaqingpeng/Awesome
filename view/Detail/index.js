import React ,{Fragment}from 'react';
import {View,Text, StyleSheet, Dimensions, StatusBar,Platform} from 'react-native';
import {TabView, SceneMap,TabBar} from 'react-native-tab-view';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const FirstRoute = () => (
  <View style={[styles.scene, {flex:1,justifyContent:"center",alignItems:'center'}]} >
     <Text>全部帖子</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, {flex:1,justifyContent:"center",alignItems:'center'}]} >
     <Text>话题</Text>
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.scene, {flex:1,justifyContent:"center",alignItems:'center'}]} >
     <Text>活动</Text>
  </View>
);

const FourthRoute = () => (
  <View style={[styles.scene, {flex:1,justifyContent:"center",alignItems:'center'}]} >
  <Text>投票</Text>
</View>

);

const initialLayout = {width: Dimensions.get('window').width};

const TabViewExample = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '全部帖子'},
    {key: 'second', title: '话题'},
    {key: 'third', title: '活动'},
    {key: 'fourth', title: '投票'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'rgb(3,127,254)' }}
      style={{ backgroundColor: 'white' }}
      activeColor='rgb(3,127,254)'
      inactiveColor='rgb(0,0,0)'
    />
  );
  return (
    <Fragment>
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      renderTabBar={renderTabBar}
    />
    <ActionButton
          buttonColor="rgb(3,127,254)"
          // offsetY={190}
          onPress={() => {
            console.log('分享');
          }}
          renderIcon={() => (
            <MaterialCommunityIcons name="feather" color="white" size={28}></MaterialCommunityIcons>
          )}></ActionButton>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS==='android'? StatusBar.currentHeight:35,
   
  },
  scene: {
    flex: 1,
   
  },
});

export default TabViewExample;
