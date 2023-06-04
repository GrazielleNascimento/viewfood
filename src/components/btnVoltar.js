import React from "react";
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';

// navegacao
import { useNavigation } from "@react-navigation/native";

const Card = styled.TouchableOpacity`
width: 50px;
height: 30px;
flex-direction: center;
justify-content: center;
border-radius: 5px;
align-items: center;
margin: 5px;
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
            <AntDesign name={"arrowleft"} size={40} color="#4A4A4A" />

        </Card>
    )
}

export default BtnVoltar;