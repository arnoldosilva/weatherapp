import React from 'react'
import {Container, BgImage} from './components/StyledHomeComponents'
import TitleBar from './components/TitleBar'
import StatusLocationBar from './components/StatusLocationBar'
import Temperature from './components/Temperature'
import Location from './components/Location'
import GetLocation from '../../services/GetLocation'


type Props = {}

const Home = (props: Props) => {
  return (
    <Container testID='Home'>
      <BgImage source={require('../../assets/cloudyday.jpg')}>
        <TitleBar name='Builder' title='Bem vindo' />

        <Temperature temperature='23' />
        <Location location='Fortaleza , CE' />
        <StatusLocationBar />
      </BgImage>
    </Container>
  )
}

export default Home