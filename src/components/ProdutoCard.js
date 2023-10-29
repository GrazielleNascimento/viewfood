import React from "react";
import styled from 'styled-components/native'

// navegacao
import { useNavigation } from "@react-navigation/native";

// api
import ApiService from "../service/ProdutoApiService";

const Container = styled.TouchableOpacity`
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

const DeleteButton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #FF5151;
    border-radius: 5px;
    width: 45px;
    height: 20px
    justify-content: space-between;
    align-items: center;
`

const DeleteButtonText = styled.Text`
    color: black;
`


const ProdutoCard = ({ codigo, nome, quantidade, dataValidade, preco, categoria, onPress }) => {

    const navigation = useNavigation();

    const handleDeleteClick = async () => {
        let res = await ApiService.deletaProduto(codigo)
        if (res.message === 'O produto foi removido com sucesso!') {
            alert('✅Produto deletado com sucesso!')
            navigation.reset({
                routes: [{ name: 'Home' }]
            })
        } else {
            res.message
            alert("Erro: " + JSON.stringify(res.error ? res.error[0].msg : 'Ocorreu um erro ao tantar deletar o produto'))
        }
    }


    return (
        <Container onPress={onPress}>
            <Nome>{nome}</Nome>
            <InfoArea>
                <Informacao>Codigo: {codigo}</Informacao>
                <Informacao>Categoria: {categoria}</Informacao>
                <Informacao>Quantidade: {quantidade}</Informacao>
                <Informacao>Preco: {preco}</Informacao>
                <Informacao>Data de Validade: {dataValidade}</Informacao>
            </InfoArea>
            <DeleteButton onPress={handleDeleteClick}>
                <DeleteButtonText>Excluir</DeleteButtonText>
            </DeleteButton>
        </Container>

    )
}

export default ProdutoCard;