import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class NewsItems extends Component {

    constructor(props) {
        super(props);        
        this.state = { 
            newsitems: [
                { id: 1, text: 'Nyhetsrubrik #1'},
                { id: 2, text: 'Nyhetsrubrik #2'},
                { id: 3, text: 'Nyhetsrubrik #3'}
            ]
        };        
    }

    render() {
      return (
        <View>          
            <TouchableOpacity style={styles.listitem} >
                <View style={styles.listitemview}>
                    <Text style={styles.listitemtext}>{this.state.newsitems[0].text}</Text>
                </View>        
            </TouchableOpacity>

            <TouchableOpacity style={styles.listitem} >
                <View style={styles.listitemview}>
                    <Text style={styles.listitemtext}>{this.state.newsitems[1].text}</Text>
                </View>        
            </TouchableOpacity>

            <TouchableOpacity style={styles.listitem} >
                <View style={styles.listitemview}>
                    <Text style={styles.listitemtext}>{this.state.newsitems[2].text}</Text>
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

export default NewsItems;