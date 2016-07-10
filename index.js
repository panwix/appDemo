import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Main } from './app/Views/main';

class Index extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <Main />
    )
  }
}

AppRegistry.registerComponent('appDemo', () => Index);
