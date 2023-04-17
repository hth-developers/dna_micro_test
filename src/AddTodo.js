import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const add = async () => {
    try {
      const allTodos = await AsyncStorage.getItem('todo');
      console.log('allTodos->', JSON.parse(allTodos));
      if (!allTodos) {
        const todos = await AsyncStorage.setItem(
          'todo',
          JSON.stringify([todo]),
        );
        console.log('todos->', todos);
      } else {
        const previousTodos = JSON.parse(allTodos);
        const todos = await AsyncStorage.setItem(
          'todo',
          JSON.stringify([todo, ...previousTodos]),
        );
        console.log('todos->', todos);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <TextInput
        style={{margin: 8, borderWidth: 1, padding: 8}}
        placeholder="Enter Todo"
        onChangeText={text => setTodo(text)}
      />
      <Pressable onPress={() => add()}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({});
