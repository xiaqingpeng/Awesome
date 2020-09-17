import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {ScreenHeight, ScreenWidth} from '../../common/tool';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './indexStyle';
function WelcomeScreen() {
  const navigation = useNavigation();
  // const [count, setCount] = useState(10);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount(count - 1);
  //   }, 1000);
  //   if (count <= 0) {
  //     clearTimeout(timer);
  //     // navigation.navigate('Login');
  //   }
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [count]);
  return (
    <View style={styles.view_container}>
      <View style={styles.center_container}>
        <SimpleLineIcons name="people" size={120} color="#0080fe" />
        <Text style={styles.icon_text}>欢迎你的到来</Text>
      </View>
      <View style={styles.bottom_container}>
        <Button
          containerStyle={styles.button_container}
          title="注册"
          type="clear"
          titleStyle={styles.register_title}
          onPress={() => navigation.navigate('Register')}
        />
        <Button
          containerStyle={{...styles.button_container,backgroundColor:"#0080fe"}}
          title="登录"
          type="clear"
          titleStyle={styles.login_title}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}

export default WelcomeScreen;
