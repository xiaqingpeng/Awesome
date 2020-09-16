import React ,{Fragment}from 'react';
import {View, StyleSheet, Dimensions, StatusBar,Platform} from 'react-native';
import {TabView, SceneMap,TabBar} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'cyan'}]} />
);

const FourthRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'orange'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

const TabViewExample = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '人工智能'},
    {key: 'second', title: '云计算'},
    {key: 'third', title: '大数据'},
    {key: 'fourth', title: '物联网'},
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
