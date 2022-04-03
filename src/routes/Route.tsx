import {useContext} from 'react'
import {SafeAreaView} from 'react-native'
import {StatusBar} from 'expo-status-bar';
import Home from '../pages/home/Home';
import loadResourcesAndData from '../hooks/LoadResources'
import Loop from '../components/Loading';
import {WeatherContext} from '../context/WeatherContext'

type Props = {}

const Route = (props: Props) => {

  const {isLoading} = useContext(WeatherContext)

  if (loadResourcesAndData() && !isLoading) {
    return (
      <SafeAreaView >
        <Home />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  } else {
    return (
      <Loop />
    )
  }
}

export default Route