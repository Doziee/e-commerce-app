import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import Cart from './screens/Cart';

export default function App() {
    const MainNavigator = createStackNavigator();

  return (
    <View>
        <NavigationContainer>
            <MainNavigator>
                <Stack.Screen name = "Home" component={Home} />
                <Stack.Screen name = "Login" component={Login} />
                <Stack.Screen name = "Cart" component={Cart} />
            </MainNavigator>

        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})