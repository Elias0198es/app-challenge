import React, { BackHandler, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { HeaderIconsContainer } from './styles';

const Header = () => {
    
    return (
      <Appbar.Header>
        <HeaderIconsContainer>
          <View>
          <Appbar.Action icon="account-circle" size={40} color="black"  /> 
          </View>
          <View>
          <Appbar.Action icon="logout" color="black" onPress={() => {BackHandler.exitApp()}}  />
          </View>
        </HeaderIconsContainer>
      </Appbar.Header>
    );
  };
  
  export default Header;