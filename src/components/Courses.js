import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CourseItem from './CourseItem';

class Courses extends Component {

    constructor(props) {
        super(props);        
        this.state = { 
            courses: [
                { id: 1, text: 'Course 1', finished: true},
                { id: 2, text: 'Course 2', finished: true},
                { id: 3, text: 'Course 3', finished: true},
                { id: 4, text: 'Course 4', finished: false},
                { id: 5, text: 'Course 5', finished: false},
                { id: 6, text: 'Course 6', finished: false}
            ]
        };          
    }


    render() {
      return (
        <View>                     
            <CourseItem navigate={this.props.callbackEmpty} data={this.state.courses[0]}></CourseItem>
            <CourseItem navigate={this.props.callbackEmpty} data={this.state.courses[1]}></CourseItem>
            <CourseItem navigate={this.props.callbackEmpty} data={this.state.courses[2]}></CourseItem>
            <CourseItem navigate={this.props.callback} data={this.state.courses[3]}></CourseItem>
            <CourseItem navigate={this.props.callback} data={this.state.courses[4]}></CourseItem>
            <CourseItem navigate={this.props.callback} data={this.state.courses[5]}></CourseItem>
        </View>
      );
    }
}

export default Courses;