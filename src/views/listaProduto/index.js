import React, { useEffect, useState } from "react";
import { ScrollView } from 'react-native'
import { Container, Header, CustomViewName, Cards } from "./styles";
import { useRoute } from '@react-navigation/native';



// navegacao
import { useNavigation } from "@react-navigation/native";
import BtnVoltar from "../../components/btnVoltar";

// components
import ProdutoCard from "../../components/ProdutoCard";

// api
import ApiService from "../../service/ApiService";



const ListaProduto = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [produtos, setProdutos] = useState([]);

    const getProdutos = async (codigo) => {
        try {
            let res
            if (codigo) {
                res = await ApiService.getProduto(codigo);
                setProdutos(res ? [res] : []); // Transforma o objeto em um array
            } else {
                res = await ApiService.getProdutos();
                setProdutos(res || []); // Define um array vazio caso não haja produtos
            }

            console.log(res)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (route.params && route.params.codigo) {
            getProdutos(route.params.codigo)
        } else {
            getProdutos();
        }
    }, [route.params]);

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