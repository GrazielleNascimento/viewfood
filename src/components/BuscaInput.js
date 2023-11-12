import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const InputArea = styled.View`
width: 250px;
height: 45px;
background-color: #fff;
flex-direction: row;
border-radius: 5px;
padding-left: 15px;
align-items: center;
margin-bottom: 15px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
margin-top: 10%;
`
const Input = styled.TextInput`
flex: 1;
font-size: 20px;
color: #4A4A4A;
margin-left: 10px;
margin-right: 10px;
placeholderTextColor= #c4c4c4;
`
const CustonButton = styled.TouchableOpacity`
width: 50px;
margin-right: 10px;
justify-content: center;
align-items: center;
`

export default ({ icon, placeholder, value, onChangeText, codigo }) => {

    const navigation = useNavigation();

    const handleBuscarClick = () => {
        if (value) {
            console.log('Ir para a tela de lista de produto especifico');
            navigation.navigate('ListaProduto', { codigo: value });
        } else {
            console.log('Ir para a tela de lista de produtos');
            navigation.navigate('ListaProduto');
        }
    }


    return (
        <InputArea>
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
            <CustonButton onPress={handleBuscarClick}>
                <AntDesign name={icon} size={35} color="#4A4A4A" />
            </CustonButton>
        </InputArea>
    )
}