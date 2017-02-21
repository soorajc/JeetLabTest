import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


class Splash extends Component {
    goToLoginPage = () => {
      const navigator = this.props.navigator;
      navigator.push({
        id: 'welcome',
        gestures: false
      });
    };

    componentDidMount() {
      setTimeout(this.goToLoginPage, 2000);
    }

  onBack = () => {
    const navigator = this.props.navigator;
    navigator.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        JEET LABS
        </Text>
        <Text style={styles.instructions}>
          Front End Developer Test.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#039BE5',
  },
  welcome: {
    fontSize: 30,
    color:'white',
    fontWeight:'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#CFD8DC',
    fontSize: 20,
    marginBottom: 5,
  },
});

module.exports = Splash;
