import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  

class CourseItem extends Component {

    constructor(props) {
        super(props);                    
    }

    render() {
      return (   
        <TouchableOpacity style={styles.listitem} > 
         
            <CircleCheckBox
            checked={this.props.data.finished}
            onToggle={(checked) => console.log('My state is: ', checked)}
            labelPosition={LABEL_POSITION.RIGHT}
            label={this.props.data.text} />
                               
        </TouchableOpacity>                        
      );
    }
}

const styles = StyleSheet.create({
    listitem: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },

    listitemview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    listitemtext: {
        fontSize: 24
    }

});

export default CourseItem;