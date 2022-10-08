import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
      <h1>Hong Kong</h1>
      <ul>
        <li>Saturday 21:40</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="weather-icon"
          ></img>
          26°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 73%</li>
            <li>Wind: 19km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
