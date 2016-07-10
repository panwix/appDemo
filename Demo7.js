import React, { Component } from 'react';
import {
  View,
  Navigator,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SampleComponent extends Component {
  render() {
    let defatultName = 'FirstPageComponent';
    let defaultComponent = FirstPageComponent;
    return (
      <Navigator
        initialRoute={{name: defatultName, component: defaultComponent}}
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }} />
    )
  }
}

AppRegistry.registerComponent('appDemo', () => SampleComponent);
