import React, { Component } from 'react';
import {
  Navigator,
 } from 'react-native';

import { Home } from './Home';

export class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let defatuleName = 'Home';
    let defaultComponent = Home;
    return (
      <Navigator
        initialRoute={{ name: defatuleName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    )
  }
}
