import React, {useState, useEffect} from 'react'
import {cordinates} from '../types/cordinates'
import GetLocation from '../services/LocationService';
import {Alert} from 'react-native';
import WeatherService from '../services/WeatherService'
import {WeatherType} from '../types/weather';

export type WeatherContextType = {
  cordinates: cordinates;
  setLocation: (currentLocation: cordinates) => void;
  weather: WeatherType;
}

const DEFAULT_CONTEXT: WeatherContextType = {
  cordinates: {
    latitude: 0,
    longitude: 0
  },
  setLocation: () => {},
  weather: {
    city: '',
    locality: '',
    principalSubdivision: '',
    countryName: '',
    countryCode: '',
    weather: {
      main: {
        "humidity": 0,
        "pressure": 0,
        "temp": 0,
      },
      sys: {
        "sunrise": 0,
        "sunset": 0,
      }
    }
  }
}

export const WeatherContext = React.createContext<WeatherContextType>(DEFAULT_CONTEXT)


const WeatherAppProvider: React.FC = ({children}) => {
  const [cordinates, setCordinates] = useState(DEFAULT_CONTEXT.cordinates)
  const setLocation = (currentLocation: cordinates) => setCordinates(currentLocation)
  const [weather, setWeather] = useState(DEFAULT_CONTEXT.weather)

  useEffect(() => {
    async function postInit() {
      let currentLocation = await GetLocation();

      if (currentLocation.errorMsg) {
        Alert.alert('Error to get current location', currentLocation.errorMsg)
      } else {
        setLocation(currentLocation.cordinates)

        const latitude = currentLocation.cordinates.latitude
        const longitude = currentLocation.cordinates.longitude

        const weatherLocation = await WeatherService.getWeather(latitude, longitude)
        setWeather(weatherLocation)
      }

    }
    postInit();

  }, []);


  return (
    <WeatherContext.Provider value={{
      cordinates,
      setLocation,
      weather
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherAppProvider