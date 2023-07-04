"use client";
import React, { useEffect, useState } from "react";
import Head from "./components/Head";
import Main from "./components/Main";
import Hightlights from "./components/Hightlights";

function Home() {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("Shower");
  const [date, setDate] = useState("Mon, 3 jul");
  const [forecastDate, setForecastDate] = useState([]);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function getData() {
    navigator.geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=4f6eb20d2bbb64f3a7d904bceab37bba`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTemperature(Math.round(data.current.temp));
          setDescription(data.current.weather[0].description);
        });
    });
  }

  function getDate() {
    const date = new Date();
    let day = date.getDay();
    let dayNum = date.getDate();
    let month = date.getMonth();
    /*     console.log(date);
     */ /*     console.log(days[day]);
    console.log(dayNum);
    console.log(months[month]);
 */
    let dateArray = [days[day], dayNum, months[month]];
    setDate(dateArray);

    let tomorrow = ["Tomorrow"];
    let day2 = [days[day + 2], dayNum + 2, months[month]];
    let day3 = [days[day + 3], dayNum + 3, months[month]];
    let day4 = [days[day + 4], dayNum + 4, months[month]];
    let day5 = [days[day + 0], dayNum + 5, months[month]];
    setForecastDate([tomorrow, day2, day3, day4, day5]);
  }

  useEffect(() => {
    getData();
    getDate();
  }, []);

  /*  function getForecast() {
   return forecastDay1 = [forecastDate[0], forecastInfo[0]];
  } */
  console.log(forecastDate);

  return (
    <div className="container">
      <Head temp={temperature} des={description} date={date} />
      <div className="content">
        <Main
          tomorrow={forecastDate}
          day2={forecastDate[1]}
          day3={forecastDate[2]}
          day4={forecastDate[3]}
          day5={forecastDate[4]}
        />
        <h1>Today&apos;s Hightlights</h1>
        <Hightlights />
      </div>
    </div>
  );
}

export default Home;
