/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';

import MainFrame from './routes/MainFrame/MainFrame';
import Login from './routes/Login/Login';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {



  render() {
   
    let defaultName = 'MainFrame';
    let defaultComponent = MainFrame;

    return (
      <Navigator  
            initialRoute={{ name: defaultName, component: defaultComponent }}  
            configureScene={(route) => {  
            return Navigator.SceneConfigs.FloatFromRight;  
        }}  
        renderScene={(route, navigator) => {  
            let Component = route.component;  
            return <Component {...route.params} navigator={navigator} />  
      }}/>
    );
  }
}
