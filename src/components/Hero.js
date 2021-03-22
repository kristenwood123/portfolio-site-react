import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Hero = () => {
  return (
    <header>
      <div className="container">
      <div className='hero'>
        <hr className='big'/>
        <div className="hero__text">
          <h1>I'm Kristen</h1>
          <p>React Front-End Developer</p>
        </div>
        <button class='btn'>Contact Me</button>
        <div className="hero__icons">
         <FaGithub class='icons'/>
         <FaLinkedin class='icons'/>
        </div>
    </div>
   </div>
  </header>
  )
}

export default Hero
