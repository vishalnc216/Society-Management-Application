/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Signup from './Screens/Signup';

const App = () => {
  return (
    <ScrollView style={styles.logodiv}>
      <StatusBar barStyle='dark-content'></StatusBar>
      <Signup/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo:{
    width:80,
    height:90
  },
  logodiv:{
   flex:1,
   backgroundColor:"#F3EFF2",
   
  },
  appName:{
    fontWeight:'bold',
    fontSize:25
  }
});

export default App;
