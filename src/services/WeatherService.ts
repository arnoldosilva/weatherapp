
import {WeatherType} from '../types/weather'

class WeatherService {
  static async getWeather(latitude: number, longitude: number): Promise<WeatherType | null> {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${'ae0c89b42e5851a53954ec915feee7b4'}&units=metric&lang={pt_br}`).catch((e) => alert('Temos um problema Huston, tente novamente mais tarde'));
    const reverseGeocode = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt_br`).catch((e) => alert('Temos um problema Huston, tente novamente mais tarde'));
    const weatherData = weather ? await weather.json() : null;
    const reverseGeocodeData = reverseGeocode ? await reverseGeocode.json() : null;

    if (weatherData && reverseGeocodeData) {
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
    return null;
  }
}

export default WeatherService;