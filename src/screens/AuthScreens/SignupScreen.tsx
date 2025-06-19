import { View, Text } from 'react-native'
import React from 'react'
import SignupScreenStyle from './SignupScreen.styles'

export default function SignupScreen() {
  return (
    <View style={SignupScreenStyle.container}>
      <Text style={SignupScreenStyle.Text}>Hello World</Text>
    </View>
  )
}