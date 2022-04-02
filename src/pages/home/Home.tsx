import React from 'react'
import {Container, Temperature, Location, BgImage} from './components/StyledHomeComponents'
import {Dimensions} from 'react-native'
import TitleBar from './components/TitleBar'
import StatusLocationBar from './components/StatusLocationBar'

const height = Dimensions.get('window').height

type Props = {}

const Home = (props: Props) => {
  return (
    <Container testID='Home'>
      <BgImage source={require('../../assets/cloudyday.jpg')}>
        <TitleBar name='Builder' title='Bem vindo' />

        <Temperature>9º</Temperature>
        <Location>São Paulo</Location>

        <StatusLocationBar height={height} />
      </BgImage>
    </Container>
  )
}

export default Home