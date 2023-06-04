import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`

`

export const Header = styled.View`
flex-direction: row;
align-items: center;
justify-content: left;
background-color: #FE6734;
padding: 10px
`

export const CustomViewName = styled.Text`
font-size: 20px;
color: #000000;
font-weight: bold;
margin-left: 50px
`

export const Formulario = styled.View`
flex: 1;
justify-content: center;
align-items: center;
margin-top: 250px;
padding: 10px
`

export const CustomButton = styled.TouchableOpacity`
height: 60px;
background-color: #DA5C31;
border-radius: 30px;
justify-content: center;
align-items: center;
margin-top: 250px
margin-left: 10px;
margin-right: 10px;

`

export const CustomButtonText = styled.Text`
font-size: 20px;
color: #FFF;
`
