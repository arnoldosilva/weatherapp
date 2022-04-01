import React from 'react'
import {Container, Titlebar, Title, Name, Temperature, Location, StatusLocationContainer, PushDown, BgImage} from './components/StyledHomeComponents'
import {Dimensions} from 'react-native'

const height = Dimensions.get('window').height

type Props = {}

const Home = (props: Props) => {
  return (
    <Container testID='Home'>
      <BgImage source={require('../../assets/cloudyday.jpg')}>
        <Titlebar>
          <Title>Bem vindo</Title>
          <Name>Builder</Name>
        </Titlebar>

        <Temperature>9º</Temperature>
        <Location>São Paulo</Location>

        <StatusLocationContainer height={height}>
          <Title>Bem vindo</Title>
        </StatusLocationContainer>
      </BgImage>
    </Container>
  )
}

export default Home