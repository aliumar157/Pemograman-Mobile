import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigasi from './src/TabNavigasi';


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigasi />
    </NavigationContainer>
  );
}