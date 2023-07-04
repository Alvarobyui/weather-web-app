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
  const [forecastTemp, setForecastTemp] = useState([]);

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
  useEffect(() => {
    getData();
    getDate();
  }, []);

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

          /* Obteniendo la fecha de los próximos 5 dias*/
          let day1 = "Tomorrow";
          let day2 = data.daily[2].dt;
          let day3 = data.daily[3].dt;
          let day4 = data.daily[4].dt;
          let day5 = data.daily[5].dt;

          /*obteniendo la temperatura de los próximos 5 dias*/
          let temDay1 = [
            Math.round(data.daily[0].temp.day),
            Math.round(data.daily[0].temp.night),
          ];
          let temDay2 = [
            Math.round(data.daily[1].temp.day),
            Math.round(data.daily[1].temp.night),
          ];
          let temDay3 = [
            Math.round(data.daily[2].temp.day),
            Math.round(data.daily[2].temp.night),
          ];
          let temDay4 = [
            Math.round(data.daily[3].temp.day),
            Math.round(data.daily[3].temp.night),
          ];
          let temDay5 = [
            Math.round(data.daily[4].temp.day),
            Math.round(data.daily[4].temp.night),
          ];
          setForecastTemp([temDay1, temDay2, temDay3, temDay4, temDay5])

          function convertTime(unixTimestamp) {
            const date = new Date(unixTimestamp * 1000);
            const options = {
              weekday: "short",
              day: "numeric",
              month: "short",
            };
            const readableDate = date.toLocaleString("en-US", options);
            return readableDate;
          }

          const readableDay2 = convertTime(day2);
          const readableDay3 = convertTime(day3);
          const readableDay4 = convertTime(day4);
          const readableDay5 = convertTime(day5);
          console.log(day2);
          setForecastDate([
            day1,
            readableDay2,
            readableDay3,
            readableDay4,
            readableDay5,
          ]);
          console.log(forecastDate);
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
    /* let day2 = [days[day + 2], dayNum + 2, months[month]];
    let day3 = [days[day + 3], dayNum + 3, months[month]];
    let day4 = [days[day + 4], dayNum + 4, months[month]];
    let day5 = [days[day + 0], dayNum + 5, months[month]];
    setForecastDate([tomorrow, day2, day3, day4, day5]); */
  }

  return (
    <div className="container">
      <Head temp={temperature} des={description} date={date} />
      <div className="content">
        <Main
          tomorrow={forecastDate[0]}
          day2={forecastDate[1]}
          day3={forecastDate[2]}
          day4={forecastDate[3]}
          day5={forecastDate[4]}

          tempDay1 = {forecastTemp[0]}
          tempDay2 = {forecastTemp[1]}
          tempDay3 = {forecastTemp[2]}
          tempDay4 = {forecastTemp[3]}
          tempDay5 = {forecastTemp[4]}
        />
        <h1>Today&apos;s Hightlights</h1>
        <Hightlights />
      </div>
    </div>
  );
}

export default Home;
