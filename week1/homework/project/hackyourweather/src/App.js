import './style/App.css';
import cityWeatherJson from "./city-weather.json";
import CityWeather from "./cityWeather"

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      {cityWeatherJson.map((cityWeather, index) => {
        return <CityWeather key={index} weatherInfo={cityWeather} />
      })}
    </div>
  );
}

export default App;
