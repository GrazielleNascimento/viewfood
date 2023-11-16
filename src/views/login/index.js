import React, { useState } from "react";

import {
    Container, InputArea, CustomButton, CustomButtonText,
    SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold, Logo
} from './styles';

// componentes
import SignInput from '../../components/SignInput';

// navegacao
import { useNavigation } from "@react-navigation/native";

// service
import UsuarioApiService from "../../service/UsuarioApiService.js";



const Login = () => {

    const [emailField, setUsuario] = useState('');
    const [senhaField, setSenha] = useState('');

    const navigation = useNavigation();

    const handleLoginClick = async () => {
        if (emailField && senhaField) {
            let res = await UsuarioApiService.login(emailField, senhaField)
            console.log(res.body)

            if (res.body.email === emailField && res.body.senha === senhaField) {
                local = res.body.local;
                console.log(local);
                navigation.reset({
                    routes: [{ name: 'Home', params: { localObra: local } }]
                })
            } else {
                alert("Erro: " + JSON.stringify(res.errors ? res.errors[0].msg : 'Ocorreu um erro ao tanter logar'))
            }

        }
    };

    const handleCadastroClick = () => {
        // Navegar para a tela de cadastro
        navigation.navigate('CadastroUsuario')
    };

    return (
        <Container>
            <Logo source={require('../../../assets/viewfood.png')}>
                {/* <ViewFood /> */}

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
