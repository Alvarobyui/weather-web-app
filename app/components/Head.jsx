
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./Head.css";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Head() {
  const [navbar, setNavbar] = useState(false);

  function handleNavbar() {
    setNavbar(!navbar);
  }
  return (
    <>
      {navbar ? (
        <Navbar />
      ) : ("")}
      <div id="head">
        <div className="buttons">
          <button onClick={handleNavbar}>Search for places</button>
          <button className="current-location">
            <img src="sources/currentLocation.png" alt="icon" />
          </button>
        </div>
        <div className="img-box">
          <div className="img">
            <img src="sources/shower.png" alt="main-logo" />
          </div>
        </div>
        <div className="text">
          <h1 className="temp">15<span id="celcious">°C</span></h1>
          <h2 className="descri">Shower</h2>
          <div className="date">Today - Fri 5 Jun</div>
          <div className="city">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              > <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </span>
            <p className="city"> Helsinki</p>
          </div>
        </div>
      </div>
    </>
  );
}
