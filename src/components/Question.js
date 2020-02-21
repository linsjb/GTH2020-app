import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = test => {
    console.log('Hello' + test);
  };

  answerCorrection = id => {
    console.log('Question ID ' + id);

    console.log(this.props.data.answers);
  };

  render() {
    return (
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={{fontSize: 20, marginBottom: 20}}>
            {this.props.data.question}
          </Text>
          {this.props.data.answers.map(question => (
            <Text
              key={question.id}
              style={styles.question}
              onPress={() => this.answerCorrection(question.id)}>
              {question.payload}
            </Text>
          ))}
        </View>

        <View>
          <Button
            title="Correct answers"
            onPress={() => this.onClick('hello')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inner: {
    backgroundColor: '#90CAF9',
    padding: 10,
  },
  question: {
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  box: {
    fontSize: 20,
    backgroundColor: 'red',
    marginBottom: 10,
  },
});
