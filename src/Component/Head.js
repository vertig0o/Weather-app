import React from 'react'
import { useWeather } from "../Contex/WeatherContext";

function Head() {


const { city, setCity, citiesJSON, day, todayDate } = useWeather();
const changeCityName = (e) => {
    for (let i = 0; i < citiesJSON.length; i++) {
      if (e.target.value === citiesJSON[i].name) {
        setCity(citiesJSON[i]);
      }
    }
  };



  return (
    <div className="header">
      <h1>Hava Durumu</h1>
      <div className="selectbar">
        <select
          name="cityname"
          id="cityname"
          value={city.name}
          onChange={changeCityName}
        >
          {citiesJSON.map((item, key) => (
            <option key={key} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <div>
          <h3 className="date">
            <span>{todayDate}</span>
            <br />
            <span>{day}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Head