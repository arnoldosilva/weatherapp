import * as Location from 'expo-location';
interface ILocation {
  cordinates: {
    latitude: number;
    longitude: number;
  }
  errorMsg: string;
}

export default async function GetLocation(): Promise<ILocation> {

  let errorMsg = ''
  let cordinates = {latitude: 0, longitude: 0}

  let {status} = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    errorMsg = 'Permission to access location was denied';
    return {cordinates, errorMsg}
  }

  const location = await Location.getCurrentPositionAsync({});
  if (location) {
    cordinates = {
      latitude: location?.coords.latitude ? location?.coords.latitude : 0,
      longitude: location?.coords.longitude ? location?.coords.longitude : 0
    };
  }
  console.log({cordinates, errorMsg})
  return {cordinates, errorMsg};
}

