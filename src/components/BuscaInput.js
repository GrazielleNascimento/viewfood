import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #FED9B7;
    flex-direction: row;
    border-radius: 5px;
    padding-left: 15px;
    align-items: center;
    margin-t
    margin-bottom: 15px;
`
const Input = styled.TextInput`
    flex: 1;
    font-size: 20px;
    color: #4A4A4A;
    margin-left: 10px;
    margin-right: 10px
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
                placeholderTextColor="#4A4A4A"
                value={value}
                onChangeText={onChangeText}
            />
            <CustonButton onPress={handleBuscarClick}>
                <AntDesign name={icon} size={40} color="#4A4A4A" />
            </CustonButton>
        </InputArea>
    )
}