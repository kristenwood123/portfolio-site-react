import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav__header">
          <button className="nav-toggle">
            <FaBars/>
          </button>
        </div>
        <div className="nav__link-container show-container">
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>   
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
