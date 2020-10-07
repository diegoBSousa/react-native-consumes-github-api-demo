import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import './config/RectotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

console.tron.log('Hello World');
console.tron.warn('Hello World');

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Hellow World</Text>
      </View>
    </>
  );
}
