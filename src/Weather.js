import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({
    loaded: false,
  });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: Math.round(
        response.data.main.temp
      ),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description:
        response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon:
        "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate
              date={weatherData.date}
            />
          </li>
          <li className="text-capitalize">
            {weatherData.description}
          </li>
        </ul>
        <div className="row mt-4">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                />
              </div>
              <div className="float-left">
                <span className="temperature">
                  {Math.round(
                    weatherData.temperature
                  )}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: {weatherData.humidity}%
              </li>
              <li>
                Wind: {weatherData.wind}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey =
      "4a57d92459ebaebf0556db5aa7e8c670";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    );
  }
}
