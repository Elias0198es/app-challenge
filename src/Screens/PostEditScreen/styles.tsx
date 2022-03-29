import styled from "styled-components";
import {TextInput, View} from 'react-native';

export const FormGroup = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    border-Radius: 10px;
    border: #680c0c;
`;

export const Input = styled(TextInput)`
    color: #0a0004;
    background: papayawhip;
    border: black;
    border-Radius: 3px;
    width: 80%;
    max-width: 80%;
    padding-left: 10px;
`;

export const ContentInput = styled(TextInput)`
    color: #0e0005;
	background: papayawhip;
	border: black;
	border-Radius: 3px;
	width: 80%;
    max-width: 80%;
    height: 180px;
    max-height: 180px;
    padding-left: 10px;
    padding-right: 5px;
`;

export const TitleGroup = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const ContentGroup = styled(View)`
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const ButtonGroup = styled(View)`
	display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
`;

