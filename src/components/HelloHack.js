import React, {Component} from 'react';
import {Text, View} from 'react-native';
// import {TEST} from 'react-native-dotenv';

export default class HelloHack extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>Hello GTH 2020, let's go!!!</Text>
        <Text>Hello Hack</Text>
      </View>
    );
  }
}
