import React from 'react'
import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
background-color: #FE6734;
flex: 1;
justify-content: center;
align-items: center;
`

export const InputArea = styled.View`
padding: 40px;
width: 100%;
`

export const Logo = styled.ImageBackground`
width: 326px;
height: 156px;
`

export const CustomButton = styled.TouchableOpacity`
height: 60px;
background-color: #DA5C31;
border-radius: 30px;
justify-content: center;
align-items: center;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
elevation: 4;
`

export const CustomButtonText = styled.Text`
font-size: 22px;
color: #FFF;
font-weight: bold;
`

export const SignMessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 20px;
margin-bottom: 50px;
`

export const SignMessageButtonText = styled.Text`
font-size: 14px;
color: #4A4A4A;
`

export const SignMessageButtonTextBold = styled.Text`
font-size: 16px;
color: #fff;
font-weight: bold;
margin-left: 5px;
margin-bottom: 50px;
`