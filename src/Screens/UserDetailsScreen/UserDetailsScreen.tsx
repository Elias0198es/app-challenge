import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

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
    <View style={styles.container}>
      <Text>Essa página é a de informações de quem postou!</Text>
      <Text>{JSON.stringify(user.name)}</Text>
      <Text>{JSON.stringify(user.email)}</Text>
      <StatusBar style="auto" />
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