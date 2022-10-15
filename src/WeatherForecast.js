import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "281450ec88936f4fa8ee9864682b49a0";
  let unit = "metric";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            Thu
          </div>
          <WeatherIcon code="01d" size={52} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">
              19°
            </span>
            <span className="WeatherForecast-temperatures-min">
              10°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
