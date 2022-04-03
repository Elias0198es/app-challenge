import styled from "styled-components";
import {Text, View, ScrollView} from 'react-native';

export const CardContainer = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-Radius: 10px;
  border: black;
  width: 95%;
`;

export const PostContent = styled(Text)`
  text-align: left;
`;

export const Title = styled(Text)`
  margin: 5px;
  font-weight: bold;
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

// componente apenas como segunda alternativa para o ternário - componente nulo
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

// View da parte interna do Card
export const CardContent = styled(View)`
  padding-top: 20px;
  width: 90%;
`;

export const MapContainer = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
