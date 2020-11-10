import "./style/cityWeather.css"
const CityWeather = ({ weatherInfo }) => {
  const { name, sys, weather, main , coord} = weatherInfo;
  const { country } = sys;
  const { main: weatherSituation, description } = weather[0];
  const { temp_max, temp_min } = main;
  const {lat, lon} = coord
  return (
    <div className="city-container">
      <h3>{name}, {country}</h3>
      <h4>{weatherSituation}</h4>
      <p className="weather-description">{description}</p>
      <p>min temp: {temp_max}</p>
      <p>max temp: {temp_min}</p>
      <p>location: {lat}, {lon}</p>
      {console.log("weatherInfo", weatherInfo)}
    </div>
  );
};

export default CityWeather;
