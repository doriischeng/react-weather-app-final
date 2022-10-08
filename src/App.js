import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.itsmedoris.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Doris Cheng
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/doriischeng/react-weather-app-final"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://bejewelled-chimera-018133.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
