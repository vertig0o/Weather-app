import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import citiesJSON from "../Component/data/cities.json";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState(citiesJSON[33]);

  useEffect(() => {
    WeatherApi();
  });

  const WeatherApi = async () => {
    const url = "https://api.openweathermap.org/data/2.5/";
    const key = "148846be639af3751c28631b8359215e";
    const { data } = await axios.get(
      `${url}onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude=current,minutely,hourly,alerts&lang=tr&appid=${key}`
    );
    setWeatherData(data.daily);
  };

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const date = new Date();
  let todayDate = date.toLocaleDateString();
  let getDay = date.getDay();
  let day;
  switch (getDay) {
    case 0:
      day = "Pazar";
      break;
    case 1:
      day = "Pazartesi";
      break;
    case 2:
      day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
    default:
      day = "";
  }

  const values = {
    city,
    setCity,
    citiesJSON,
    day,
    days,
    getDay,
    todayDate,
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

const useWeather = () => useContext(WeatherContext);

export { WeatherProvider, useWeather };