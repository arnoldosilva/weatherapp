import React, {useState, useEffect} from 'react'
import {cordinates} from '../types/Cordinates'
import GetLocation from '../services/LocationService';
import {Alert} from 'react-native';

export type WeatherContextType = {
  cordinates: cordinates;
  setLocation: (currentLocation: cordinates) => void;
}

const DEFAULT_CONTEXT: WeatherContextType = {
  cordinates: {
    latitude: 0,
    longitude: 0
  },
  setLocation: () => {}
}

export const WeatherContext = React.createContext<WeatherContextType>(DEFAULT_CONTEXT)


const WeatherAppProvider: React.FC = ({children}) => {
  const [cordinates, setCordinates] = useState(DEFAULT_CONTEXT.cordinates)
  const setLocation = (currentLocation: cordinates) => setCordinates(currentLocation)

  useEffect(() => {
    async function postInit() {
      let currentLocation = await GetLocation();

      if (currentLocation.errorMsg) {
        Alert.alert('Error to get current location', currentLocation.errorMsg)
      } else {
        setLocation(currentLocation.cordinates)
      }

    }
    postInit();

  }, []);


  return (
    <WeatherContext.Provider value={{
      cordinates,
      setLocation
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherAppProvider