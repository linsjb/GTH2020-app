import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {View, Text, Button, StyleSheet} from 'react-native';
import Tabs from 'react-native-tabs';

import HelloHack from './components/HelloHack';

const Courses = ({navigation}) => {

  const setState = (name) => {
    navigation.navigate(name, {name: 'Jane'})
  }

  return (
    <View style={styles.container}>
      <Tabs selected={"first"} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={ el => setState(el.props.name)}>
            <Text name="Courses">Courses</Text>
            <Text name="Badges">Badges</Text>
            <Text name="News">News</Text>            
      </Tabs>
      <Text>Courses</Text>
    </View>    
  );
}

const Badges = ({navigation}) => {

  const setState = (name) => {
    navigation.navigate(name, {name: 'Jane'})
  }

  return (
    <View style={styles.container}>
      <Tabs selected={"first"} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={ el => setState(el.props.name)}>
            <Text name="Courses">Courses</Text>
            <Text name="Badges">Badges</Text> 
            <Text name="News">News</Text>           
      </Tabs>
      <Text>Badges</Text>
    </View>    
  );
}

const News = ({navigation}) => {

  const setState = (name) => {
    navigation.navigate(name, {name: 'Jane'})
  }

  return (
    <View style={styles.container}>
      <Tabs selected={"first"} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={ el => setState(el.props.name)}>
            <Text name="Courses">Courses</Text>
            <Text name="Badges">Badges</Text> 
            <Text name="News">News</Text>           
      </Tabs>
      <Text>News</Text>
    </View>    
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Courses" component={Courses} options={{title: 'Courses'}}/>
        <Stack.Screen name="Badges" component={Badges} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
