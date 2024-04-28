import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>My Aims</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    //paddingTop: 50,
    height: 100,
    width: '100%',
    backgroundColor: '#EFC8C8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: 'black', 
    fontWeight: 'bold',
  }
});