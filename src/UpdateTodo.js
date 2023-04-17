import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdateTodo = ({route, navigation}) => {
  const {item} = route.params;
  const [update, setUpdate] = useState(item);
  const updateItem = async () => {
    try {
      const allTodos = await AsyncStorage.getItem('todo');
      console.log('allTodos->', JSON.parse(allTodos));
      if (!allTodos) {
        console.log('todo not found ->');
      } else {
        const previousTodos = JSON.parse(allTodos);
        let newtodos = previousTodos.map(todo => {
          if (todo === item) {
            return update;
          } else {
            return todo;
          }
        });
        const todos = await AsyncStorage.setItem(
          'todo',
          JSON.stringify(newtodos),
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
        value={update}
        placeholder="Enter Todo"
        onChangeText={text => setUpdate(text)}
      />
      <Pressable onPress={() => updateItem()}>
        <Text>Update</Text>
      </Pressable>
    </View>
  );
};

export default UpdateTodo;

const styles = StyleSheet.create({});
