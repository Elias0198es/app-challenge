import { StyleSheet, Text, View } from 'react-native';

export default function PostEditScreen() {
  return (
    <View style={styles.container}>
      <Text>Essa página de editar um post!</Text>
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