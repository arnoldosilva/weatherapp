import React from 'react'
import styled from 'styled-components/native'
import {Font} from '../../../types/fonts'

interface iTitleProps {
  title: string;
  name: string;
}

const StyledView = styled.View`
  width: 100%;
	margin-top: 50px;
	padding-left: 30px;
`
const StyledTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #b8bece;
  font-family: ${Font.medium};
`;

const StyledName = styled.Text`
	font-size: 20px;
	color: #FECC00;
	font-weight: bold;
  font-family: ${Font.bold};
`;

export default function TitleBar(props: iTitleProps) {
  return (
    <StyledView>
      <StyledTitle testID='title'>{props.title}</StyledTitle>
      <StyledName testID='name'>{props.name}</StyledName>
    </StyledView>
  )
};