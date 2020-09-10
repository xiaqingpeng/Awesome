// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
// import {Button}from '@ant-design/react-native';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import FontAwesome from 'react-native-vector-icons/AntDesign';
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
      
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//                  <FontAwesome name={'twitter'} size={100}  color={'purple'} /> 
//                    <Button type="primary">666</Button> 
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './Navigation/Nav/index.js';
import configureStore from './rudux/configureStore';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './view/Welcome';
import LoginScreen from './view/User/Login';
import RegisterScreen from './view/User/Register';
import {useSelector} from 'react-redux';
import Drawer from './Navigation/Drawer';
import Tabbar from './Navigation/Tabbar';
//激活原生端
import {enableScreens} from 'react-native-screens';
const enable = enableScreens();
const store = configureStore();
const Stack = createStackNavigator();
const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      options={{title: '欢迎'}}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        title: '登录',
        headerBackTitleVisible: false,
        // headerShown:false
      }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        title: '注册',
        headerBackTitleVisible: false,
        // headerShown:false
      }}
    />
  </Stack.Navigator>
);
function App() {
  // const navigationRef = React.useRef();
  const {userInfo} = useSelector((state) => {
    console.log(state);
    return {
      userInfo: state.user.userInfo,
    };
  });
  // useReduxDevToolsExtension(navigationRef);
  console.log(userInfo);
  const {token} = userInfo;
  return (
    <NavigationContainer>
      {token ? <Drawer /> : <RootStack />}
    </NavigationContainer>
  );
}

export default () => {
  console.disableYellowBox=true;
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

