import WeatherAppProvider from './src/context/WeatherContext'
import Route from './src/routes/Route'


export default function App() {

  return (
    <WeatherAppProvider>
      <Route />
    </WeatherAppProvider>
  )

}
