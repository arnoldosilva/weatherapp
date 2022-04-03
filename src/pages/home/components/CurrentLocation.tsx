import React from 'react'
import styled from 'styled-components/native'
import {Font} from '../../../types/fonts'
import Icon from '@expo/vector-icons/SimpleLineIcons'


interface iCurrentLocationProps {
  currentLocation: string;
}

const Container = styled.View`
  margin:200px 30px 0 30px;
  flex-direction: row;
  justify-content: center;
`

const LocationText = styled.Text`
  margin-left: 5px;
  padding-top: 5px;
  font-size: 30px;
  font-family: ${Font.regular};
  text-align: center;
`;

export default function CurrentLocation(props: iCurrentLocationProps) {


  return (
    <Container testID='CurrentLocation'>
      <Icon name='location-pin' size={50} color='black' />
      <LocationText>{props.currentLocation}</LocationText>
    </Container>
  )
};