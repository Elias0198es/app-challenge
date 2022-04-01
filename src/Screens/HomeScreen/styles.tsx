import styled from "styled-components";
import {Text, View, ScrollView} from 'react-native';


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

export const LoadingContainer = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyContainer = styled(View)`
  display:none;
`;

export const PostsContainer = styled(ScrollView)`
  margin-bottom: 50px;
  flex-direction: column;
`;


export const ScreenContainer = styled(View)`
  margin-bottom: 50px;
`;


