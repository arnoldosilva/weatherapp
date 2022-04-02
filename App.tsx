import {useEffect, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import Home from './src/pages/home/Home';
import loadResourcesAndData from './src/hooks/LoadResources'
import GetLocation from './src/services/GetLocation';

export default function App() {
  const [location, setLocation] = useState({})

  useEffect(() => {
    async function postInit() {
      let currentLocation = await GetLocation();
      console.log(currentLocation)
      setLocation(currentLocation)
    }
    postInit();

  }, []);



  if (loadResourcesAndData()) {
    return (
      <SafeAreaView >
        <Home />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  } else {
    return (
      <></>
    )
  }
}
