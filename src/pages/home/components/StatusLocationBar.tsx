import React, {useContext} from 'react'
import styled from 'styled-components/native'
import {Font} from '../../../types/fonts'
import {Dimensions} from 'react-native'
import {WeatherContext} from '../../../context/WeatherContext'

const height = Dimensions.get('window').height
interface iStatusLocationProps {
  height: number
}

const StatusLocationContainer = styled.View<iStatusLocationProps>`  
  border: 2px solid aqua;
  border-radius: 10px;
  width: 90%;
  height: 100px;
  padding: 10px;
  margin: 10px;
  position: absolute;
  top: ${props => props.height - 200}px;
  align-self: center;
`;
const StyledButtom = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 20px;
  font-family: ${Font.medium};
  color: #000;
`;



export default function StatusLocationBar() {
  const {updatePositionAndWeather} = useContext(WeatherContext)
  return (
    <StatusLocationContainer testID='StatusLocationBar' height={height}>
      <StyledButtom testID='RefreshPositionButtom' onPress={() => updatePositionAndWeather()}>
        <StyledText>Atualizar</StyledText>
      </StyledButtom>
    </StatusLocationContainer>
  )
};