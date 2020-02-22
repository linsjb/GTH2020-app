import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Modal} from 'react-native';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.data.question,
      answers: this.props.data.answers,
      visible: false,
      currentQuestion: 0,
      dialogText: 'Grattis! Du har klarat av detta ämne!',
    };
  }

  answerCorrection = question => {
    this.state.answers[question.id].clicked = !this.state.answers[question.id]
      .clicked;
    console.log(this.state.answers);
  };

  onModalOk = () => {
    this.props.change();
    this.setState({currentQuestion: 1});
  };

  componentWillReceiveProps(props) {
    this.setState({visible: false});
    this.setState({answers: props.data.answers});
    this.setState({question: props.data.question});
  }

  render() {
    return (
      <View style={styles.container}>
        <Dialog
          visible={this.state.visible}
          footer={
            <DialogFooter>
              <DialogButton text="Gå vidare" onPress={this.onModalOk} />
              <DialogButton text="CANCEL" onPress={() => {}} />
            </DialogFooter>
          }>
          <DialogContent>
            <Text style={styles.diaHeader}>Grattis!</Text>
            <Text>
              {this.state.currentQuestion === 0
                ? 'Du har klarat den första delen av detta område'
                : this.state.dialogText}
            </Text>
          </DialogContent>
        </Dialog>

        <Text style={styles.header}>Questions</Text>

        <View style={styles.inner}>
          <Text style={{fontSize: 20, marginBottom: 20}}>
            {this.state.question}
          </Text>
          {this.state.answers.map(question => (
            <Text
              key={question.id}
              style={[
                question.clicked === true
                  ? styles.questionOn
                  : styles.questionOff,
              ]}
              onPress={() => this.answerCorrection(question)}>
              {question.payload}
            </Text>
          ))}

          <Text
            style={styles.button}
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
            }}>
            Rätta
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#42A5F5',
    paddingVertical: 15,
    fontSize: 25,
    textAlign: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inner: {
    backgroundColor: '#BBDEFB',
    padding: 10,
  },
  questionOff: {
    fontSize: 20,
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#90A4AE',
  },
  questionOn: {
    fontSize: 20,
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#78909C',
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
