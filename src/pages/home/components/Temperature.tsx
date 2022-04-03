import React from 'react'
import styled from 'styled-components/native'
import {Font} from '../../../types/fonts'

interface iTemperatureProps {
  temperature: string;
}

interface iContainerProps {
  width: number;
}

const Container = styled.View<iContainerProps>`
  justify-content: center;
  margin-left: 30px;
  margin-top: 50px;  
  height: 100px;
  border-radius: 10px;
  width: ${props => props.width * 14}%; 
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.1);
`

const TemperatureText = styled.Text`
  margin-left: 15px;
  font-size: 80px;
  font-family: ${Font.bold};
  color: #000
`;

const Formater = styled.Text`
  font-size: 20px;
  font-family: ${Font.medium};
  color: #000
`;


export default function Temperature(props: iTemperatureProps) {

  return (
    <Container testID='Temperature' width={props.temperature.length}>
      <TemperatureText>{props.temperature}</TemperatureText>
      <Formater>°C</Formater>
    </Container>
  )
};