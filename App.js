// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AnimeContent from './src/components/cards/AnimeContent';
import AnimeCard from './src/components/cards/AnimeCard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimeCard">
        <Stack.Screen
          options={{headerShown: false}}
          name="AnimeCard"
          component={AnimeCard}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AnimeContent"
          component={AnimeContent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
