import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native'

class TouchExample3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      bg: 'white',
      bg2: 'red',
    }
  }

  componentWillMount(){
    this._gestureHandlers = {
      onStartShouldSetResponderCapture: () => true,
      onMoveShouldSetResponderCapture: () => true,
      onResponderGrant: () => {this.setState({bg: 'blue'})},
      onResponderMove: (evt) => {console.log(evt)},
      onResponderRelease: () => {this.setState({bg: 'white'})}
    }
    this._gestureHandlers2 = {
      onStartShouldSetResponder: () => true,
      onMoveShouldSetResponder: () => true,
      onResponderGrant: () => {this.setState({bg2: 'green'})},
      onResponderMove: () => {console.log(123)},
      onResponderRelease: () => {this.setState({bg2: 'white'})}
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View {...this._gestureHandlers} style={[styles.rect, {"backgroundColor": this.state.bg}]}>
          <View {...this._gestureHandlers2} style={[styles.rect2, {"backgroundColor": this.state.bg2}]}>
          </View>
        </View>
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
    backgroundColor: 'blue',
  },
  rect2: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  }
})

AppRegistry.registerComponent("appDemo", ()=>TouchExample3);
