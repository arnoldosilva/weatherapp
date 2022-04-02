import {SafeAreaView} from 'react-native'
import {StatusBar} from 'expo-status-bar';
import Home from '../pages/home/Home';
import loadResourcesAndData from '../hooks/LoadResources'

type Props = {}

const Route = (props: Props) => {
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

export default Route