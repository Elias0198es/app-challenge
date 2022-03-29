import { Text } from 'react-native';
import React, { useState, useEffect } from 'react';

import { Avatar } from 'react-native-paper';
import axios from 'axios';

import { Container, StyledName  } from './styles';

export default function UserDetailsScreen({route}: {route: any}) {
  const { id } = route.params;
  const [user, setUser] = useState({});

  let componentMounted = true;

  useEffect(() => {  

    if (componentMounted){ 
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
      setUser(response.data)
      })
      return () => { 
        componentMounted = false; 
    }
  }
  },[user]);

  return (
    <Container>
      <Avatar.Image size={304} source={require('../../../assets/avatar.png')}/>
      <StyledName><Text>{JSON.stringify(user.name)}</Text></StyledName>
      <Text>{JSON.stringify(user.email)}</Text>
    </Container>
  );
}

