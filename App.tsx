import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import PostDetailsScreen from './src/Screens/PostDetailsScreen/PostDetailsScreen';
import PostEditScreen from './src/Screens/PostEditScreen/PostEditScreen';
import PostRegisterScreen from './src/Screens/PostRegisterScreen/PostRegisterScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Listagem de posts' }}/>
          <Stack.Screen name="Details" component={PostDetailsScreen} options={{ title: 'Detalhes do post' }} />
          <Stack.Screen name="Edit" component={PostEditScreen} options={{ title: 'Editar Post' }} />
          <Stack.Screen name="Register" component={PostRegisterScreen} options={{ title: 'Cadastro de post' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


