/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./Hightlights.css";
import { BiSolidNavigation } from "react-icons/bi";

export default function Hightlights() {
  return (
    <div id="hight">
      <div className="cards">
        <div className="card">
          <p className="wind-text">Wind status</p>
          <p>
            7<span className="UM">mph</span>
          </p>
          <div className="wind-info">
            <div className="wind-arrow">
              <BiSolidNavigation />
            </div>
            <p>WSW</p>
          </div>
        </div>
        <div className="card">
          <p className="humidity-text">Humidity</p>
          <p>
            84<span className="percentage">%</span>
          </p>
          <div className="humidity-info">
            <div className="humidity-bar">
              <p>0</p>
              <p>60</p>
              <p>100</p>
              <div>
                bar here
              </div>
            </div>
            <p>%</p>
          </div>
        </div>
        <div className="card">
          <p className="visibility-text">Visibility</p>
          <p>
            6,4<span className="u-distance">miles</span>
          </p>
        </div>
        <div className="card">
          <p className="air-pressure-text">Air Pressure</p>
          <p>
            998<span className="u-pressure">mb</span>
          </p>
        </div>
        
      </div>
      <footer>
        <p>created by Alvaro Diaz - Funval</p>
      </footer>
    </div>
  );
}
