import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ShadowPropTypesIOS,
  ScrollView,
} from 'react-native';
import uuid from 'react-native-uuid';

import Section from './Section';

const informationSectOne =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel eros non velit laoreet sagittis vitae et magna. Aliquam fringilla congue condimentum. Suspendisse et nisi nec risus efficitur tristique ac in nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque iaculis porttitor augue a finibus. Pellentesque pretium, lacus nec accumsan pharetra, erat urna iaculis est, eget egestas libero augue a tellus. Curabitur auctor est eu quam convallis, et condimentum augue commodo. Aliquam metus neque, accumsan id sem at, lacinia aliquam augue. Fusce pellentesque metus sit amet accumsan elementum. Pellentesque porta nisl id est imperdiet, ac scelerisque lorem sodales.';
const informationSectTwo = 'Information for the second section';

const topHeadOne = 'Område ett';
const topHeadTwo = 'Område två';

const questionsSectOne = [
  {
    question: 'What is the capital of Sweden?',
    answers: [
      {id: 0, payload: 'alt One', clicked: false, correctState: true},
      {id: 1, payload: 'alt two', clicked: false, correctState: false},
      {id: 2, payload: 'alt tree', clicked: false, correctState: false},
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
      <ScrollView style={styles.container}>
        {this.state.currentSection === 0 ? (
          <Section
            questions={questionsSectOne}
            info={informationSectOne}
            head={topHeadOne}
            changeSection={this.changeSection}
          />
        ) : (
          <Section
            questions={questionsSectTwo}
            info={informationSectTwo}
            head={topHeadTwo}
            changeSection={this.changeSection}
          />
        )}
      </ScrollView>
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
