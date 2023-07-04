/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "./Main.css"

export default function Main(props) {
  return (
    <div id="main">
        <div className="UIM">
          <div className="celcious">
            °C
          </div>
          <div className="fahren">
            °F
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <p>{props?.tomorrow}</p>
            <div className="img">
              <img src="/sources/Sleet.png" alt="image" />
            </div>
            <div className="box">
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </div>
          <div className="card">
            <p>{props?.day2}</p>
            <div className="img">
              <img src="/sources/Sleet.png" alt="image" />
            </div>
            <div className="box">
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </div>
          <div className="card">
            <p>{props?.day3}</p>
            <div className="img">
              <img src="/sources/Sleet.png" alt="image" />
            </div>
            <div className="box">
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </div>
          <div className="card">
          <p>{props?.day4}</p>
            <div className="img">
              <img src="/sources/Sleet.png" alt="image" />
            </div>
            <div className="box">
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </div>
          <div className="card">
          <p>{props?.day5}</p>
            <div className="img">
              <img src="/sources/Sleet.png" alt="image" />
            </div>
            <div className="box">
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </div>
        </div>
    </div> 
  )
}
