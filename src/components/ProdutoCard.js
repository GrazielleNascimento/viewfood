import React from "react";
import styled from 'styled-components/native'

import { AntDesign } from '@expo/vector-icons';

// navegacao
import { useNavigation } from "@react-navigation/native";

// api
import ApiService from "../service/ProdutoApiService";

const Container = styled.TouchableOpacity`
    width: 95%;
    height: 150px;
    background-color: ${(props) => props.background || '#D9D9D9'};
    flex-direction: row;
    border-radius: 5px;
    align-items: center;
    margin: 5px;
    margin-top: 30px
    padding-left: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    elevation: 4;
`

const InfoContainer = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`

const ProdutoImagem = styled.Text`
    font-size: 20px;
    font-weight: bold;
    width: 20%;
`

const ProdutoNome = styled.Text`
    font-size: 20px;
    font-weight: bold;
`
const InformacaoArea = styled.View`
    flex-direction: row;
    align-items: center;
`
const InformacaoIcon = styled.ImageBackground`
width: 16px;
heigth: 16px;
`

const InformacaoText = styled.Text`
    font-size: ${(props) => props.size || '14px'};
    width: 100%;
    text-align: ${(props) => props.align || 'left'};
`


const InformacaoCategoria = styled.View`
    background-color: #D9D9D9;
    width: 60px;
    border-radius: 5px;
`

const DeleteButton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
`

const DeleteIcon = styled.ImageBackground`
    width: 16px;
    height: 16px;
    align-items: center;
    flex-direction: row;
`


const ProdutoCard = ({ codigo, nome, quantidade, dataValidade, preco, categoria, onPress }) => {

    const navigation = useNavigation();

    const handleDeleteClick = async () => {
        let res = await ApiService.deletaProduto(codigo)
        if (res.message === 'O produto foi removido com sucesso!') {
            navigation.reset({
                routes: [{ name: 'Home' }]
            })
        } else {
            res.message
            alert("Erro: " + JSON.stringify(res.error ? res.error[0].msg : 'Ocorreu um erro ao tantar deletar o produto'))
        }
    }


    return (
        <Container onPress={onPress} background="#c5c5">
            <ProdutoImagem>IMG</ProdutoImagem>
            <InfoContainer>
                <ProdutoNome>{nome}</ProdutoNome>
                <InformacaoCategoria>

                    <InformacaoText size={12} align={'center'}>{categoria}</InformacaoText>
                </InformacaoCategoria>

                <InformacaoArea>
                    <AntDesign name={"shoppingcart"} size={16} color="#4A4A4A" />
                    <InformacaoText>Quantidade: {quantidade}</InformacaoText>
                </InformacaoArea>
                <InformacaoArea>
                    <AntDesign name={""} size={16} color="#4A4A4A" />
                    <InformacaoText>Preco: {preco}</InformacaoText>
                </InformacaoArea>
                <InformacaoArea>
                    <InformacaoText>Data de Validade: {dataValidade}</InformacaoText>
                </InformacaoArea>
                <InformacaoArea>
                    <AntDesign name={"qrcode"} size={16} color="#4A4A4A" />
                    <InformacaoText>Codigo: {codigo}</InformacaoText>
                </InformacaoArea>
            </InfoContainer>
            <DeleteButton onPress={handleDeleteClick}>
                <DeleteIcon source={require('../../assets/icons/DeleteIcon.png')} />
            </DeleteButton>
        </Container>

    )
}

export default ProdutoCard;