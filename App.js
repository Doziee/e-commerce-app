import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer}from'@react-navigation/native';
import {createStackNavigator}from'@react-navigation/stack';
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Confirmation from "./screens/Confirmation";
import { Provider } from 'react-native-paper'

import { theme } from './core/theme'

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './screens'


export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style ={{flex: 1}}>
    <Provider theme={theme}>
      <NavigationContainer>
         <MainNavigator.Navigator screenOptions={{ headerShown: false }} >
          <MainNavigator.Screen name="Splash" component={Splash}/>
          <MainNavigator.Screen name="Signup" component={Signup} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Cart" component={Cart} />
          <MainNavigator.Screen name="Checkout" component={Checkout} />
          <MainNavigator.Screen name="Confirmation" component={Confirmation} />

          <MainNavigator.Screen name="StartScreen" component={StartScreen} />
          <MainNavigator.Screen name="RegisterScreen" component={RegisterScreen} />
          <MainNavigator.Screen name="LoginScreen" component={LoginScreen} />
          <MainNavigator.Screen name="Dashboard" component={Dashboard} />
          <MainNavigator.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />



        

         </MainNavigator.Navigator>
      </NavigationContainer> 
      </Provider>
      
    </View>
  );
}
