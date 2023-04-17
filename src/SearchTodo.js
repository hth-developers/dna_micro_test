import {StyleSheet, Text, View, TextInput,FlatList,Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

const SearchTodo = ({route, navigation}) => {
  const [search, setSearch] = useState();
  const {data} = route.params;

  const filteredTodos = data?.filter(item =>
    item?.toLowerCase()?.includes(search?.toLowerCase()),
  );

  return (
    <View>
      <TextInput
        style={{margin: 8, borderWidth: 1, padding: 8}}
        value={search}
        placeholder="Search Todo"
        onChangeText={text => setSearch(text)}
      />
      <FlatList
        data={filteredTodos}
        renderItem={({item}) => (
          <View>
            <Pressable
              onPress={() => navigation.navigate('UpdateTodo', {item})}
              // onLongPress={() => {}}
              style={{margin: 4, padding: 8, borderWidth: 0.5}}>
              <Text>{item}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default SearchTodo;

const styles = StyleSheet.create({});
