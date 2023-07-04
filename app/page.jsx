"use client"
import React, { useEffect, useState } from "react";
import Head from "./components/Head";
import Main from "./components/Main";
import Hightlights from "./components/Hightlights";
import Navbar from "./components/Navbar";

function Home() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    navigator.geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=4f6eb20d2bbb64f3a7d904bceab37bba`)
        .then((response) => response.json())
        .then((data) => {
          setTemperature(data.current.temp);
        });
    });
  }

  return (
    <div className="container">
      <Head temp={temperature} />
      <div className="content">
        <Main />
        <h1>Today&apos;s Hightlights</h1>
        <Hightlights />
      </div>
    </div>
  );
}

export default Home;