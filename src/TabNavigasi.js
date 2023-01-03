import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lainnya from './Lainnya';
import HomeScreen from './HomeScreen';
import Destinasi from './Destinasi';
import Informasi from './Informasi';

const Tab = createBottomTabNavigator();

export const TabNavigasi = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            }
            else if (route.name === 'Destinasi') {
              iconName = focused
                ? 'albums'
                : 'albums-outline';
            }
            else if (route.name === 'Informasi') {
              iconName = focused
                ? 'information'
                : 'information-outline';
            }
            else if (route.name === 'Lainnya') {
              iconName = focused
              ? 'ios-list'
              : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Destinasi" component={Destinasi} />
        <Tab.Screen name="Informasi" component={Informasi} />
        <Tab.Screen name="Lainnya" component={Lainnya} />
      </Tab.Navigator>
    ) 
}

export default TabNavigasi