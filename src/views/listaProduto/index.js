import React, { useEffect, useState } from "react";
import { ScrollView } from 'react-native'
import { Container, Header, CustomViewName, Cards } from "./styles";


// navegacao
import { useNavigation } from "@react-navigation/native";
import BtnVoltar from "../../components/btnVoltar";

// components
import ProdutoCard from "../../components/ProdutoCard";

// api
import ApiService from "../../service/ApiService";



const ListaProduto = () => {

    const navigation = useNavigation();
    const [produtos, setProdutos] = useState([]);

    const getProdutos = async () => {
        try {
            let res = await ApiService.getProdutos();
            setProdutos(res)
            console.log(res)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProdutos();
    }, []);

    const navegateToAtualizaProduto = (produto) => {
        navigation.navigate("CadastroProduto", { produto });
    }

    return (
        <Container>
            <Header>
                <BtnVoltar />
                <CustomViewName>Lista de Produtos</CustomViewName>
            </Header>

            <ScrollView>
                <Cards>

                    {produtos.map((produto, index) => (
                        <ProdutoCard
                            key={index}
                            codigo={produto.codigo}
                            nome={produto.nome}
                            quantidade={produto.quantidade}
                            dataValidade={produto.dataValidade}
                            preco={produto.preco}
                            categoria={produto.categoria}
                            onPress={() => navegateToAtualizaProduto(produto)}
                        />
                    ))}
                </Cards>
            </ScrollView>
        </Container>

    )
}

export default ListaProduto;