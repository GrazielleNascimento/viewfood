import React from "react";
import styled from 'styled-components/native'

// navegacao
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
    width: 100%;
    height: 120px;
    background-color: #ffff;
    flex-direction: row;
    border-radius: 5px;
    align-items: center;
    margin: 5px;
    margin-top: 30px
    padding-left: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    const Input = styled.TextInput
`

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`

const Nome = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

const Informacao = styled.Text`
    font-size:16;
`


const ProdutoCard = ({ codigo, nome, quantidade, dataValidade, preco, categoria }) => {

    const navigation = useNavigation();

    return (
        <Container>
            <Nome>{nome}</Nome>
            <InfoArea>
                <Informacao>Codigo: {codigo}</Informacao>
                <Informacao>Categoria: {categoria}</Informacao>
                <Informacao>Quantidade: {quantidade}</Informacao>
                <Informacao>Preco: {dataValidade}</Informacao>
                <Informacao>Data de Validade: {preco}</Informacao>
            </InfoArea>
        </Container>

    )
}

export default ProdutoCard;