import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { SearchResult } from './SearchResult';

export class Search extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <View style={styles.button}>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
    			<Text>点击事件</Text>
    		</TouchableOpacity>
      </View>
    )
  }
  _pressButton() {
    const { navigator } = this.props;
    if(navigator) {
      navigator.push({
        name: 'SearchResult',
        component: SearchResult,
      })
    }
  }
}    

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
  },
})
