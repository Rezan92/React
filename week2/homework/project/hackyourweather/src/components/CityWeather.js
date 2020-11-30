import React from "react";

const CityWeather = ({ weatherInfo }) => {
  const { name, sys, weather, main, coord } = weatherInfo;
  const { country } = sys;
  const { main: weatherCondition, description, icon } = weather[0];
  const { temp, temp_max, temp_min } = main;
  const { lat, lon } = coord;
  return (
    <div className="city-container">
      <h3 className="city-name">
        {name}, {country}
      </h3>
      <div className="temp-icon_container">
        <img className="temp-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${weatherCondition} icon`}
        />
        <h3 className="temp">{temp} °C</h3>
      </div>
      <div className="weather-info">
        <h4 className="weather-condition">{weatherCondition}</h4>
        <p className="weather-description">{description}</p>
        <p>max temp: <strong>{temp_max} °C</strong></p>
        <p>min temp: <strong>{temp_min} °C</strong></p>
        <p className="weather-location">
          location: <strong>{lat}, {lon}</strong>
        </p>
      </div>
    </div>
  );
};

export default CityWeather;
