/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, StatusBar,
  StyleSheet
} from 'react-native';
import Router from './src/router';


const App=() => {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle={'dark-content'} />
      <Router />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
container:{
  flex:1
}
});

export default App;
