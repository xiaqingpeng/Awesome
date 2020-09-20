/**
 * @format
 */

import {AppRegistry,Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
let flag= true
if(flag){
    AppRegistry.registerComponent(appName, () => App);
}else{
    AppRegistry.registerComponent(appName, () => {
        return <Text>666</Text>
    });
} 

