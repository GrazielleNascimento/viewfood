import React, { useState } from "react";

import { View, Text } from "react-native";
import {
    Container, Header, Cards, Card, CustomCardText, CustonIcon,
    HorizontalCard, CardBackgroundImage, Categorias, CategoriaTitle,
    CustonHorizontalCardText
} from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

// navegacao
import { useNavigation } from "@react-navigation/native";

// componenentes
import BuscaInput from "../../components/BuscaInput";

const Home = () => {

    const navigation = useNavigation();

    const [codigoField, setCodigoField] = useState('');

    const handleCadastrarClick = () => {
        console.log('Ir para a tela de cadastro de produtos');
        navigation.navigate('CadastroProduto', { produto: {} });
    };

    const handleVencidosClick = () => {
        console.log('Ir para a tela de produtos vencidos');
        navigation.navigate('ListaProduto', { vencido: true });
    };

    const handCategoriaClick = (categoriaSelecionada) => {
        console.log("Ir para a tela de lista de produtos da categoria");
        navigation.navigate('ListaProduto', { categoria: categoriaSelecionada });
    };

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


            <Categorias>
                <CategoriaTitle>Categorias</CategoriaTitle>

                <ScrollView horizontal={true}>

                    <HorizontalCard onPress={() => handCategoriaClick('Carne')}>
                        <CustonHorizontalCardText>Carnes</CustonHorizontalCardText>
                        <CardBackgroundImage source={require('../../../assets/categorias/Carne.png')} />
                    </HorizontalCard>
                    <HorizontalCard onPress={() => handCategoriaClick('Verdura')}>
                        <CustonHorizontalCardText>Verdura</CustonHorizontalCardText>
                        <CardBackgroundImage source={require('../../../assets/categorias/Verdura.png')} />
                    </HorizontalCard>
                    <HorizontalCard onPress={() => handCategoriaClick('Legumes')}>
                        <CustonHorizontalCardText>Legumes</CustonHorizontalCardText>
                        <CardBackgroundImage source={require('../../../assets/categorias/Legumes.png')} />
                    </HorizontalCard>
                    <HorizontalCard onPress={() => handCategoriaClick('Bebida')}>
                        <CustonHorizontalCardText>Bebidas</CustonHorizontalCardText>
                        <CardBackgroundImage source={require('../../../assets/categorias/Bebida.png')} />
                    </HorizontalCard>
                    <HorizontalCard onPress={() => handCategoriaClick('Fruta')}>
                        <CustonHorizontalCardText>Frutas</CustonHorizontalCardText>
                        <CardBackgroundImage source={require('../../../assets/categorias/Fruta.png')} />
                    </HorizontalCard>
                    <HorizontalCard onPress={() => handCategoriaClick('Frios')}>
                        <CustonHorizontalCardText>Frios</CustonHorizontalCardText>
                        <CardBackgroundImage source={require('../../../assets/categorias/Frios.png')} />
                    </HorizontalCard>
                    <HorizontalCard onPress={() => handCategoriaClick('Padaria')}>
                        <CustonHorizontalCardText>Padaria</CustonHorizontalCardText>
                        <CardBackgroundImage source={require('../../../assets/categorias/Padaria.png')} />
                    </HorizontalCard>
                    <HorizontalCard onPress={() => handCategoriaClick('Enlatado')}>
                        <CustonHorizontalCardText>Enlatados</CustonHorizontalCardText>
                        <CardBackgroundImage source={require('../../../assets/categorias/Enlatado.png')} />
                    </HorizontalCard>
                </ScrollView>
            </Categorias>


        </Container>

    )
}

export default Home;