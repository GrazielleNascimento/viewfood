import React from "react";
import styled from 'styled-components/native'

// navegacao
import { useNavigation } from "@react-navigation/native";

const Card = styled.TouchableOpacity`
width: 50px;
height: 30px;
background-color: #ffff;
flex-direction: center;
justify-content: center;
border-radius: 5px;
align-items: center;
margin: 5px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`
const CustomCardText = styled.Text`
font-size: 14px;
color: #000000;
font-weight: bold;
`

const BtnVoltar = () => {

    const navigation = useNavigation();

    const handleVoltarClick = () => {
        console.log('Ir para a tela Home');
        navigation.navigate('Home');
    }

    return (
        <Card onPress={handleVoltarClick}>
            <CustomCardText>Voltar</CustomCardText>
        </Card>
    )
}

export default BtnVoltar;