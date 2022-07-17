import { View, Image, StyleSheet, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import Search from '../Screens/Search'
import AddEvent from '../Screens/AddEvent'
import MyEvents from '../Screens/MyEvents'
import Profile from '../Screens/Profile'


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { 
        position: 'absolute', 
        height: 111, 
        backgroundColor: '#121212', 
        opacity: 0.9,
        borderRadius: 30,
        bottom: -10,
        left: 0,
        right: 0,
        elevation: 0,
        borderTopWidth: 0,
      },
    }}>
      <Tab.Screen name='Home' component={Home} 
      options={{
        tabBarIcon: ({size}) => {
          return (
            <Image
              style={{ width: size, height: size }}
              source={require('../assets/homeIcon.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Search' component={Search} 
      options={{
        tabBarIcon: ({size}) => {
          return (
            <Image
              style={{ width: size, height: size }}
              source={require('../assets/search.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Add Event' component={AddEvent} 
      options={{
        tabBarIcon: ({size}) => {
          return (
            <Image
              style={{ width: size, height: size }}
              source={require('../assets/add.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='My Events' component={MyEvents} 
      options={{
        tabBarIcon: ({size}) => {
          return (
            <Image
              style={{ width: size, height: size }}
              source={require('../assets/ticket.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Profile' component={Profile} 
      options={{
        tabBarIcon: ({size}) => {
          return (
            <Image
              style={{ width: size, height: size }}
              source={require('../assets/user.png')}
            />
          );
        },
      }}/>
    </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default TabNavigator