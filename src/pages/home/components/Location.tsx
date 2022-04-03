import React from 'react'
import {Dimensions} from 'react-native'
import styled from 'styled-components/native'
import {Font} from '../../../types/fonts'


const width = Dimensions.get('window').width

interface iLocationProps {
  location: string;
}
interface iDimensionProps {
  width: number;
}

const Container = styled.View<iDimensionProps>`
  position: absolute;
  right: ${props => ((props.width - 50) / 2) * -1}px;
  transform: rotate(-90deg);
`

const LocationText = styled.Text`
  font-size: 20px;
  font-family: ${Font.medium};
  color: #000;
`;

export default function Location(props: iLocationProps) {
  return (
    <Container testID='Location' width={width}>
      <LocationText>{props.location}</LocationText>
    </Container>
  )
};