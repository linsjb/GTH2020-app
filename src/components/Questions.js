import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Modal, Image} from 'react-native';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.data.question,
      answers: this.props.data.answers,
      visible: false,
      currentQuestion: 0,
      test: false,
      continueButtonText: 'Nästa fråga',
      counter: 0,
      questionNr: this.props.questionNr,
    };
  }

  answerCorrection = question => {
    this.state.answers[question.id].clicked = !this.state.answers[question.id]
      .clicked;
    console.log(this.state.answers);
    this.setState({test: true});
  };

  onModalOk = () => {
    this.props.change();
    this.setState({currentQuestion: 1});

    this.setState({continueButtonText: 'Nästa område'});
  };

  componentWillReceiveProps(props) {
    this.setState({visible: false});
    this.setState({answers: props.data.answers});
    this.setState({question: props.data.question});
  }

  onButtonClick = () => {
    this.state.answers.map(cur =>
      cur.clicked === cur.correctState
        ? console.log('ok')
        : this.state.counter++,
    );

    if (this.state.counter === 0) {
      this.setState({visible: true});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Dialog
          visible={this.state.visible}
          footer={
            <DialogFooter>
              <DialogButton
                text={this.state.continueButtonText}
                onPress={this.onModalOk}
              />
              <DialogButton text="CANCEL" onPress={() => {}} />
            </DialogFooter>
          }>
          <DialogContent>
            <Image source={(require = '../img/img.png')} />
            <Text style={styles.diaHeader}>Grattis!</Text>
            <Text>
              {this.state.currentQuestion === 0
                ? 'Du har klarat den första delen av detta område'
                : 'Grattis! Du har klarat av detta ämne!'}
            </Text>
          </DialogContent>
        </Dialog>

        <Text style={styles.header}>
          Fråga {this.state.currentQuestion + 1} av 2
        </Text>

        <View style={styles.inner}>
          <Text style={{fontSize: 20, marginBottom: 20}}>
            {this.state.question}
          </Text>
          {this.state.answers.map(question => (
            <CircleCheckBox
              style={styles.cb}
              checked={question.clicked}
              key={question.id}
              onToggle={() => this.answerCorrection(question)}
              labelPosition={LABEL_POSITION.RIGHT}
              label={question.payload}
              outerColor="#2E7D32"
              innerColor="#2E7D32"
            />
          ))}

          <Text style={styles.button} onPress={() => this.onButtonClick()}>
            Rätta
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cb: {
    paddingVertical: 20,
    color: 'red',
  },
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
