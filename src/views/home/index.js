import React, { useState } from "react";

import { View } from "react-native";
import { Container, Header, Cards, Card, CustomCardText } from "./styles";

// navegacao
import { useNavigation } from "@react-navigation/native";
import BuscaInput from "../../components/BuscaInput";

const Home = () => {

    const navigation = useNavigation();

    const [codigoField, setCodigoField] = useState('');

    const handleCadastrarClick = () => {
        console.log('Ir para a tela de cadastro de produtos');
        navigation.navigate('CadastroProduto');
    }

    return (
        <Container>
            <Header >
                <BuscaInput
                    icon='search'
                    placeholder='Busque pelo codigo do produto'
                    value={codigoField}
                    onChangeText={t => setCodigoField(t)}
                />
            </Header>

            <Cards>
                <Card onPress={handleCadastrarClick}>
                    <CustomCardText>Cadastrar Produto</CustomCardText>
                </Card>

            </Cards>


        </Container>

    )
}

export default Home;