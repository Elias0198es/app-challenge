import React, { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { baseUrl } from '../../constants/baseUrl';
import { RegisterRequest } from './_types/RegisterRequest';

export default function PostRegisterScreen() {

  const [form, setForm] = useState({title: "", body: "", userId: 67});

  const body: RegisterRequest  = {
    title: form.title,
    body: form.body,
    userId: form.userId
  }

  // requisição para fazer post
  const registerPost =()=>{
    axios.post(`${baseUrl}`, { 
      title:body.title, body:body.body, userId:body.userId,
      })
      .then((res) => {
          alert("Postado!")
          console.log(res)

    })
    .catch((err) => {
      alert("erro ao postar, tente novamente")
    })
  }

  const onSubmitForm = () => {
    registerPost()
  }

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={onSubmitForm}
      >
          <TextInput
            style={styles.textInput}
            placeholder="Título"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={form.title}
            onChangeText={(text)=>{setForm({...form, title:text})}}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Título"
            multiline={true}
            onBlur={Keyboard.dismiss}
            value={form.body}
            onChangeText={(text)=>{setForm({...form, body:text})}}
          />
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  textHeight:{
    maxHeight: 80},
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
});