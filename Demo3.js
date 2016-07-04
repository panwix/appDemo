import React, { Compoment } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

class Article extends Compoment {
  render(){
    return (
      <View style={styles.container}>
        <Text style={[styles.text,styles.title]}>{this.props.title}</Text>
        <Text style={styles.text}>{this.props.author}</Text>
        <Text style={styles.text}>{this.props.time}</Text>
      </View>
    )
  }
}

class App extends Compoment {
  constructor(props){
    super(props);
    this.state = {
      article:[
        {"title": 'react-natives door is open'},
        {"title": 'the world is different'},
        {"title": 'come on let me told you'},
      ]
    }
  }

  render(){
    return(
      <ScrollView>
        {this.state.atricle.map(function(article){
          return  <Article title={article.title} author={article.author} time={article.time}/>
        })}
      </ScrollView>
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
  },
  title:{
    alignItems: 'flex-start',
  }
})

AppREgistry.registerComponent('appDemo', () => App);
