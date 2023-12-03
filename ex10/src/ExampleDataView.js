import React, { useState, useEffect } from 'react';
import { MAIN_DATA } from './data'; 
import "./LandingView.css";

function LandingView() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const lat = "33.907874438258574"; 
  const lon = "-117.71653394484751"; 
  const APIkey = "4b7c7a3d8e593ee939b9eb59d1d18470"; 

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }, [lat, lon, APIkey]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data!</div>;

  return (
    <div className="landingView">
      {weatherData && (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Max Temperature: {weatherData.main.temp_max}°C</p>
          <p>Min Temperature: {weatherData.main.temp_min}°C</p>
          <p>Weather: {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Wind Direction: {weatherData.wind.deg}°</p>
        </>
      )}
    </div>
  );
}

export default LandingView;
