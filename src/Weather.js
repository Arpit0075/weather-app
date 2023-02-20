import React, { useState, useEffect } from "react";
import "./weather.css";

const Weather = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "e22845db43cf77e0305e204f5e6722dc";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, [API_URL]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = weatherData;

  return (
    <div className="weather-container">
      <h2>{name}</h2>
      <p className="description">{weather[0].description}</p>

      <div className="temp-info">
        <p>Current: {Math.round(main.feels_like)}°C</p>
        <p>Min: {Math.round(main.temp_min)}°C</p>
        <p>Max: {Math.round(main.temp_max)}°C</p>
      </div>
    </div>
  );
};

export default Weather;
