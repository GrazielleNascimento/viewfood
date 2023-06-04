import React, { useState } from "react";

import { View } from "react-native";
import { Container, Header, Cards, Card, CustomCardText } from "./styles";
import { AntDesign } from '@expo/vector-icons';


// navegacao
import { useNavigation } from "@react-navigation/native";
import BuscaInput from "../../components/BuscaInput";

const Home = () => {

    const navigation = useNavigation();

    const [codigoField, setCodigoField] = useState('');

    const handleCadastrarClick = () => {
        console.log('Ir para a tela de cadastro de produtos');
        navigation.navigate('CadastroProduto', { produto: {} });
    }

    return (
        <Container>
            <Header >
                <BuscaInput
                    icon='search1'
                    placeholder='Busque pelo codigo do produto'
                    value={codigoField}
                    onChangeText={t => setCodigoField(t)}
                />
            </Header>

            <Cards>
                <Card onPress={handleCadastrarClick}>
                    <CustomCardText>Cadastrar Produto</CustomCardText>
                    <AntDesign name={"arrowright"} size={40} color="#4A4A4A" />
                </Card>

            </Cards>


        </Container>

    )
}

export default Home;