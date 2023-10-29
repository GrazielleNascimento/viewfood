import React, { useState } from "react";

import { View } from "react-native";
import { Container, Header, Cards, Card, CustomCardText, CustonIcon } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

// navegacao
import { useNavigation } from "@react-navigation/native";

// componenentes
import BuscaInput from "../../components/BuscaInput";
import { HorizontalCard, CardBackgroundImage, HorizontalScroll } from "../listaProduto/styles";

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

            <HorizontalScroll>

                <ScrollView horizontal={true}>
                    Carnes
                    <HorizontalCard>
                        <CardBackgroundImage source={require('../../../assets/categorias/carne.png')}></CardBackgroundImage>
                    </HorizontalCard>
                    <HorizontalCard>
                        teste
                    </HorizontalCard>
                    <HorizontalCard>
                        teste
                    </HorizontalCard>
                    <HorizontalCard>
                        teste
                    </HorizontalCard>
                    <HorizontalCard>
                        teste
                    </HorizontalCard>
                    <HorizontalCard>
                        teste
                    </HorizontalCard>
                </ScrollView>
            </HorizontalScroll>


        </Container>

    )
}

export default Home;