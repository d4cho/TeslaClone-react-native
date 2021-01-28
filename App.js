import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      {/* <StatusBar style='auto' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: Dimensions.get('window').height
  }
});
