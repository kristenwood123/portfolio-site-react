import React from 'react'
import {FaLinkedin, FaGithubSquare, FaFacebookSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer-icon__container">
          <FaFacebookSquare className='footer-icon'/>
          <FaLinkedin className='footer-icon'/>
          <FaGithubSquare className='footer-icon'/>
        </div>
      <p className="footer__text">Copyright 2021,<br></br>Made with love by Kristen</p>
      </div>
    </footer>
  )
}

export default Footer
