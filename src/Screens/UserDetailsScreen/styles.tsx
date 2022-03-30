import styled from "styled-components";
import {Text, View} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-Radius: 10px;
  border: #680c0c;
`;


export const StyledName = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;


export const BackButtonContainer = styled(View)`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

