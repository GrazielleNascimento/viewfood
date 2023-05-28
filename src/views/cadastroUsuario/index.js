import React, { useState, useContext } from 'react'
import {
    Container, InputArea, CustomButton, CustomButtonText,
    SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold, Logo
} from './Styles'
import { useNavigation } from '@react-navigation/native'

import ViewFood from '../../components/icons/ViewFood'
import SignInput from '../../components/SignInput'

export default () => {
    const navigation = useNavigation()

    const [emailField, setEmailField] = useState('')
    const [senhaField, setSenhaField] = useState('')
    const [nomeField, setNomeField] = useState('')

    const handleLoginButtonClick = () => {
        // volta para o Login
        navigation.reset({
            routes: [{ name: 'Login' }]
        })
    }

    const handleCadastrarClick = () => {
        // cadastra o usuario no banco e volta para o login
        if (nomeField && senhaField && emailField) {
            alert('✅Usuário criado com sucesso. Efetue o login')
            navigation.reset({
                routes: [{ name: 'Login' }]
            })
        } else {
            alert('Preencha todos os campos')
        }

    }

    return (
        <Container>
            <Logo>
                <ViewFood />
            </Logo>
            <InputArea>
                <SignInput
                    icon="user"
                    placeholder="Nome Completo"
                    value={nomeField}
                    onChangeText={t => setNomeField(t)}
                />
                <SignInput
                    icon="mail"
                    placeholder="Digite o seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <SignInput
                    icon="lock"
                    placeholder="Digite a sua senha"
                    value={senhaField}
                    onChangeText={t => setSenhaField(t)}
                    password={true}
                />

                <CustomButton onPress={handleCadastrarClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton onPress={handleLoginButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Efetue o Login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}