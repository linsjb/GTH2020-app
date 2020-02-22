import React, {Component} from 'react';
import {Text, View, StyleSheet, ShadowPropTypesIOS} from 'react-native';
import uuid from 'react-native-uuid';

import Section from './Section';

const informationSectOne = 'Information for the section';
const informationSectTwo = 'Information for the second section';

const questionsSectOne = [
  {
    question: 'What is the capital of Sweden?',
    answers: [
      {id: 0, payload: 'alt One', clicked: false, correctState: false},
      {id: 1, payload: 'alt two', clicked: false, correctState: false},
      {id: 1, payload: 'alt tree', clicked: false, correctState: false},
    ],
  },
  {
    question: 'What is the capital of Sweden?',
    answers: [
      {id: 0, payload: 'alt One one', clicked: false, correctState: true},
      {id: 1, payload: 'alt two two', clicked: false, correctState: false},
    ],
  },
];
const questionsSectTwo = [
  {
    question: 'What is the capital of Swedeldkdlöfkdlöfkn?',
    answers: [
      {id: 0, payload: 'alt One', clicked: false, correctState: false},
      {id: 1, payload: 'alt two', clicked: false, correctState: false},
      {id: 2, payload: 'alt tree', clicked: false, correctState: false},
      {id: 3, payload: 'alt 4', clicked: false, correctState: false},
    ],
  },
  {
    question: 'What is the capital of Sweden?????',
    answers: [
      {id: 0, payload: 'alt One onlöklöke', clicked: false, correctState: true},
      {
        id: 1,
        payload: 'alt two tölkölkwo',
        clicked: false,
        correctState: false,
      },
    ],
  },
];

export default class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      currentSection: 0,
    };
  }
  changeSection = () => {
    console.log('HELLO NYEW SECTION');
    this.setState({currentSection: 1});
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.currentSection === 0 ? (
          <Section
            questions={questionsSectOne}
            info={informationSectOne}
            changeSection={this.changeSection}
          />
        ) : (
          <Section
            questions={questionsSectTwo}
            info={informationSectTwo}
            changeSection={this.changeSection}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 40,
    backgroundColor: '#ECEFF1',
  },
});
