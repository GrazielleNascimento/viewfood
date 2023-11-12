import React from 'react'
import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`

`

export const Header = styled.View`
background-color: #FE6734;
padding-top: 10px
padding-horizontal: 20px;
height: 30%;
flex-direction: row;
elevation: 4;
`

export const Cards = styled.View`
flex-direction: column;
align-items: center;
margin-top: 20px;
width: 100%
align-items: center;
justify-content: center;
padding: 10px;
`

export const Card = styled.TouchableOpacity`
width: 95%;
height: 60px;
background-color: #ffff;
flex-direction: row;
border-radius: 5px;
align-items: center;
margin: 5px;
padding-horizontal: 10px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
elevation: 4;
`
export const CustomCardText = styled.Text`
font-size: 20px;
flex-direction: row;
color: #000000;
font-weight: bold;
margin-left: 10px;
width: 70%
`

export const CustonIcon = styled.View`
height: 40px;
width: 40px;
border-radius: 5px;
// background-color: #D9D9D9;
background-color: ${(props) => props.background || '#D9D9D9'};
align-items: center;
justify-content: center;
`

export const Categorias = styled.View`
height: 160px;
width: 100%
margin: 10px;
margin-top: 10px
margin-bottom: 20px;
border-radius: 5px;
`

export const HorizontalCard = styled.TouchableOpacity`
width: 80px;
height: 90px;
flex-direction: column;
background-color: #F8FAFB;
border-radius: 5px;
margin-left: 10px;
margin-right: 10px;
margin-top: 10px;
align-items: center;
elevation: 4;
`

export const CardBackgroundImage = styled.ImageBackground`
width: 80px;
height: 90px;
align-items: center;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
border-radius: 5px;
align-items: center;
`

export const CategoriaHeader = styled.View`
flex-direction: row;
margin-left: 10px
`

export const CategoriaTitle = styled.Text`
font-size: 20px;
margin-left: 10px;
margin-bottom: 10px
color: #000;
font-weight: bold;
width: 80%;
`

export const CustonHorizontalCardText = styled.Text`
color: #000;
font-weight: bold;
`