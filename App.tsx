import WeatherAppProvider from './src/context/WeatherContext'
import Route from './src/routes/Route'
import LoadResources from './src/hooks/LoadResources'

export default function App() {

  return (
    <WeatherAppProvider>
      <Route />
    </WeatherAppProvider>
  )

}
