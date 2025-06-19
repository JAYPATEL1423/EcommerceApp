import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/Navigations/RootNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator></RootNavigator>
    </NavigationContainer>
  )
}