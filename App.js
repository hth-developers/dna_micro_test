// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Todos from './src/Todos';
import AddTodo from './src/AddTodo';
import DeleteTodo from './src/DeleteTodo';
import UpdateTodo from './src/UpdateTodo';
import SearchTodo from './src/SearchTodo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todos" component={Todos}  />
        <Stack.Screen name="AddTodo" component={AddTodo}  />
        <Stack.Screen name="DeleteTodo" component={DeleteTodo} />
        <Stack.Screen name="UpdateTodo" component={UpdateTodo} />
        <Stack.Screen name="SearchTodo" component={SearchTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
