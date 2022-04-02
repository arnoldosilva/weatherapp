import React from 'react'
import styled from 'styled-components/native'
import {Font} from '../../../types/fonts'


interface iCurrentLocationProps {
  currentLocation: string;
}

const Container = styled.View`
  margin:100px 30px 0 30px;
  background-color: #fff;
`

const LocationText = styled.Text`
  font-size: 20px;
  font-family: ${Font.medium};
  color: #000;
  text-align: center;
`;

export default function CurrentLocation(props: iCurrentLocationProps) {


  return (
    <Container testID='CurrentLocation'>
      <LocationText>{props.currentLocation}</LocationText>
    </Container>
  )
};