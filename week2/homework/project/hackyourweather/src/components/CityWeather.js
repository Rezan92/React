import React from "react";

const CityWeather = ({ weatherInfo }) => {
  const { name, sys, weather, main, coord } = weatherInfo;
  const { country } = sys;
  const { main: weatherSituation, description, icon } = weather[0];
  const { temp, temp_max, temp_min } = main;
  const { lat, lon } = coord;
  return (
    <div className="city-container">
      <h3 className="city-name">
        {name}, {country}
      </h3>
      <div className="temp-icon_container">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${weatherSituation} icon`}
        />
        <h3>{temp} °C</h3>
      </div>
      <div className="weather-info">
        <h4>{weatherSituation}</h4>
        <p className="weather-description">{description}</p>
        <p>max temp: <span>{temp_max} °C</span></p>
        <p>min temp: <span>{temp_min} °C</span></p>
        <p className="weather-location">
          location: <span>{lat}, {lon}</span>
        </p>
      </div>
    </div>
  );
};

export default CityWeather;
