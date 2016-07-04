import React, { Component }from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Email extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
        <Text style={styles.text}>{this.props.url}</Text>
      </View>
    )
  }
}

class App extends Component {
  render(){
    return(
      <Email name='移动开发部' url='www.panwix.com'/>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  text:{
    color: 'red',
  }
})

AppRegistry.registerComponent("appDemo", () => App);
