import React from 'react'
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer-icon__container">
          <FaFacebookSquare className='footer-icon' />
          <FaLinkedin className='footer-icon' href='https://www.linkedin.com/in/kristenwoodward1/' />
          <FaGithubSquare className='footer-icon' href='https://github.com/kristenwood123' />
        </div>
        <p className="footer__text">Copyright 2021,<br></br>Made with love by Kristen</p>
      </div>
    </footer>
  )
}

export default Footer
