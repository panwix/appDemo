import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ListView,
} from 'react-native';

var SEARCH_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=25';
var KEYWORD = '';
var PARAMS = '?keyword=' + KEYWORD;
var REQUEST_URL = SEARCH_URL;

class Search_List extends Component {
  constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false,
      }
    }

    componentDidMount() {
      this.fetchData();
    }

    fetchData(){
        fetch(REQUEST_URL)
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
              loaded: true,
            })
          })
          .done();
    }

      render(){
        if(!this.state.loaded) {
          return this.renderLoadingView();
        }

        return(
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderCrop}
            style={styles.listView}
          />
        );
      }

      renderLoadingView(){
        return (
          <View style={styles.container}>
            <Text>
              查询结果加载中...
            </Text>
          </View>
        )
      }

      renderCrop(crop) {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>{crop.title}</Text>
          </View>
        )
      }
    }

    var styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
      },
      listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
      }
    })

    AppRegistry.registerComponent('appDemo', ()=> Search_List);
