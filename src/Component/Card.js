import React from "react";
import { useWeather } from "../Contex/WeatherContext";

function Card() {
  const { weatherData, days, city } = useWeather();

  return (
    <div className="content">
      <h1 className="city-title">{city.name}</h1>
      <div className="weather-container">
        {weatherData &&
          weatherData.map((item, key) => (
            <div key={key} className="weather-card">
              <div className="card-header">
                <h2>{days[new Date(item.dt * 1000).getDay()]}</h2>
              </div>

              <div className="card-body">
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                />
                <p className="weather-description">
                  {item.weather[0].description.toUpperCase()}
                </p>
                <h1>{Math.floor(item.temp.max)}°C</h1>
                <p className="weather-temp">
                  <span>{Math.floor(item.temp.min)}°C</span> /{" "}
                  <span>{Math.floor(item.temp.max)}°C</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;