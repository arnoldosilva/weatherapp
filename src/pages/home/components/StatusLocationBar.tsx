import React from 'react'
import styled from 'styled-components/native'
import {Font} from '../../../types/fonts'

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

// const StyledTitle = styled.Text`
//   font-size: 20px;
//   font-weight: 500;
//   color: #b8bece;
//   font-family: ${Font.medium};
// `;

// const StyledName = styled.Text`
// 	font-size: 20px;
// 	color: #FECC00;
// 	font-weight: bold;
//   font-family: ${Font.bold};
// `;

export default function StatusLocationBar(props: iStatusLocationProps) {
  return (
    <StatusLocationContainer height={props.height}>

    </StatusLocationContainer>
  )
};