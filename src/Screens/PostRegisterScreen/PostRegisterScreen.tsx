import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, TouchableOpacity } from 'react-native';

import axios from 'axios';
import { Button } from 'react-native-paper';

import { baseUrl } from '../../constants/baseUrl';
import { RegisterRequest } from './_types/RegisterRequest';
import { ContentGroup, FormGroup, Input, TitleGroup, ButtonGroup, ContentInput } from './styles';

export default function PostRegisterScreen({navigation}: {navigation: any}) {

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
        setForm({...form, body:"", title:""})
        navigation.push('Home')
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
      <FormGroup>
        <TouchableOpacity>

          <TitleGroup>
            <Text>Título :</Text>
            <Input
              placeholder="Título"
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={form.title}
              onChangeText={(text)=>{setForm({...form, title:text})}}
            />
          </TitleGroup>

          <ContentGroup>
            <Text>Contéudo :</Text>
            <ContentInput
              placeholder="Contéudo do Post"
              multiline={true}
              onBlur={Keyboard.dismiss}
              value={form.body}
              onChangeText={(text)=>{setForm({...form, body:text})}}
            />
          </ContentGroup>

          <ButtonGroup>
            <Button
              mode="contained"
              onPress={()=>onSubmitForm()}
              >
              Salvar
            </Button>
            <Button
              mode="outlined"
              onPress={() => navigation.navigate('Home')}
              >
              Cancelar
            </Button>
          </ButtonGroup>

        </TouchableOpacity>
      </FormGroup>
    </ScrollView>
  );
}

