import React, { useState } from 'react';
import { IconButton, Colors } from 'react-native-paper';

import { MenuIconsContainer } from './styles';
import * as RootNavigation from '../../rootNavigation/rootNavigation';

const BottomMenu = () => {
    const [isPencilPressed, setIsPencilPressed] = useState(false);
    const [isHomePressed, setIsHomePressed] = useState(true);

  return (
    <MenuIconsContainer>
        <IconButton
        onPress={() => {RootNavigation.navigate('Register'); setIsPencilPressed(true); setIsHomePressed(false) }}
        icon={isPencilPressed? "pencil-plus" : "pencil-plus-outline"}
        // color={Colors.red500}
        size={30}
        />

        <IconButton
        onPress={() => {RootNavigation.navigate('Home'); setIsPencilPressed(false); setIsHomePressed(true)}}
        icon={isHomePressed? "home-variant" : "home-variant-outline" }
        // color={Colors.red500}
        size={30}
        />
    </MenuIconsContainer>
  );
};

export default BottomMenu;