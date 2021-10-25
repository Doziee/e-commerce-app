import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "./screens/Login";
import Home from "./screens/Home";

export default function App() {
  const MainNavigator = CreateStackNavigator();


  return (
    <View style={styles.container}>
      <Text>Cedric diverse</Text>
      <Text>Emma</Text>
      <Text>Cia</Text>
      <Text>Sly</Text>
      <Text>Godson</Text>
      <Text>Aziz</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
