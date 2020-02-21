import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import ProgressBar from './ProgessBar';
import Questions from './Questions';

const onClick = () => {
  console.log('Heklo');
};

export default class Section extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.descriptionText} onClick={onClick()}>
            Section text goes here
          </Text>
        </View>

        <Questions />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 40,
    backgroundColor: '#CFD8DC',
  },
  contentContainer: {
    marginTop: 40,
    backgroundColor: '#CFD8DC',
    padding: 10,
  },
  descriptionText: {
    fontSize: 20,
  },
  questionsContainer: {
    backgroundColor: '#BDBDBD',
  },
});
