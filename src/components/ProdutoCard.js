import React from "react";
import styled from 'styled-components/native'

import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

// data
import { format, differenceInDays } from 'date-fns';
// import { ptBR } from 'date-fns/locale';

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
    margin-top: 12.5px;
    margin-bottom: 12.5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
    elevation: 4;
`

const InfoContainer = styled.View`
    margin-left: 20px;
    margin-top: 10px
`

const ContainerImagem = styled.View`
    font-size: 20px;
    font-weight: bold;
    width: 30%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #d9d9; 
`
const ProdutoImagem = styled.ImageBackground`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const ProdutoNome = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.fontColor || '#000000'}
`
const InformacaoArea = styled.View`
    margin-top: ${(props) => props.marginTop || '0px'}
    flex-direction: row;
    align-items: center;
    justify-content: left;
`
const InformacaoIcon = styled.View`
    width: ${(props) => props.size || '16px'};
    align-items: center;
    justify-content: space-between;
    margin-right: 5px;
`

const InformacaoText = styled.Text`
    font-size: ${(props) => props.size || '14px'};
    color: ${(props) => props.fontColor || '#000000'}
    width: ${(props) => props.width || '100%'};
    text-align: ${(props) => props.align || 'left'};
`

const InformacaoCategoria = styled.View`
    background-color: #D9D9D9;
    background-color:  ${(props) => props.categoriaBackgroundColor || '#D9D9D9'};
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

    const formattedDataValidade = new Date(dataValidade).toLocaleDateString('pt-BR');

    // define as cores do card de acordo com a dataValidade
    const diferencaEmDias = differenceInDays(new Date(dataValidade), new Date());

    if (diferencaEmDias <= 0) {
        cardColor = '#474747';
        fontColor = '#ffffff';
        categoriaBackgroundColor = '#8B8B8B'
    } else if (diferencaEmDias <= 5) {
        cardColor = '#FF5151';
        fontColor = '#000000';
        categoriaBackgroundColor = '#FFFFFF'

    } else if (diferencaEmDias <= 15) {
        cardColor = '#FF9E2D';
        fontColor = '#000000';
        categoriaBackgroundColor = '#FFFFFF'

    } else if (diferencaEmDias <= 30) {
        cardColor = '#FFCC49';
        fontColor = '#000000';
        categoriaBackgroundColor = '#FFFFFF'
    } else {
        cardColor = '#75CDFF';
        fontColor = '#000000';
        categoriaBackgroundColor = '#FFFFFF'
    }

    return (
        <Container onPress={onPress} background={cardColor}>
            <ContainerImagem>
                <ProdutoImagem source={require('../../assets/categorias/food.png')} />
            </ContainerImagem>
            <InfoContainer>
                <ProdutoNome fontColor={fontColor}>{nome}</ProdutoNome>
                <InformacaoCategoria categoriaBackgroundColor={categoriaBackgroundColor}>
                    <InformacaoText size={12} align={'center'} fontColor={fontColor}>{categoria}</InformacaoText>
                </InformacaoCategoria>

                <InformacaoArea marginTop={'10px'}>
                    <InformacaoIcon>
                        <AntDesign name={"shoppingcart"} size={16} color={fontColor} />
                    </InformacaoIcon>
                    <InformacaoText fontColor={fontColor}>{quantidade}un</InformacaoText>
                </InformacaoArea>

                <InformacaoArea>
                    <InformacaoIcon>
                        <FontAwesome name={"dollar"} size={16} color={fontColor} />
                    </InformacaoIcon>
                    <InformacaoText fontColor={fontColor}>R$ {preco}</InformacaoText>
                </InformacaoArea>

                <InformacaoArea width={'20%'} marginTop={'15px'}>
                    <InformacaoIcon>
                        <AntDesign name={"qrcode"} size={16} color={fontColor} />
                    </InformacaoIcon>
                    <InformacaoText fontColor={fontColor}>{codigo}</InformacaoText>
                    <InformacaoArea>
                        <InformacaoIcon size={'20px'}>
                            <AntDesign name={"calendar"} size={20} color={fontColor} />
                        </InformacaoIcon>
                        <InformacaoText size={'16px'} fontColor={fontColor}>{formattedDataValidade}</InformacaoText>
                    </InformacaoArea>
                </InformacaoArea>

            </InfoContainer>
            <DeleteButton onPress={handleDeleteClick}>
                <FontAwesome5 name={"trash"} size={15} color={fontColor} />
            </DeleteButton>
        </Container>
    )
}

export default ProdutoCard;