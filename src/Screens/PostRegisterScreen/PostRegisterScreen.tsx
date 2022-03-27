import { StyleSheet, Text, View } from 'react-native';

export default function PostRegisterScreen() {
  return (
    <View style={styles.container}>
      <Text>Essa página de cadastrar um post!</Text>
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