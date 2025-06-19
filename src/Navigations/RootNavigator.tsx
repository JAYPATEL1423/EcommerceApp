import React from 'react';
import StackNavigatore from './StackNavigatore';
import BottomTabNav from './BottomTabNav';

const isAuthenticated = false;

export default function RootNavigator() {
  return isAuthenticated ? <BottomTabNav /> : <StackNavigatore />;
}
