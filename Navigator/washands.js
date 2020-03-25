import React, {Component} from 'react';
import {StatusBar, Text, View, Button, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function TRScreen() {
  return (
    <View style={{backgroundColor:'#e9f7ef', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <StatusBar backgroundColor="#e9f7ef" barStyle="light-content" />
      <Image
        source={require ('C:/washands/asset/coronaTR.png')}
        style={{width: Dimensions.get('window').width * 0.95,
                height: Dimensions.get('window').height * 0.85}}
      />
    </View>
  );
}

function ENScreen() {
  return (
    <View style={{backgroundColor:'#e9f7ef', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <StatusBar backgroundColor="#e9f7ef" barStyle="light-content" />
      <Image
        source={require ('C:/washands/asset/coronaEN.png')}
        style={{width: Dimensions.get('window').width * 0.95,
                height: Dimensions.get('window').height * 0.85}}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator         
      tabBarOptions={{
          activeTintColor: '#2e86c1',
          inactiveTintColor: '#34495e',
          activeBackgroundColor: '#a9cce3',
          inactiveBackgroundColor: '#85929e',
          labelStyle: {
          fontSize: 16,
          fontFamily: "montserrat_regular"},
          style:{
            
          }
          }}>
        <Tab.Screen name="TR" component={TRScreen} />
        <Tab.Screen name="EN" component={ENScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )         
}