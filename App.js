import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/header';
import List from './components/list';
import Add from './components/add';
import { FlatList } from 'react-native-web';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text:'Купить молоко', index: 1},
    {text:'Уборка', index: 2},
    {text:'Работа', index: 3},
    {text:'Прочитать книгу', index: 4},
  ])
  return (
    <View style={styles.container}>
      <Header />      
      <View>
        <FlatList data = {listOfItems} renderItem = {({item}) =>(
          <List element={item} />
        )} />
      </View>
      <Add />
    <View/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE9E5', 
  },
});