import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Search } from './Search';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <View style={styles.conatiner}>
        <View style={styles.title}>
          <Text>首页</Text>
        </View>
        <View style={styles.search}>
          <TouchableOpacity onPress={this._pressButton.bind(this)}>
            <Text>点击跳转到搜索页</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _pressButton() {
    const { navigator } = this.props;
    if(navigator) {
      navigator.push({
        name: 'Search',
        component: Search,
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  title:{
    marginTop: 50,
  },
  search:{
    marginTop: 100,
  },
})
