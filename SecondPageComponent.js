import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _pressButton(){
    const { navigator } = this.props;
    if(navigator) {
      navigator.pop();
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text style={styles.text}>点我跳回去</Text>
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
