import * as Font from 'expo-font'
import {exp} from 'react-native-reanimated';

class loadResourcesAndData {

  static async execute() {
    let isLoading = false
    try {
      await Font.loadAsync({
        'poppins-black': require('../../assets/fonts/Poppins-Black.ttf'),
        'poppins-bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'poppins-medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
      });
      isLoading = true
    } catch (error) {
      console.warn(error);
      isLoading = false
    }
    return isLoading
  }

}

export default loadResourcesAndData