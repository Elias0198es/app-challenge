import React, { useState, useLayoutEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native';

import { Avatar, Divider, IconButton, Snackbar} from 'react-native-paper';
import axios from 'axios';

import { baseUrl } from '../../constants/baseUrl';
import { CardContainer, CardContent,MapContainer, Title, IconsContainer, PostContent, LoadingContainer,  EmptyContainer, PostsContainer } from './styles';

export default function HomeScreen({navigation}: {navigation: any}) {
  const [posts, setPosts] = useState([]);
  const [isDownPressed, setIsDownPressed] = useState(false);
  const [isUpPressed, setIsUpPressed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  
  const clearThumbState = () => {
    setIsDownPressed(false)
    setIsUpPressed(false)
  }

  let componentMounted = true;

  useLayoutEffect(() => {

    if (componentMounted){ 
      axios.get(`${baseUrl}`).then((response) => {
        setLoading(false);
        setPosts(response.data)
      })
      return () => { 
        componentMounted = false; 
    }
  }
  },[posts]);

  // requisição para deletar um post
  const deletePost =(id:number)=>{
    axios.delete(`${baseUrl}/${id}`, { 
      })
      .then(() => {
        onToggleSnackBar()
      })
    .catch(() => {
      alert("erro ao deletar, tente novamente")
    })
  }

  const onClickDeletar =(id:number)=>{
    deletePost(id);
  }

  const dados =  posts.map((post: any) => {
    return (
      <MapContainer key={post.id}>
        <CardContainer>
          <CardContent>

            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {
                id: post.userId,
              })}
            >
              <Avatar.Image size={64} source={require('../../../assets/avatar.png')}
              />
            </TouchableOpacity>
              
            <Title>
              <Text>{post.title}</Text>
            </Title>

            <Divider />

            <PostContent>
              <Text>{post.body}</Text>
            </PostContent>

            <IconsContainer>
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

              <IconButton onPress={() => isDownPressed||isUpPressed? clearThumbState() :  setIsUpPressed(true)}
              icon={isUpPressed? "thumb-up" : "thumb-up-outline" }
              size={20}
              />
        
              <IconButton onPress={() => isUpPressed||isDownPressed? clearThumbState() :  setIsDownPressed(true)}
                icon={isDownPressed? "thumb-down" : "thumb-down-outline" }
                size={20}
              />
            </IconsContainer>

          </CardContent>
        </CardContainer>
      </MapContainer>
      )
  });

  return (
    <View>

      {/* Abaixo uso os ternários para fazer um componente desaparecer enquanto outro rendeeriza e vice-versa*/}
      
      <PostsContainer style={{display: loading? "none"  : "flex"}}>
        {dados}
      </PostsContainer>

      {/* enquanto a requisição axios finaliza carrego um loading para o usuário*/}
      <LoadingContainer style={{height: "100%", display: loading? "flex"  : "none" }}>{loading? <ActivityIndicator size={'large'} color={"tomato"} /> : <EmptyContainer/>  }</LoadingContainer>

      <Snackbar style={{position: "absolute", bottom: 0}}
        visible={visible}
        onDismiss={()=>onDismissSnackBar()}
        theme={{ colors: { onSurface: "#6DFF83", surface: "black", }}}
        duration={2000}
        action={{
          label: 'OK',
          onPress: () => {
            onDismissSnackBar()
          },
        }}
        >
        Post deletado!
      </Snackbar>

    </View>
  );
}


