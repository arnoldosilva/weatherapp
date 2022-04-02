import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import {LocationObject} from 'expo-location';

interface ILocation {
  latitude: number;
  longitude: number;
}

export default function GetLocation(): ILocation {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  let position = {
    latitude: location?.coords.latitude ? location?.coords.latitude : 0,
    longitude: location?.coords.longitude ? location?.coords.longitude : 0
  };

  return position;
}

