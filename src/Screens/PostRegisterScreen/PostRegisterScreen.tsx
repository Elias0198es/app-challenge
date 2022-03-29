import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { baseUrl } from '../../constants/baseUrl';

export default function PostRegisterScreen() {

  const [form, setForm] = useState({title: "", body: "", userId: 67});

  const body  = {
    title: form.title,
    body: form.body,
    userId: form.userId
  }

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

  return (
    <View style={styles.container}>
      <Text>Essa página de cadastrar um post!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});