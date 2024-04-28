import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function List({ element }) {
  return (
    <TouchableHighlight style={styles.itemContainer} onPress={() => {}}>
      <Text style={styles.text}>{element.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  }
});