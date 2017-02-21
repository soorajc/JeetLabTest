
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  BackAndroid,
  Text,
  View
} from 'react-native';


class WelcomeScreen extends Component {

  componentDidMount = () => {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const array = this.props.navigator.getCurrentRoutes();
      if (array.length !== 2) {
        this.onBack();
        return true;
      } else {
        return false;
      }
    });
  };

  onBack = () => {
    const navigator = this.props.navigator;
    navigator.pop();
  };


  goToHome = () => {
    const navigator = this.props.navigator;
    navigator.push({
      id: 'home',
      gestures: false
    });
  };

  goToChat = () => {
    const navigator = this.props.navigator;
    navigator.push({
      id: 'chat',
      gestures: false
    });
  };

  render() {
   return (
       <View style={styles.container}>
         <TouchableOpacity style={styles.button1} onPress={this.goToHome.bind(this)}>
           <Text style={styles.menu}>
             View Screen 1
           </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button2} onPress={this.goToChat.bind(this)}>
           <Text style={styles.menu}>
             View Screen 2
           </Text>
         </TouchableOpacity>
       </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#939BE5',
  },
  menu: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  button1: {
    flex:0.5,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button2: {
    flex:0.5,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center'
  },

});

module.exports = WelcomeScreen;
