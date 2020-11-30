import React, { useState } from "react";
import "../style/cityWeather.css";
import SearchForm from "./SearchForm";
import CityWeather from "./CityWeather";
import ErrorText from "./ErrorText";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_API_KEY;

const CityWeatherContainer = () => {
  const [cityName, setCityName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});
  const [ifError, setIfError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setIfError({});
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod >= 400) {
        const error = new Error();
        error.data = data;
        throw error;
      } else {
        setWeatherInfo(data);
      }
      setIsLoading(false);
    } catch (err) {
      setIfError(err.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="city-weather-container">
      <SearchForm
        cityName={cityName}
        setCityName={setCityName}
        handleSubmit={handleSubmit}
      />
      {Object.keys(ifError).length > 0 && <ErrorText ifError={ifError}/>}
      {isLoading && <Spinner />}
      {Object.keys(weatherInfo).length > 0 && (
        <CityWeather weatherInfo={weatherInfo} />
      )}
    </div>
  );
};

export default CityWeatherContainer;
