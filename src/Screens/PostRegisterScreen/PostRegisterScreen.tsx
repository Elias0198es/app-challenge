import React, { useState } from 'react';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';

import axios from 'axios';
import { Button, Snackbar } from 'react-native-paper';

import { baseUrl } from '../../constants/baseUrl';
import { RegisterRequest } from './_types/RegisterRequest';
import { ContentGroup, FormGroup, Input, TitleGroup, ButtonGroup, ContentInput } from './styles';

export default function PostRegisterScreen({navigation}: {navigation: any}) {

  const [form, setForm] = useState({title: "", body: "", userId: 67});
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  
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
        setForm({...form, body:"", title:""})
        onToggleSnackBar()
        setTimeout(() => {
          navigation.push('Home');
        }, 3000);
    })
    .catch((err) => {
      alert("erro ao postar, tente novamente")
    })
  }

  const onSubmitForm = () => {
    registerPost()
  }

  return (
    <View style={{height: "100%"}}>
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

        <Snackbar
          visible={visible}
          onDismiss={()=>onDismissSnackBar()}
          theme={{ colors: { onSurface: "#6DFF83", surface: "black", }}}
          duration={2000}
          >
          Postado!
        </Snackbar>

      </FormGroup>
    </View>
  );
}

