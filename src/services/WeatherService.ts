
import {WeatherType} from '../types/weather'

class WeatherService {
  static async getWeather(latitude: number, longitude: number): Promise<WeatherType> {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${'ae0c89b42e5851a53954ec915feee7b4'}&units=metric&lang={pt_br}`);
    const reverseGeocode = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt_br`);
    const weatherData = await weather.json();
    const reverseGeocodeData = await reverseGeocode.json();
    const response: WeatherType = {
      city: reverseGeocodeData.city,
      locality: reverseGeocodeData.locality,
      principalSubdivision: reverseGeocodeData.principalSubdivision,
      countryName: reverseGeocodeData.countryName,
      countryCode: reverseGeocodeData.countryCode,
      weather: {
        main: {
          "humidity": weatherData.main.humidity,
          "pressure": weatherData.main.pressure,
          "temp": weatherData.main.temp
        },
        sys: {
          "sunrise": weatherData.sys.sunrise,
          "sunset": weatherData.sys.sunset,
        }
      }
    }

    return response;
  }
}

export default WeatherService;