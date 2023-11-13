import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
// margin-top: 50px;
justify-content: center;
align-itens: center;
text-align: center;
flex-direction: colums;
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

export const Formulario = styled.View`
flex-direction: colums;
justify-content: center;
align-items: center;
margin-top: 0px;
padding: 10px;
height: 500px;
// background-color: #777777;
`

export const CustomButton = styled.TouchableOpacity`
height: 50px;
width: 50%;
justify-content: center;
align-items: center;
background-color: #79afff;
border-radius: 5px;
margin-top: 20px;
margin-left: 25%;
`

export const CustomButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  align-self: center;
  border-radius: 30px;
  width: 100%;
`;
