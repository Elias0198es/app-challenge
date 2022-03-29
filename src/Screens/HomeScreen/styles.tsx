import styled from "styled-components";
import {Text, View} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: whitesmoke;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-Radius: 10px;
  border: black;
`;

export const PostContent = styled(Text)`
  text-align: justify;
`;

export const Title = styled(Text)`
  margin: 5px;
  color: red;
  text-align: justify;
`;

export const IconsContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;