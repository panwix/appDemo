import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

class TouchExample extends Component {
  constructor(props){
    super(props);
    this.start = '1111'
  }

  show(text) {
    alert(text);
  }

  onPressIn(){
    console.log('onPressIn');
  }

  onPressOut(){
    console.log('PressOut');
  }

  onPress(text){
    console.log('Press');
    alert(text);
  }

  onLongPress(){
    console.log('long press')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.touchable} onPressIn={this.onPressIn} onPressOut={this.onPressOut}
          onPress={this.onPress.bind(this, '点击了吗')} onLongPress={this.onLongPress}>
          <View style={styles.button}></View>
        </TouchableHighlight>
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
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  touchable: {
    borderRadius: 100
  },
})

AppRegistry.registerComponent('appDemo', () => TouchExample);
