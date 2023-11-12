import React from "react";

import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';

const BtnArea = styled.TouchableOpacity`
width: 45px;
height: 45px;
background-color: rgba(184, 80, 45, 0.5);
margin-top: 10%;
margin-left: 10px;
border-radius: 5px;
align-items: center;
justify-content: center;
`


const BtnNotificacao = ({ icon }) => {

    return (
        <BtnArea>
            <AntDesign name={icon} size={28} color="#fff" />
        </BtnArea>
    )
};

export default BtnNotificacao;