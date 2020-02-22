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
const informationSectTwo =
  'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec finibus a libero vitae mollis. Cras et sodales lacus, vitae rutrum nisl. Sed et augue sed quam iaculis consequat. Morbi ultrices posuere justo, eget blandit nulla laoreet et. Suspendisse magna lacus, aliquet id placerat nec, aliquet ut massa. Morbi at feugiat nisl. Nunc mollis ex ac felis gravida sollicitudin. Maecenas vel justo ac ante malesuada dapibus vel vel sapien. Fusce posuere urna eu est hendrerit mollis. Mauris orci neque, efficitur vitae faucibus quis, dignissim at ligula. Etiam facilisis ante vitae turpis vestibulum euismod.';

const topHeadOne = 'OCD';
const topHeadTwo = 'PTSD';

const questionsSectOne = [
  {
    question: 'Vad är svaret på OCD fråga #1?',
    answers: [
      {id: 0, payload: 'Alternativ #1', clicked: false, correctState: true},
      {id: 1, payload: 'Alternativ #2', clicked: false, correctState: false},
      {id: 2, payload: 'Alternativ #2', clicked: false, correctState: false},
    ],
  },
  {
    question: 'Vad är svaret på OCD fråga #2?',
    answers: [
      {id: 0, payload: 'Alternativ #1', clicked: false, correctState: true},
      {id: 1, payload: 'Alternativ #1', clicked: false, correctState: false},
    ],
  },
];
const questionsSectTwo = [
  {
    question: 'Vad är svaret på PTSD fråga #1?',
    answers: [
      {id: 0, payload: 'Alternativ #1', clicked: false, correctState: false},
      {id: 1, payload: 'Alternativ #2', clicked: false, correctState: false},
      {id: 2, payload: 'Alternativ #3', clicked: false, correctState: false},
      {id: 3, payload: 'Alternativ #4', clicked: false, correctState: false},
    ],
  },
  {
    question: 'WVad är svaret på PTSD fråga #1?',
    answers: [
      {id: 0, payload: 'Fråga #1', clicked: false, correctState: true},
      {
        id: 1,
        payload: 'Fråga #2',
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
            color="red"
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
    // marginTop: 40,
    backgroundColor: '#ECEFF1',
  },
});
