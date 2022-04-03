import React, {useState, useEffect} from 'react'
import {cordinates} from '../types/cordinates'
import GetLocation from '../services/LocationService';
import {Alert} from 'react-native';
import WeatherService from '../services/WeatherService'
import {WeatherType} from '../types/weather';
import loadResourcesAndData from '../hooks/LoadResources';

export type WeatherContextType = {
  cordinates: cordinates;
  setLocation: (currentLocation: cordinates) => void;
  weather: WeatherType;
  isLoading: boolean;
  updatePositionAndWeather: () => void;
}

const DEFAULT_CONTEXT: WeatherContextType = {
  updatePositionAndWeather: () => {},
  isLoading: true,
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
  const [isLoading, setIsLoading] = useState(DEFAULT_CONTEXT.isLoading)

  const updatePositionAndWeather = async () => {

    await getPositionAndWeather();
  }

  useEffect(() => {

    Promise.all([
      LoadResources()]).then(() => getPositionAndWeather())
      .catch(err => Alert.alert('Huston temos um problema'))

  }, []);

  async function LoadResources() {

    setIsLoading(true);

    await loadResourcesAndData.execute();

    setIsLoading(false);
  }



  async function getPositionAndWeather() {
    setIsLoading(true);

    let currentLocation = await GetLocation();

    if (currentLocation.errorMsg) {
      Alert.alert('Huston, temos um problema', currentLocation.errorMsg)
    } else {
      setLocation(currentLocation.cordinates)

      const latitude = currentLocation.cordinates.latitude
      const longitude = currentLocation.cordinates.longitude

      const currentWeather = await WeatherService.getWeather(latitude, longitude)
      if (currentWeather) {
        setWeather(currentWeather)
      } else {
        Alert.alert('Huston, temos um problema')
      }
      setIsLoading(false)
    }

  }


  return (
    <WeatherContext.Provider value={{
      cordinates,
      setLocation,
      weather,
      isLoading,
      updatePositionAndWeather
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherAppProvider