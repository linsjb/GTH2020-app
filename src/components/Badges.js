import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Badges extends Component {

    constructor(props) {
        super(props);        
        this.state = { 
            badges: [
                { id: 1, text: 'Badge 1'},
                { id: 2, text: 'Badge 2'},
                { id: 3, text: 'Badge 3'}
            ]
        };        
    }

    render() {
      return (
        <View>          
            <TouchableOpacity style={styles.listitem} >
                <View style={styles.listitemview}>
                    <Text style={styles.listitemtext}>{this.state.badges[0].text}</Text>
                </View>        
            </TouchableOpacity>

            <TouchableOpacity style={styles.listitem} >
                <View style={styles.listitemview}>
                    <Text style={styles.listitemtext}>{this.state.badges[1].text}</Text>
                </View>        
            </TouchableOpacity>

            <TouchableOpacity style={styles.listitem} >
                <View style={styles.listitemview}>
                    <Text style={styles.listitemtext}>{this.state.badges[2].text}</Text>
                </View>        
            </TouchableOpacity>
        </View>
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
        fontSize: 16
    }

});

export default Badges;