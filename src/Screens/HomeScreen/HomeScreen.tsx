import React, { useState, useEffect } from 'react';
import { Button, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import { Avatar, Divider, IconButton} from 'react-native-paper';
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
        <TouchableOpacity
        onPress={() => navigation.navigate('Details', {
          id: post.userId,
        })}
        >
          <Avatar.Image size={24} source={require('../../../assets/avatar.png')}
          />
        </TouchableOpacity>
          <Title><Text>{post.title}</Text></Title>
          <Divider />
          <Text>{post.body}</Text>
          <IconButton onPress={() => onClickDeletar(post.id)}
          icon="delete-off-outline"
          />
          <IconButton onPress={() => navigation.navigate('Edit', {
            id: post.id,
            postTitle: post.title,
            postBody: post.body
          })}
          icon="pencil-off"
          />
          <View>
            <IconButton
            icon="thumb-up-outline"
            size={20}
          />
          <IconButton
            icon="thumb-down-outline"
            size={20}
          />
          </View>
    
        </View>
      </Container>
      
      )
  });

  return (
    <ScrollView >

      <IconButton
        icon="pencil-plus"
        onPress={() => navigation.navigate('Register')}
      />
        {dados}
    </ScrollView>
  );
}
