import React , { Component } from 'react';
import {
  NativeModules,
  Text,
  AppRegistry,
} from 'react-native'
class Message extends Component {
  constructor(props) {
      super(props);
      this.state = {
        text: 'Goodbye World.',
      }
    }
  componentDidMount() {
    NativeModules.MyCustomModule.processString(this.state.text, (text) => {
      this.setState({text});
    });
  }
  render() {
    return (
      <Text>{this.state.text}</Text>
    );
  }
};

AppRegistry.registerComponent("appDemo", () => Message);
