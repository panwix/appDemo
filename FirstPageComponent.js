import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import SecondPageCommponent from './SecondPageComponent';

export default class FirstPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _pressButton(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'SecondPageCommponent',
        component: SecondPageCommponent,
      })
    }
  }

  render(){
    return (
      <View>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text style={styles.text}>点我跳转</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  text: {
    marginTop:30,
  }
})
