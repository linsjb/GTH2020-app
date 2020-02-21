import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';
import Question from './Question';

const data = [
  {
    id: uuid.v1(),
    question: 'What is the capital of Sweden?',
    answers: [
      {id: uuid.v4(), payload: 'alt One', clicked: false, correctState: true},
      {id: uuid.v4(), payload: 'alt two', clicked: false, correctState: false},
    ],
  },
];

export default class Questions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Questions</Text>
        <Question data={data[0]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
