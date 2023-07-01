/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import "./Navbar.css"

export default function Navbar() {
  /* const [navbar2, setNavbar2] = useState(true);
  
  function handleClick() {
    setNavbar2(!navbar2); 
  }*/
   return (
     <div>
        <nav>
          <div>
            X
          </div>
          <div className="search">
            <div className="search-box">
              <span>lupa</span>
              <input type="text" placeholder='search location'/>
            </div>
            <button id='search'>Search</button>
          </div>
          <div id="cities">
            <div id='cities-list'>
              <a href="#" className="p-box">
                <p>London</p>
                <img src="/sources/arrow.png" alt="arrow" />
              </a>
              <a href="#" className="p-box">
                <p>Barcelona</p>
                <img src="/sources/arrow.png" alt="arrow" />
              </a>
              <a href="#" className="p-box">
                <p>Long Beach</p>
                <img src="/sources/arrow.png" alt="arrow" />
              </a>
            </div>
          </div>
        </nav>
      
     </div>
   )
}
 