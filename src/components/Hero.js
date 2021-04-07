import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Hero = () => {
  return (
    <header>
    <span className="header__color">
      <div className="container">
        <div className='hero'>
        <hr className='big'/>
        <div className="hero__text">
          <h1>I'm Kristen</h1>
          <p>React Front-End Developer</p>
        </div>
        <button className='btn'>Contact Me</button>
        <div className="hero__icons">
         <FaGithub className='icons'/>
         <FaLinkedin className='icons'/>
        </div>
      </div>
      <div className="hero__image-container">
        <img src="./images/inst.JPG" alt="profile image" className='hero__image1'/>
      </div>
   </div>
  </span>
  </header>
  )
}

export default Hero
