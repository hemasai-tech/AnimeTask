import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack';
import AnimeContent from './src/components/cards/AnimeContent';
import AnimeCard from './src/components/cards/AnimeCard';
import { IPropsStackNavigation } from './modals/types';




type RootStackParamList = {
  AnimeCard: undefined;
  AnimeContent: { contentLoad: { mainImage: string } };
};

type AnimeContentNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AnimeContent'>;

type OpenContentFunction = (navigation: AnimeContentNavigationProp, content: { mainImage: string }) => void;
const Stack = createNativeStackNavigator<IPropsStackNavigation>();

const App:React.FC<OpenContentFunction> = () => {
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
