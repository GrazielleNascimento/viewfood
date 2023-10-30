import React from 'react'
import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`

`

export const Header = styled.View`
background-color: #FE6734;
padding: 10px
`

export const Cards = styled.View`
flex-direction: column;
align-items: center;
margin-top: 50px;
width: 100%
align-items: center;
justify-content: center;
padding: 10px;
`

export const Card = styled.TouchableOpacity`
width: 100%;
height: 60px;
background-color: #ffff;
flex-direction: row;
border-radius: 5px;
align-items: center;
justify-content: center;
margin: 5px;
padding-left: 10px;
padding-right: 10px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

`
export const CustomCardText = styled.Text`
font-size: 20px;
flex-direction: row;
color: #000000;
font-weight: bold;
margin-right: 140px;
width: 80%
`

export const CustonIcon = styled.View`
border-radius: 5px;
background-color: #D9D9D9;
align-items: flex-end;
justify-content: flex-end;
`

export const Categorias = styled.View`
height: 160px;
margin-top: 30px
margin-bottom: 20px;
`

export const HorizontalCard = styled.TouchableOpacity`
width: 80px;
height: 90px;
flex-direction: column;
margin-left: 10px;
margin-right: 10px;
align-items: center;
flex
`

export const CardBackgroundImage = styled.ImageBackground`
width: 80px;
height: 90px;
align-items: center;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
border-radius: 5px;
align-items: center;
`

export const CategoriaTitle = styled.Text`
font-size: 20px;
margin-left: 10px;
margin-bottom: 10px

color: #000000;
font-weight: bold;
width: 80%
`

export const CustonHorizontalCardText = styled.Text`
color: #000000;
font-weight: bold;
`