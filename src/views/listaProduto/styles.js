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

export const Cards = styled.View`
align-items: center;
margin-top: 0px;
width: 100%;
height: 100%;
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

export const HorizontalScroll = styled.View`
height: 100px;
margin-top: 100px;
`

export const HorizontalCard = styled.TouchableOpacity`
width: 80px;
height: 90px;
margin-left: 10px;
margin-right: 10px;
background-color: #123456;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
border-radius: 5px;
margin-bottom: 10px;
align-items: center;
`

export const CardBackgroundImage = styled.ImageBackground`
width: 100%;
height: 100%;
`