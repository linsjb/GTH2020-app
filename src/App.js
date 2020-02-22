import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import Tabs from 'react-native-tabs';
import Header from './components/Header';
import HelloHack from './components/HelloHack';
import BadgesComponent from './components/Badges';
import CoursesComponent from './components/Courses'
import TopicComponent from './components/Topic'

const Courses = ({navigation}) => {
  const setState = name => {
    navigation.navigate(name, {name: 'Jane'});
  };

  const navigate = () => {    
    navigation.navigate("Topics", {name: 'Jane'});
  }

  const doNothing = () => {    
    
  }

  return (
    <View style={styles.container}>
      <Header title='Mindist'/>       
      <CoursesComponent callback={navigate} callbackEmpty={doNothing}></CoursesComponent>
      <Tabs selected={"first"} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={ el => setState(el.props.name)}>
            <Text name="Courses" style={{color:'red'}} >Courses</Text>
            <Text name="Badges">Badges</Text>
            <Text name="News">News</Text>            
      </Tabs>           
    </View>    
  );
};

const Badges = ({navigation}) => {
  const setState = name => {
    navigation.navigate(name, {name: 'Jane'});
  };

  return (
    <View style={styles.container}>
      <Header title="Mindist" />
      <BadgesComponent />
      {/* <Text>Badges</Text> */}

      <Tabs
        selected={'first'}
        style={{backgroundColor: 'white'}}
        selectedStyle={{color: 'red'}}
        onSelect={el => setState(el.props.name)}>
        <Text name="Courses">Courses</Text>
        <Text name="Badges" style={{color: 'red'}}>
          Badges
        </Text>
        <Text name="News">News</Text>
      </Tabs>
    </View>
  );
};

const News = ({navigation}) => {
  const setState = name => {
    navigation.navigate(name, {name: 'Jane'});
  };

  return (
    <View style={styles.container}>
      <Header title="Mindist" />
      {/* My Badges goes here */}
      <Text>News</Text>

      <Tabs
        selected={'first'}
        style={{backgroundColor: 'white'}}
        selectedStyle={{color: 'red'}}
        onSelect={el => setState(el.props.name)}>
        <Text name="Courses">Courses</Text>
        <Text name="Badges">Badges</Text>
        <Text name="News" style={{color: 'red'}}>
          News
        </Text>
      </Tabs>
    </View>
  );
};


const Topics = ({navigation}) => {
  const setState = name => {
    navigation.navigate(name, {name: 'Jane'});
  };

  return (
    <View style={styles.container}>
      <Header title="Mindist" />
      
      <TopicComponent></TopicComponent>

      <Tabs
        selected={'first'}
        style={{backgroundColor: 'white'}}
        selectedStyle={{color: 'red'}}
        onSelect={el => setState(el.props.name)}>
        <Text name="Courses">Courses</Text>
        <Text name="Badges">Badges</Text>
        <Text name="News">News
        </Text>
      </Tabs>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{title: ''}}
        />
        <Stack.Screen name="Badges" component={Badges} options={{title: ''}} />
        <Stack.Screen name="News" component={News} options={{title: ''}} />
        <Stack.Screen name="Topics" component={Topics} options={{title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
