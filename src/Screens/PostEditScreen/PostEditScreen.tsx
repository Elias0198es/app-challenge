import React, { useState } from 'react';
import {Text, ScrollView, Keyboard, TouchableOpacity } from 'react-native';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

import { baseUrl } from '../../constants/baseUrl';
import { EditRequest } from './_types/EditRequest';
import { ContentGroup, FormGroup, Input, TitleGroup, ButtonGroup, ContentInput } from './styles';

export default function PostEditScreen({route}: {route: any}) {
  const navigation = useNavigation();
  const { id, postTitle, postBody } = route.params;

  const [form, setForm] = useState({title: postTitle, body:postBody});

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

  const onSubmitForm = () => {
    editPost(id)
  }

  return (
    <ScrollView>
      <FormGroup>
        <TouchableOpacity>

          <TitleGroup>
            <Text>Novo Título :</Text>
            <Input
              placeholder="Título"
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={form.title}
              onChangeText={(text)=>{setForm({...form, title:text})}}
            />
          </TitleGroup>

          <ContentGroup>
            <Text>Conteúdo :</Text>
            <ContentInput
              placeholder="Conteúdo do post"
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


