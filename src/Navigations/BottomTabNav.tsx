import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/AfterAuthScreens/HomePage';
import ShopPage from '../screens/AfterAuthScreens/ShopPage';
import BagPage from '../screens/AfterAuthScreens/BagPage';
import FavouritesPage from '../screens/AfterAuthScreens/FavouritesPage';
import ProfilePage from '../screens/AfterAuthScreens/ProfilePage';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={HomePage}></Tab.Screen>
      <Tab.Screen name="Shop" component={ShopPage}></Tab.Screen>
      <Tab.Screen name="Bag" component={BagPage}></Tab.Screen>
      <Tab.Screen name="Favourites" component={FavouritesPage}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfilePage}></Tab.Screen>
    </Tab.Navigator>
  );
}
