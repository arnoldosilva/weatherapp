import styled from 'styled-components/native'
import {Font} from '../../../types/fonts'

export const Container = styled.View`
  height: 100%;
`;
export const BgImage = styled.ImageBackground`
  z-index: -1;
  height: 100%;
  width: 100%;
`

export const Temperature = styled.Text`

  margin-left: 30px;
  font-size: 150px;
  font-family: ${Font.regular};
  color: #000
`;

export const Location = styled.Text`
	position: absolute;
  right: 0;
  top: 100px;
  justify-content: center;
  font-size: 20px;
  font-family: ${Font.medium};
  color: #000;
  transform: rotate(-90deg);
`;
export const PushDown = styled.View`
  background-color: #d2d2d2;
  height: 100%;
`;


