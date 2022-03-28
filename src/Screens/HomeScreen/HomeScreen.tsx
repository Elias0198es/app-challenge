import React, { useState, useEffect } from 'react';
import { Button, Text, View, ScrollView } from 'react-native';

import { Avatar } from 'react-native-paper';
import axios from 'axios';

import { baseUrl } from '../../constants/baseUrl';
import { Container,Title } from './styles';

export default function HomeScreen({navigation}: {navigation: any}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    axios.get(`${baseUrl}`).then((response) => {
      setPosts(response.data)
    });

  },[posts]);

  // requisição para deletar um post
  const deletePost =(id:number)=>{
    axios.delete(`${baseUrl}/${id}`, { 
      })
      .then(() => {
          alert("Post deletado")

    })
    .catch((err) => {
      alert("erro ao deletar, tente novamente")
    })
  }

  const onClickDeletar =(id:number)=>{
    deletePost(id);
  }

  // map do estado e estilização
  const dados =  posts.map((post: any) => {
    return (
     
      <Container key={post.id}>
        <View>
          <Avatar.Image size={24} source={require('../../../assets/avatar.png')} />
          <Title><Text>{post.title}</Text></Title>
          <Text>{post.body}</Text>
          <Button onPress={() => onClickDeletar(post.id)}
          title="deletar"
          />
          <Button onPress={() => navigation.navigate('Edit', {
            id: post.id,
            postTitle: post.title,
            postBody: post.body
          })}
          title="Editar"
          />
        </View>
      </Container>
      
      )
  });

  return (
    <ScrollView >
      <Text>Essa página é a Home Screen!</Text>

      <Button
        title="Cadastrar um post"
        onPress={() => navigation.navigate('Register')}
      />
        {dados}
    </ScrollView>
  );
}
