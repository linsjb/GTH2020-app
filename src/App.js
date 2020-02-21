import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import Tabs from 'react-native-tabs';
import Header from './components/Header';
import HelloHack from './components/HelloHack';

const Courses = ({navigation}) => {

  const setState = (name) => {
    navigation.navigate(name, {name: 'Jane'})
  }

  return (
    <View style={styles.container}>
      <Header title='Mindist'/>
      <HelloHack></HelloHack> 



      <Tabs selected={"first"} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={ el => setState(el.props.name)}>
            <Text name="Courses" style={{color:'red'}} >Courses</Text>
            <Text name="Badges">Badges</Text>
            <Text name="News">News</Text>            
      </Tabs>           
    </View>    
  );
}

const Badges = ({navigation}) => {

  const setState = (name) => {
    navigation.navigate(name, {name: 'Jane'})
  }

  return (
    <View style={styles.container}>
      <Header title='Mindist'/>
      {/* My Badges goes here */}
      <Text>Badges</Text>


      <Tabs selected={"first"} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={ el => setState(el.props.name)}>
            <Text name="Courses">Courses</Text>
            <Text name="Badges" style={{color:'red'}} >Badges</Text> 
            <Text name="News">News</Text>           
      </Tabs>      
    </View>    
  );
}

const News = ({navigation}) => {

  const setState = (name) => {
    navigation.navigate(name, {name: 'Jane'})
  }

  return (
    <View style={styles.container}>
      <Header title='Mindist'/>
      {/* My Badges goes here */}
      <Text>News</Text>

      <Tabs selected={"first"} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={ el => setState(el.props.name)}>
            <Text name="Courses">Courses</Text>
            <Text name="Badges">Badges</Text> 
            <Text name="News" style={{color:'red'}}>News</Text>           
      </Tabs>      
    </View>    
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Courses" component={Courses} options={{title: ''}}/>
        <Stack.Screen name="Badges" component={Badges} options={{title: ''}}/>
        <Stack.Screen name="News" component={News} options={{title: ''}}/>
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
  }
  
});

export default App;
