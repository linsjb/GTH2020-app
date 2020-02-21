import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ProgessBar extends Component {
  render() {
    return (
      <View style={styles.dots}>
        <Text style={styles.dot} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dots: {},
  dot: {
    backgroundColor: 'green',
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
