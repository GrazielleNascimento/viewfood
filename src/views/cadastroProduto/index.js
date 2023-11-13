import React, { useEffect, useState } from "react";

import { Container, Header, CustomViewName, Formulario, CustomButton, CustomButtonText } from "./styles";

// navegacao
import { useNavigation } from "@react-navigation/native";
import BtnVoltar from "../../components/btnVoltar";
import FormularioInput from "../../components/FormularioInput";
import FormularioSelect from "../../components/FormularioSelect";

// api
import ProdutoApiService from "../../service/ProdutoApiService";

const CadastroProduto = ({ route }) => {

    const navigation = useNavigation();
    const [codigoProdutoField, setCodigoProdutoField] = useState('');
    const [nomeProdutoField, setNomeProdutoField] = useState('');
    const [quantidadeProdutoField, setQuantidadeProdutoField] = useState('');
    const [datavalidadeProdutoField, setDatavalidadeProdutoField] = useState('');
    const [precoProdutoField, setPrecoProdutoField] = useState('');
    const [categoriaProdutoField, setCategoriaProdutoField] = useState('');

    const { produto } = route.params;

    console.log(produto);

    const handleSalvarClick = async () => {

        if (produto.codigo) {
            // atualiza o produto se vier da rota
            if (codigoProdutoField && nomeProdutoField && quantidadeProdutoField && datavalidadeProdutoField && precoProdutoField && categoriaProdutoField) {

                let res = await ProdutoApiService.atualizaProduto(codigoProdutoField, nomeProdutoField, quantidadeProdutoField, datavalidadeProdutoField, precoProdutoField, categoriaProdutoField)
                if (res.message === 'Produto atualizado com sucesso!') {
                    navigation.reset({
                        routes: [{ name: 'Home' }]
                    })
                } else {
                    res.message
                    alert("Erro: " + JSON.stringify(res.error ? res.error[0].msg : 'Ocorreu um erro ao tantar atualizar o produto'))
                }
            }

        } else {

            // cadastra o usuario no banco e volta para o login
            if (codigoProdutoField && nomeProdutoField && quantidadeProdutoField && datavalidadeProdutoField && precoProdutoField && categoriaProdutoField) {


                let res = await ProdutoApiService.cadastrarProduto(codigoProdutoField, nomeProdutoField, quantidadeProdutoField, datavalidadeProdutoField, precoProdutoField, categoriaProdutoField)
                if (res.message === 'novo produto cadastrado com sucesso!') {
                    navigation.reset({
                        routes: [{ name: 'Home' }]
                    })
                } else {
                    res.message
                    alert("Erro: " + JSON.stringify(res.error ? res.error[0].msg : 'Ocorreu um erro ao tantar cadastrar o produto'))
                }

            } else {
                alert('Preencha todos os campos')
            }
        }
    }

    useEffect(() => {
        if (produto) {
            setCodigoProdutoField(produto.codigo || '');
            setNomeProdutoField(produto.nome || '');
            setQuantidadeProdutoField(produto.quantidade || '');
            setDatavalidadeProdutoField(produto.dataValidade || '');
            setPrecoProdutoField(produto.preco || '');
            setCategoriaProdutoField(produto.categoria || '');
        }
    }, [produto])

    return (
        <Container>
            <Header>
                <BtnVoltar />
                <CustomViewName>Adicionar Produto</CustomViewName>
            </Header>

            <Formulario>
                <FormularioInput
                    placeholder="Código do Produto"
                    value={codigoProdutoField}
                    onChangeText={t => setCodigoProdutoField(t)}
                />

                <FormularioInput
                    placeholder="Nome"
                    value={nomeProdutoField}
                    onChangeText={t => setNomeProdutoField(t)}
                />

                <FormularioInput
                    placeholder="Quantidade"
                    value={quantidadeProdutoField}
                    onChangeText={t => setQuantidadeProdutoField(t)}
                />

                <FormularioInput
                    placeholder="Data de Validade"
                    value={datavalidadeProdutoField}
                    onChangeText={t => setDatavalidadeProdutoField(t)}
                />

                <FormularioInput
                    placeholder="Preço"
                    value={precoProdutoField}
                    onChangeText={t => setPrecoProdutoField(t)}
                />

                <FormularioSelect
                    selectedaCategoria={categoriaProdutoField}
                    onValueChange={setCategoriaProdutoField}
                />
            </Formulario>

            <CustomButton onPress={handleSalvarClick}>
                <CustomButtonText>Salvar</CustomButtonText>
            </CustomButton>
        </Container>

    )
}

export default CadastroProduto;