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

export const Titlebar = styled.View`

  width: 100%;
	margin-top: 50px;
	padding-left: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #b8bece;
  font-family: ${Font.medium};
`;

export const Name = styled.Text`
	font-size: 20px;
	color: #FECC00;
	font-weight: bold;
  font-family: ${Font.bold};
`;

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

export const StatusLocationContainer = styled.View`  
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

