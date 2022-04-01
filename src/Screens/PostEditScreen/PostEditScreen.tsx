import React, { useState } from 'react';
import {Text, Keyboard, TouchableOpacity, View } from 'react-native';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Button, Snackbar } from 'react-native-paper';

import { baseUrl } from '../../constants/baseUrl';
import { EditRequest } from './_types/EditRequest';
import { ContentGroup, FormGroup, Input, TitleGroup, ButtonGroup, ContentInput } from './styles';

export default function PostEditScreen({route}: {route: any}) {
  const navigation : any = useNavigation();
  const { id, postTitle, postBody } = route.params;

  const [form, setForm] = useState({title: postTitle, body:postBody});
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  
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
        onToggleSnackBar()
        setTimeout(() => {
          navigation.push('Home');
        }, 3000);
    })
    .catch((err) => {
      alert("erro ao alterar post, tente novamente")
    })
  }

  const onSubmitForm = () => {
    editPost(id)
  }

  return (
    <View style={{height: "100%"}}>
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

        <Snackbar
          visible={visible}
          onDismiss={()=>onDismissSnackBar()}
          theme={{ colors: { onSurface: "#6DFF83", surface: "black", }}}
          duration={2000}
          >
          Post alterado!
        </Snackbar>

      </FormGroup>
    </View>
  );
}


