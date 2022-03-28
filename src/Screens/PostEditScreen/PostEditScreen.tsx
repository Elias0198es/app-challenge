import { StyleSheet, SafeAreaView, Text, View, ScrollView, TextInput, Keyboard, TouchableOpacity  } from 'react-native';
import axios from 'axios';
import { baseUrl } from '../../constants/baseUrl';
import React, { useState, useEffect } from 'react';
import { EditRequest } from './_types/EditRequest';

export default function PostEditScreen({route}: {route: any}) {
  const { id } = route.params;

  const [form, setForm] = useState({title:"", body:""});

  const body : EditRequest = {
    title: form.title,
    body: form.body,
  }

  // requisição para editar post 
  const editPost =(id:number)=>{
    axios.patch(`${baseUrl}/${id}`, { 
      title:body.title, body:body.body,
      })
      .then((res) => {
          alert("Post Alterado")
          console.log(res)

    })
    .catch((err) => {
      alert("erro ao alterar post, tente novamente")
    })
  }

  const onSubmitForm = (event:any) => {
    editPost(id)
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
            maxLength={20}
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

