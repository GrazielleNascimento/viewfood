import React, { useState } from "react";

import {
    Container, Header, Cards, Card, CustomCardText, CustonIcon,
    HorizontalCard, CardBackgroundImage, Categorias, CategoriaTitle,
    CustonHorizontalCardText, CategoriaHeader
} from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

// navegacao
import { useNavigation } from "@react-navigation/native";

// componenentes
import BuscaInput from "../../components/BuscaInput";
import BtnNotificacao from "../../components/BtnNotificacao";
import BtnConfiguracao from "../../components/BtnConfiguracoes";

const Home = () => {

    const navigation = useNavigation();

    const [codigoField, setCodigoField] = useState('');

    const handleCadastrarClick = () => {
        navigation.navigate('CadastroProduto', { produto: {} });
    };

    const handleVencidosClick = () => {
        navigation.navigate('ListaProduto', { vencido: true });
    };

    const handCategoriaClick = (categoriaSelecionada) => {
        navigation.navigate('ListaProduto', { categoria: categoriaSelecionada });
    };

    return (
        <Container>
            <Header >
                <BuscaInput
                    icon='search1'
                    placeholder='Buscar'
                    value={codigoField}
                    onChangeText={t => setCodigoField(t)}
                />
                <BtnNotificacao
                    icon='bells'
                />
                <BtnConfiguracao
                    icon='bars'
                />
            </Header>

            <Cards>
                <Card onPress={handleCadastrarClick}>
                    <CustonIcon background="#ffff">
                        <AntDesign name={"pluscircleo"} size={35} color="#4A4A4A" />
                    </CustonIcon>
                    <CustomCardText>Adiconar produto</CustomCardText>
                    <CustonIcon>
                        <AntDesign name={"right"} size={35} color="#4A4A4A" />
                    </CustonIcon>
                </Card>
                <Card onPress={handleVencidosClick}>
                    <CustonIcon background="#ffff">
                        <AntDesign name={"exclamationcircleo"} size={35} color="#4A4A4A" />
                    </CustonIcon>
                    <CustomCardText>Vencidos</CustomCardText>
                    <CustonIcon>
                        <AntDesign name={"right"} size={35} color="#4A4A4A" />
                    </CustonIcon>
                </Card>
            </Cards>


            <Categorias>
                <CategoriaHeader>
                    <AntDesign name={"appstore-o"} size={30} color="#4A4A4A" />
                    <CategoriaTitle>Categorias</CategoriaTitle>
                </CategoriaHeader>

                <ScrollView horizontal={true}>

                    <HorizontalCard onPress={() => handCategoriaClick('Carne')}>
                        <CustonHorizontalCardText>Carnes</CustonHorizontalCardText>
                        <CardBackgroundImage source={require('../../../assets/categorias/Carne.png')} />
                    </HorizontalCard>
                    <HorizontalCard onPress={() => handCategoriaClick('Verdura')}>
                        <CustonHorizontalCardText>Verduras</CustonHorizontalCardText>
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