import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/screens/homeScreen/homeScreen';
import UserDetailsScreen from './src/screens/userDetailsScreen/userDetailsScreen';
import PostEditScreen from './src/screens/postEditScreen/postEditScreen';
import PostRegisterScreen from './src/screens/postRegisterScreen/postRegisterScreen';
import Header from './src/components/header/header';

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
      <Header/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Details" component={UserDetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Edit" component={PostEditScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={PostRegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


