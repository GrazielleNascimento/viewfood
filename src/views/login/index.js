import React, { useState } from "react";
import Style from './styles.js'

import { View, Text, TextInput, Button } from 'react-native';

import {
    Container, InputArea, CustomButton, CustomButtonText,
    SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold, Logo
} from './styles';

// componentes
import ViewFood from '../../components/icons/ViewFood.js';
import SignInput from '../../components/SignInput';

// navegacao
import { useNavigation } from "@react-navigation/native";
import ApiService from "../../service/ApiService.js";



const Login = () => {

    const [emailField, setUsuario] = useState('');
    const [senhaField, setSenha] = useState('');

    const navigation = useNavigation();

    const handleLoginClick = async () => {
        if (emailField && senhaField) {
            let res = await ApiService.login(emailField, senhaField)
            console.log(res)

            if (res.message === 'usuario cadastrado!') {

                alert('✅ Login efetuado com sucesso')
                navigation.reset({
                    routes: [{ name: 'Home' }]
                })
            } else {
                alert("Erro: " + JSON.stringify(res.errors ? res.errors[0].msg : 'Ocorreu um erro ao tanter logar'))
            }

        }
    };

    const handleCadastroClick = () => {
        // Navegar para a tela de cadastro
        console.log('Ir para a tela de cadastro');
        navigation.navigate('CadastroUsuario')
    };

    return (
        <Container>
            <Logo>
                <ViewFood />
            </Logo>
            <InputArea>
                <SignInput
                    icon='mail'
                    placeholder='Digite seu e-mail'
                    value={emailField}
                    onChangeText={t => setUsuario(t)}
                />
                <SignInput
                    icon='lock'
                    placeholder='Digite sua senha'
                    value={senhaField}
                    onChangeText={t => setSenha(t)}
                    password={true}
                />
                <CustomButton onPress={handleLoginClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleCadastroClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>


        </Container>
    );
}

export default Login;
