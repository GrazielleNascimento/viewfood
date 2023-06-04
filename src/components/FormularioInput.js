import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #FED9B7;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #4A4A4A;
    margin-left: 10px;
`

export default ({ placeholder, value, onChangeText, }) => {
    return (
        <InputArea>
            <Input
                placeholder={placeholder}
                placeholderTextColor="#4A4A4A"
                value={value}
                onChangeText={onChangeText}
            />
        </InputArea>
    )
}