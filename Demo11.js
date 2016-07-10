import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
} from 'react-native';

class TouchExample2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      bg: 'blue'
    }
  }

  componentWillMount() {
    this._gestureHandlers = {
      onStartShouldSetResponder: () => true,
      onMoveShouldSetResponder: () => true,
      onResponderGrant: () => {
        console.log(123);
        this.setState({bg: 'red'})
      },
      onResponderMove: () => {
        this.setState({bg: 'blue'})
        console.log(456);
      },
      onResponderRelease: () => {
        console.log(789);
        this.setState({bg: 'white'})
      }
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <View {...this._gestureHandlers} style={[styles.rect, {backgroundColor: this.state.bg}]}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rect: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  }
})

AppRegistry.registerComponent('appDemo', () => TouchExample2);
