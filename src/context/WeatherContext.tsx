import React from 'react'
import {cordinates} from '../types/Cordinates'
// import GetLocation from '../services/LocationService';

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
  const [cordinates, setCordinates] = React.useState(DEFAULT_CONTEXT.cordinates)
  const setLocation = (currentLocation: cordinates) => setCordinates(currentLocation)

  // const [location, setLocation] = useState({})

  // useEffect(() => {
  //   async function postInit() {
  //     let currentLocation = await GetLocation();
  //     console.log(currentLocation)
  //     setLocation(currentLocation)
  //   }
  //   postInit();

  // }, []);


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