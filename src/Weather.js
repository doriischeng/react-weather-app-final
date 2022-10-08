import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Weather App</h1>;
      <footer>
        This project was coded by{" "}
        <a href="https://www.itsmedoris.com">
          Doris Cheng
        </a>{" "}
        and is{" "}
        <a href="https://github.com/doriischeng/react-weather-app-final">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://bejewelled-chimera-018133.netlify.app">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
