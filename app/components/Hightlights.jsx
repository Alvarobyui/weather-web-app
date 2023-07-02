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
      </div>
      <footer>
        <p>created by Alvaro Diaz - Funval</p>
      </footer>
    </div>
  );
}
