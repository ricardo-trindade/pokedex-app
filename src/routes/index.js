import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerStyle: { backgroundColor: '#EF5350' }, 
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' } 
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pokédex' }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}