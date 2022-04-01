import {useEffect, useState} from 'react'
import * as Font from 'expo-font'

export default function loadResourcesAndData(): boolean {
  const [isloadingComplete, setIsloadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsynchronously() {
      try {
        await Font.loadAsync({
          'poppins-black': require('../../assets/fonts/Poppins-Black.ttf'),
          'poppins-bold': require('../../assets/fonts/Poppins-Bold.ttf'),
          'poppins-medium': require('../../assets/fonts/Poppins-Medium.ttf'),
          'poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        });
        setIsloadingComplete(true);
      } catch (error) {
        console.warn(error);
        setIsloadingComplete(false);
      }

    }

    loadResourcesAndDataAsynchronously();
  }, [])
  return isloadingComplete;
}