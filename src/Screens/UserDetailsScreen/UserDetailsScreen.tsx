import { Text } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

import { Avatar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { Container, StyledName, BackButtonContainer } from './styles';

export default function UserDetailsScreen({route}: {route: any}) {
  const navigation = useNavigation();
  const { id } = route.params;
  const [user, setUser] = useState({});
  const componentMounted = useRef(true);
  const [loading, setLoading] = useState(false);

  useEffect( () => {  
    setLoading(true);

    if (componentMounted.current){ 
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
      setUser(response.data)
      })
  } return () => { 
    componentMounted.current = false; 
}

  },[user]);

  return (
    <Container>
      <Avatar.Image size={304} source={require('../../../assets/avatar.png')}/>

      <StyledName>
        <Text>{JSON.stringify(user.name)}</Text>
      </StyledName>

      <Text>{JSON.stringify(user.email)}</Text>

      <BackButtonContainer>
        <Button
          mode="outlined"
          icon="arrow-left"
          onPress={() => navigation.navigate('Home')}
        >
          Voltar
        </Button>
      </BackButtonContainer>
    </Container>
  );
}

