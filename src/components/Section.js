import React, {Component} from 'react';
import {Text, View, StyleSheet, ShadowPropTypesIOS} from 'react-native';
import uuid from 'react-native-uuid';

import ProgressBar from './ProgessBar';
import Questions from './Questions';

export default class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      data: this.props.questions,
      info: this.props.info,
      dialogText: this.props.dialogText,
    };
  }

  nextQuestion = () => {
    if (this.state.currentIndex + 1 === this.props.questions.length) {
      console.log('OKAY');
      this.props.changeSection();
    } else {
      console.log('hello world');
      this.setState({currentIndex: 1});
    }
  };

  componentWillReceiveProps(props) {
    this.setState({currentIndex: 0});
    this.setState({data: props.questions});
    this.setState({info: props.info});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.descriptionText}>{this.state.info}</Text>
        </View>

        <Questions
          data={this.state.data[this.state.currentIndex]}
          change={this.nextQuestion}
        />
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
  contentContainer: {
    marginTop: 40,
    backgroundColor: '#ECEFF1',
    padding: 10,
  },
  descriptionText: {
    fontSize: 20,
  },
  questionsContainer: {
    backgroundColor: '#ECEFF1',
  },
});
