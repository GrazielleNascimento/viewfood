import React from 'react'
import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`

`

export const Header = styled.View`
background-color: #FE6734;
padding: 10px
`

export const Cards = styled.View`
flex: 1;
flex-direction: row;
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
margin: 5px;
padding-left: 10px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

`
export const CustomCardText = styled.Text`
font-size: 20px;
color: #000000;
font-weight: bold;
`