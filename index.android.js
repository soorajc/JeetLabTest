

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import SplashScreen from './components/splash.js';
import WelcomeScreen from './components/welcome.js';
import HomeScreen from './components/homeScreen.js';
import ChatScreen from './components/chat.js';

export default class testjeet extends Component {
  render() {
      return (
        <Navigator
          configureScene={(route) =>
            ({ ...Navigator.SceneConfigs.HorizontalSwipeJump, gestures: false })}
          initialRoute={{ id: 'splash', name: 'Index' }}
          renderScene={ this.renderScene.bind(this)}
        />
      );
  }
  renderScene(route, navigator) {
    const routeId = route.id;
    if (routeId === 'home') {
      return (
        <HomeScreen
          navigator={navigator}
        />
      );
    } else if (routeId === 'chat') {
      return (
        <ChatScreen
          navigator={navigator}
        />
      );
    } else if (routeId === 'splash') {
      return (
        <SplashScreen
          navigator={navigator}
        />
      );
    }  else if (routeId === 'welcome') {
      return (
        <WelcomeScreen
          navigator={navigator}
        />
      );
    }
  }
}


AppRegistry.registerComponent('testjeet', () => testjeet);
