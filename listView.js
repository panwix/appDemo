import React, { Component } from 'react';
import {
  View,
  Navigator,
  TouchableOpacity,
  AppRegistry,
  ListView,
  Text,
} from 'react-native';

export default class MyListView extends Component {
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['逗比 1', '逗比 2', '逗比 3', '逗比 4', '逗比 5']),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    )
  }
}

AppRegistry.registerComponent('appDemo', () => MyListView);
