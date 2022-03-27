import { StyleSheet, Button, Text, View } from 'react-native';

export default function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text>Essa página é a Home Screen!</Text>
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