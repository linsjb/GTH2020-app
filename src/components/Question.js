import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Button, Modal} from 'react-native';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';

import HelloHack from './HelloHack';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: this.props.data.answers,
      question: this.props.data.question,
      visible: false,
    };
  }

  answerCorrection = question => {
    this.state.answers[question.id].clicked = !this.state.answers[question.id]
      .clicked;
    console.log(this.state.answers);
  };

  onModalOk = () => {
    this.props.change();
    this.setState({visible: false});
  };

  render() {
    return (
      <View style={styles.box}>
        <Dialog
          visible={this.state.visible}
          footer={
            <DialogFooter>
              <DialogButton text="Gå vidare" onPress={() => this.onModalOk()} />
              <DialogButton text="CANCEL" onPress={() => {}} />
            </DialogFooter>
          }>
          <DialogContent>
            <Text style={styles.diaHeader}>Grattis!</Text>
            <Text>Du har klarat den första delen av detta område!</Text>
          </DialogContent>
        </Dialog>

        <View style={styles.inner}>
          <Text style={{fontSize: 20, marginBottom: 20}}>
            {this.state.question}
          </Text>
          {this.state.answers.map(question => (
            <Text
              key={question.id}
              style={styles.question}
              onPress={() => this.answerCorrection(question)}>
              {question.payload}
            </Text>
          ))}
        </View>

        <View>
          <Button
            title="Correct answers"
            onPress={() => {
              let counter = 0;

              this.state.answers.map(cur =>
                cur.clicked === cur.correctState
                  ? console.log('ok')
                  : counter++,
              );

              console.log(counter);
              if (counter === 0) {
                this.setState({visible: true});
              }
            }}
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
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#E1BEE7',
  },
  box: {
    fontSize: 20,
    backgroundColor: 'red',
    marginBottom: 10,
  },
  diaHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
