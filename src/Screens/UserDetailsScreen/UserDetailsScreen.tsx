import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function UserDetailsScreen() {
  const [user, setUser] = useState([]);

  useEffect(() => {

    axios.get(`https://jsonplaceholder.typicode.com/users/2`).then((response) => {
      setUser(response.data)
      // console.log(response.data)
    });

  },[user]);

  return (
    <View style={styles.container}>
      <Text>Essa página é a de informações de quem postou!</Text>
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