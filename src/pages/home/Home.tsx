import React, {useContext} from 'react'
import {Container, BgImage} from './components/StyledHomeComponents'
import TitleBar from './components/TitleBar'
import StatusLocationBar from './components/StatusLocationBar'
import Temperature from './components/Temperature'
import Location from './components/Location'
import CurrentLocation from './components/CurrentLocation'
import {WeatherContext} from '../../context/WeatherContext'

type Props = {}

const Home = (props: Props) => {
  const {cordinates} = useContext(WeatherContext)

  return (
    <Container testID='Home'>
      <BgImage source={require('../../assets/cloudyday.jpg')}>
        <TitleBar name='Builder' title='Bem vindo' />

        <Temperature temperature='23' />
        <Location location='Fortaleza , CE' />
        <CurrentLocation currentLocation={`${cordinates.latitude} ${cordinates.longitude}`} />

        <StatusLocationBar />
      </BgImage>
    </Container>
  )
}

export default Home