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
            <p>{props.tomorrow[0]}</p>
            <div className="img">
              <img src="/sources/Sleet.png" alt="image" />
            </div>
            <div className="box">
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </div>
          <div className="card">
            <p>{props.day2?.[0]} {props.day2?.[1]} {props.day2?.[2]}</p>
            <div className="img">
              <img src="/sources/Sleet.png" alt="image" />
            </div>
            <div className="box">
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </div>
          <div className="card">
            <p>{props.day3?.[0]} {props.day3?.[1]} {props.day3?.[2]}</p>
            <div className="img">
              <img src="/sources/Sleet.png" alt="image" />
            </div>
            <div className="box">
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </div>
          <div className="card">
          <p>{props.day4?.[0]} {props.day4?.[1]} {props.day4?.[2]}</p>
            <div className="img">
              <img src="/sources/Sleet.png" alt="image" />
            </div>
            <div className="box">
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </div>
          <div className="card">
          <p>{props.day5?.[0]} {props.day5?.[1]} {props.day5?.[2]}</p>
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
