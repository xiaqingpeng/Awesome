import React, {Fragment, useState,useContext} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Popover} from '@ant-design/react-native';
import styles from './indexStyle';
import {array} from './listData';
import { ThemeContext } from '../../common/context'
const FirstRoute = () => (
  <View
    style={[
      styles.scene,
      {flex: 1, justifyContent: 'center', alignItems: 'center'},
    ]}>
    <Text>全部帖子</Text>
  </View>
);
const SecondRoute = () => (
  <View
    style={[
      styles.scene,
      {flex: 1, justifyContent: 'center', alignItems: 'center'},
    ]}>
    <Text>话题</Text>
  </View>
);
const ThirdRoute = () => (
  <View
    style={[
      styles.scene,
      {flex: 1, justifyContent: 'center', alignItems: 'center'},
    ]}>
    <Text>活动</Text>
  </View>
);

const FourthRoute = () => (
  <View
    style={[
      styles.scene,
      {flex: 1, justifyContent: 'center', alignItems: 'center'},
    ]}>
    <Text>投票</Text>
  </View>
);
const initialLayout = {width: Dimensions.get('window').width};
const TabViewExample = () => {
  const [index, setIndex] = React.useState(0);
  const [backgroundColor, setBackgroundColor] = useContext(ThemeContext)
  const [routes] = React.useState([
    {key: 'first', title: '帖子'},
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
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor}}
      style={{backgroundColor: 'white'}}
      activeColor={backgroundColor}
      scrollEnabled={true}
      // labelStyle={{fontSize:12}}
     
      inactiveColor="rgb(0,0,0)"
    />
  );
  const [isOpened, setOpen] = useState(true);
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
        buttonColor={backgroundColor}
        onPress={() => {
          console.log('分享');
        }}
        renderIcon={() => {
          if (isOpened) {
            return (
              <Popover
                placement="top"
                renderOverlayComponent={(nodes) => (
                  <View>
                    <Pressable
                      onPress={(e) => {
                        setOpen(false);
                        setTimeout(() => {
                          setOpen(true);
                        }, 500);
                      }}>
                      <Text style={styles.renderOverlayComponent}>
                        <MaterialCommunityIcons
                          name="close"
                          color="#707070"
                          size={20}></MaterialCommunityIcons>
                      </Text>
                    </Pressable>
                    {nodes}
                  </View>
                )}
                overlay={
                  <Popover.Item value={'test1'}>
                    {array.map((item, index) => {
                      return (
                        <Pressable
                          key={index}
                          onPress={() => {
                            console.log(item.id);
                          }}>
                          <View style={styles.Popover_View}>
                            {item.icon}
                            <Text style={styles.Popover_Text}>
                              {item.title}
                            </Text>
                          </View>
                        </Pressable>
                      );
                    })}
                  </Popover.Item>
                }>
                <MaterialCommunityIcons
                  name="feather"
                  color="white"
                  size={28}></MaterialCommunityIcons>
              </Popover>
            );
          } else {
            return (
              <MaterialCommunityIcons
                name="feather"
                color="white"
                size={28}></MaterialCommunityIcons>
            );
          }
        }}></ActionButton>
    </Fragment>
  );
};
export default TabViewExample;
