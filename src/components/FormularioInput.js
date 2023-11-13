import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';

const InputArea = styled.View`
    width: 90%;
    height: 60px;
    // background-color: #FED9B7;
    flex-direction: row;
    // border-radius: 30px;
    padding-left: 10px;
    align-items: center;
    margin-bottom: 15px;
    border-bottom-width: 1px;
`
const Input = styled.TextInput`
    flex: 1;
    font-size: 20px;
    color: #000;
    placeholderTextColor: #c4c4c4;
    // margin-left: 10px;
`

export default ({ placeholder, value, onChangeText, }) => {
    return (
        <InputArea>
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </InputArea>
    )
}