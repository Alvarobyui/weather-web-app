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
          <p className="big-num">
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
          <p className="big-num">
            84<span className="percentage">%</span>
          </p>
          <div className="humidity-info">
            <div className="humidity-bar">
              <div>
                <span>0</span>
                <p>50</p>
                <p>100</p>
              </div>
              <div id="bar">
                <div className="bar-fill">

                </div>
              </div>
            </div>
            <p>%</p>
          </div>
        </div>
        <div className="card short">
          <p className="visibility-text">Visibility</p>
          <p className="big-num">
            6,4<span className="u-distance"> miles</span>
          </p>
        </div>
        <div className="card short">
          <p className="air-pressure-text">Air Pressure</p>
          <p className="big-num">
            998<span className="u-pressure"> mb</span>
          </p>
        </div>
        
      </div>
      <footer>
        <p>created by Alvaro Diaz - Funval</p>
      </footer>
    </div>
  );
}
