import React, {useState} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, TextInput, View, Modal } from 'react-native';

export default function Add() {
  const [modalWindow, setModalWindow] = useState(false);
  const [text, setValue] = useState('')
  const onChange = (text)=> {
    setValue(text)
  };
  return (
    <View style={styles.itemContainer}>
      <Modal visible={modalWindow}>
        <View style={styles.itemContainer}>
          <FontAwesomeIcon name ='times-circle'size={50} color={'#BDD3CC'} onPress={() => setModalWindow(false)} />
          <Text style={styles.text}> создание цели</Text>
          <View style={styles.itemContainer}>
          <Text style={styles.text}>Enter name</Text>
          <TextInput style={styles.input} onChangeText={onChange} placeholder=' name'></TextInput>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>New Aim</Text>
      <FontAwesomeIcon name ='plus-circle'size={50} color={'#BDD3CC'} onPress={() => setModalWindow(true)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input :{
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%'
  },
  itemContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  }
});