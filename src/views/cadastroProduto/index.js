import React, { useState } from "react";

import { View, Picker } from "react-native";
import { Container, Header, CustomViewName, Formulario, CustomButton, CustomButtonText } from "./styles";

// navegacao
import { useNavigation } from "@react-navigation/native";
import BtnVoltar from "../../components/btnVoltar";
import FormularioInput from "../../components/FormularioInput";
import FormularioSelect from "../../components/FormularioSelect";

// api
import ApiService from "../../service/ApiService";

const CadastroProduto = () => {

    const navigation = useNavigation();
    const [codigoProdutoField, setCodigoProdutoField] = useState('');
    const [nomeProdutoField, setNomeProdutoField] = useState('');
    const [quantidadeProdutoField, setQuantidadeProdutoField] = useState('');
    const [datavalidadeProdutoField, setDatavalidadeProdutoField] = useState('');
    const [precoProdutoField, setPrecoProdutoField] = useState('');
    const [categoriaProdutoField, setCategoriaProdutoField] = useState('');

    const handleSalvarClick = async () => {
        console.log(codigoProdutoField);
        console.log(nomeProdutoField);
        console.log(categoriaProdutoField);
        console.log(datavalidadeProdutoField);
        console.log(precoProdutoField);
        console.log(quantidadeProdutoField);

        // cadastra o usuario no banco e volta para o login
        if (codigoProdutoField && nomeProdutoField && quantidadeProdutoField && datavalidadeProdutoField && precoProdutoField && categoriaProdutoField) {
            let res = await ApiService.cadastrarProduto(codigoProdutoField, nomeProdutoField, quantidadeProdutoField, datavalidadeProdutoField, precoProdutoField, categoriaProdutoField)
            if (res.message === 'novo produto cadastrado com sucesso!') {

                alert('✅Produto cadastrado com sucesso!')
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

    return (
        <Container>
            <Header>
                <BtnVoltar />
                <CustomViewName>Cadastrar Produtos</CustomViewName>
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

                <FormularioSelect
                    selectedValue={categoriaProdutoField}
                    onValueChange={setCategoriaProdutoField}
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
                <FormularioInput
                    placeholder="Quantidade"
                    value={quantidadeProdutoField}
                    onChangeText={t => setQuantidadeProdutoField(t)}
                />

            </Formulario>

            <CustomButton onPress={handleSalvarClick}>
                <CustomButtonText>Salvar</CustomButtonText>
            </CustomButton>


        </Container>

    )
}

export default CadastroProduto;