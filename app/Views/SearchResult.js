import React, { Component } from 'react';
import{
   Navigator,
   Text,
   View,
   TouchableOpacity,
   StyleSheet,
  } from 'react-native';

export class SearchResult extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.button}>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
        <Text>SearchResult</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _pressButton() {
    const { navigator } = this.props;
    if(navigator) {
      navigator.pop({
        name: 'SearchResult',
        component: SearchResult,
      })
    }
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
  }
})
