import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`

`

export const Header = styled.View`
height: 150px;
flex-direction: row;
align-items: center;
justify-content: left;
// background-color: #FE6734;
padding: 10px;
`

export const CustomViewName = styled.Text`
font-size: 20px;
color: #000;
font-weight: bold;
margin-left: 20px;
font-size: 25px
`

export const Cards = styled.View`
align-items: center;
margin-top: 0px;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
padding: 10px;
background-color: #c4c4
`

export const Card = styled.TouchableOpacity`
width: 50%;
height: 80px;
background-color: #b1b1b1;
flex-direction: row;
border-radius: 5px;
align-items: center;
margin: 5px;
padding-left: 10px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
elevation: 4;
`