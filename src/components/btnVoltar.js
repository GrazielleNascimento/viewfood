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
export const CustonIcon = styled.View`
height: 40px;
width: 40px;
border-radius: 5px;
// background-color: #D9D9D9;
background-color: ${(props) => props.background || '#D9D9D9'};
align-items: center;
justify-content: center;
`


const BtnVoltar = () => {

    const navigation = useNavigation();

    const handleVoltarClick = () => {
        navigation.navigate('Home');
    }

    return (
        <Card onPress={handleVoltarClick}>
            <CustonIcon>
                <AntDesign name={"left"} size={35} color="#4A4A4A" />
            </CustonIcon>
        </Card>
    )
}

export default BtnVoltar;