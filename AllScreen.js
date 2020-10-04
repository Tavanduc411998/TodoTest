import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Constants from "expo-constants";
import Header from './component/header';
import TodoItem from './component/todoItem';
import AddTodo from './component/addTodo';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AllScreen() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1' },
    {text: 'buy apple juice', key: '2' },
    {text: 'buy orange', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ... prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const Todo = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>{route.param?.number}({route.param?.status})</Text>
      <Text>{route.param?.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
