import { StyleSheet, Button, Text, View } from 'react-native';
import { baseUrl } from '../../constants/baseUrl';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function HomeScreen({navigation}: {navigation: any}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    axios.get(`${baseUrl}`).then((response) => {
      setPosts(response.data)
      // console.log(response.data);
    });

  },[posts]);

  const dados =  posts.map((post: any) => {
    return (
        <View key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      )
  });

  return (
    <View style={styles.container}>
      <Text>Essa página é a Home Screen!</Text>
        {dados}
      <Button
        title="Cadastrar um post"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});