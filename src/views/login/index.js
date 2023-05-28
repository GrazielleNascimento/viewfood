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



const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    const handleLoginClick = () => {
        // autenticação
        console.log('Usuário:', usuario);
        console.log('Senha:', senha);
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
                    value={usuario}
                    onChangeText={t => setUsuario(t)}
                />
                <SignInput
                    icon='lock'
                    placeholder='Digite sua senha'
                    value={senha}
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
