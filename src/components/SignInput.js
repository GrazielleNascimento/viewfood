import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #FED9B7;
    flex-direction: row;
    border-radius: 5px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
    elevation: 4;
`
const Input = styled.TextInput.attrs({
    placeholderTextColor: '#4A4A4A',
    border: '#4A4A4A',
    selectionColor: 'transparent',
})`
    flex: 1;
    font-size: 20px;
    color: #4A4A4A;
    margin-left: 10px;
`

export default ({ icon, placeholder, value, onChangeText, password }) => {
    return (
        <InputArea>
            <AntDesign name={icon} size={35} color="#4A4A4A" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#4A4A4A"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    )
}