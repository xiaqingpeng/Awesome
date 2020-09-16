import React, {Fragment} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Button, Drawer, List} from '@ant-design/react-native';
import {Header} from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DrawerHeader from './Header';
import DrawerFooter from './Footer';
export default class DrawerExample extends React.Component {
  constructor() {
    super(...arguments);
    this.onOpenChange = (isOpen) => {
      console.log('是否打开了 Drawer', isOpen.toString());
    };
  }
  handleDetail = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.drawer && this.drawer.openDrawer();
        }}>
        <EvilIcons name={'navicon'} size={30} color={'white'} />
      </TouchableOpacity>
    );
  };
  render() {
    const {route} = this.props;

    const itemArr = () => (
      <List.Item
        multipleLine>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>Categories </Text>
          <Button
            type="primary"
            size="small"
            onPress={() => this.drawer.closeDrawer()}>
            close drawer
          </Button>
        </View>
      </List.Item>
    );

    const sidebar = (
      <Fragment>
        <DrawerHeader></DrawerHeader>
        <ScrollView style={[styles.container]}>
          <List>
             {itemArr()}
          </List>
        </ScrollView>
        <DrawerFooter drawer={() => {
          this.drawer && this.drawer.closeDrawer();
        }}></DrawerFooter>
      </Fragment>
    );
    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={(el) => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#F0F0F0">
        <Fragment>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Header
              leftComponent={this.handleDetail()}
              centerComponent={{
                text: route.name,
                style: {color: '#fff', fontSize: 20},
              }}></Header>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Button
                type="primary"
                onPress={() => {
                  this.drawer&&this.drawer.openDrawer();
                }}>
                首页
              </Button>
            </View>
          </View>
        </Fragment>
      </Drawer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});