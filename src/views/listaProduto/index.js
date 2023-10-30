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
import ProdutoApiService from "../../service/ProdutoApiService";



const ListaProduto = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [produtos, setProdutos] = useState([]);

    const getProdutos = async (codigo) => {
        try {
            let res
            if (codigo) {
                res = await ProdutoApiService.getProduto(codigo);
                setProdutos(res ? [res] : []); // Transforma o objeto em um array
            } else {
                res = await ProdutoApiService.getProdutos();
                setProdutos(res || []); // Define um array vazio caso não haja produtos
            }

            console.log(res)
        } catch (error) {
            console.error(error);
        }
    }

    const getProdutoVencido = async () => {
        try {
            let res = await ProdutoApiService.getProdutoVencido();
            console.log(res);
            setProdutos(res || []);
        } catch (error) {
            console.error(error);
        }
    }

    const getProdutoCategoria = async (categoria) => {
        try {
            let res = await ProdutoApiService.getProdutoCategoria(categoria)
            console.log(res);
            setProdutos(res || []);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

        if (route.params && route.params.codigo) {
            console.log(route.params.codigo);
            getProdutos(route.params.codigo);

        } else if (route.params && route.params.vencido) {
            console.log(route.params.vencido);
            getProdutoVencido();

        } else if (route.params && route.params.categoria) {
            console.log(route.params.categoria);
            getProdutoCategoria(route.params.categoria);
        }
        else {
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