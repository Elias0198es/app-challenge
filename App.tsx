import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import UserDetailsScreen from './src/Screens/UserDetailsScreen/UserDetailsScreen';
import PostEditScreen from './src/Screens/PostEditScreen/PostEditScreen';
import PostRegisterScreen from './src/Screens/PostRegisterScreen/PostRegisterScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Listagem de posts' }}/>
          <Stack.Screen name="Details" component={UserDetailsScreen} options={{ title: 'Informações do usuário' }} />
          <Stack.Screen name="Edit" component={PostEditScreen} options={{ title: 'Editar Post' }} />
          <Stack.Screen name="Register" component={PostRegisterScreen} options={{ title: 'Cadastro de post' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


