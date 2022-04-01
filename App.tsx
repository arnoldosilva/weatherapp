import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import Home from './src/pages/home/Home';
import loadResourcesAndData from './src/hooks/LoadResources'

export default function App() {
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
