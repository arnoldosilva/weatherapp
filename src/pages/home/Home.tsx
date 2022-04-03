import React, {useContext} from 'react'
import {FlatList} from 'react-native'
import {Container, BgImage} from './components/StyledHomeComponents'
import TitleBar from './components/TitleBar'
import StatusLocationBar from './components/StatusLocationBar'
import Temperature from './components/Temperature'
import Location from './components/Location'
import CurrentLocation from './components/CurrentLocation'
import {WeatherContext} from '../../context/WeatherContext'

type Props = {}

const Home = (props: Props) => {
  const {weather} = useContext(WeatherContext)

  return (
    <Container testID='Home'>
      <BgImage source={require('../../assets/cloudyday.jpg')}>
        <TitleBar name='Builder' title='Bem vindo' />
        <Temperature temperature={`${weather.weather.main.temp}`} />
        <Location location={`${weather.city}, ${weather.principalSubdivision}`} />
        <CurrentLocation currentLocation={`${weather.locality}`} />
        <StatusLocationBar />
      </BgImage>
    </Container>
  )
}

export default Home