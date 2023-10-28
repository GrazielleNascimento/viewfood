import React, { useState } from "react";

import { View } from "react-native";
import { Container, Header, Cards, Card, CustomCardText, CustonIcon } from "./styles";
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
    const handleVencidosClick = () => {
        console.log('Ir para a tela de produtos vencidos');
        navigation.navigate('ListaProduto', { vencido: true });
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
                    <CustomCardText>Cadastrar produto</CustomCardText>
                    <CustonIcon>
                        <AntDesign name={"arrowright"} size={40} color="#4A4A4A" />
                    </CustonIcon>
                </Card>
                <Card onPress={handleVencidosClick}>
                    <CustomCardText>Vencidos</CustomCardText>
                    <CustonIcon>
                        <AntDesign name={"arrowright"} size={40} color="#4A4A4A" />
                    </CustonIcon>
                </Card>

            </Cards>


        </Container>

    )
}

export default Home;