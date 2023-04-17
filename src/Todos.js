import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchTodo from './SearchTodo';

const Todos = props => {
  const {navigation} = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const todos = await AsyncStorage.getItem('todo');
      setData(JSON.parse(todos));
      console.log('todos-->', todos);
    } catch (error) {
      console.log('error fetching todos');
    }
  };

  const deleteItem = async deletedItem => {
    const deletedArray = data.filter(item => item !== deletedItem);
    setData(deletedArray);
    await AsyncStorage.setItem('todo', JSON.stringify(deletedArray));
  };

  return (
    <View style={{flex: 1}}>
      <Pressable
        style={{alignSelf: 'center', padding: 8}}
        onPress={() => navigation.navigate('SearchTodo', {data})}>
        <Text>Search</Text>
      </Pressable>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Pressable
              onPress={() => navigation.navigate('UpdateTodo', {item})}
              onLongPress={() => deleteItem(item)}
              style={{margin: 4, padding: 8, borderWidth: 0.5}}>
              <Text>{item}</Text>
            </Pressable>
          </View>
        )}
      />
      <Pressable
        style={{bottom: 0, right: 0}}
        onPress={() => props.navigation.navigate('AddTodo')}>
        <Text>Add Todo</Text>
      </Pressable>
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({});
