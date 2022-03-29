import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Container, StyledName  } from './styles';

import { Avatar, Divider} from 'react-native-paper';

import axios from 'axios';

export default function UserDetailsScreen({route}: {route: any}) {
  const { id } = route.params;
  const [user, setUser] = useState({});
  useEffect(() => {  

      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
      setUser(response.data)
      });
  
  },[user]);

  return (
    <Container>
      <Avatar.Image size={304} source={require('../../../assets/avatar.png')}/>
      <StyledName><Text>{JSON.stringify(user.name)}</Text></StyledName>
      <Text>{JSON.stringify(user.email)}</Text>
      <StatusBar style="auto" />
    </Container>
  );
}

