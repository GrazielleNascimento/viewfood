import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

// views
import Login from '../views/login/index.js';
import CadastroUsuario from '../views/cadastroUsuario/index.js';
import Home from '../views/home/index.js';
import CadastroProduto from '../views/cadastroProduto/index.js';
import ListaProduto from '../views/listaProduto/index.js'

const Stack = createStackNavigator();

const NavigationStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="CadastroProduto"
                screenOptions={{ headerShown: false }} >

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CadastroProduto" component={CadastroProduto} />
                <Stack.Screen name="ListaProduto" component={ListaProduto} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack;


