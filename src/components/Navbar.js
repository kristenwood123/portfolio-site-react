import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import links from '../links'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
      if(showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`
      } else {
        linksContainerRef.current.style.height = '0px'
      }
  }, [showLinks])
  // everything my links change, check the height for the links Ref

  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav__header">
          <button 
            className="nav-toggle" 
            onClick={() => setShowLinks(!showLinks)}>
            <FaBars/>
          </button>
        </div>
         
        <div className='nav__link-container' ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const {id, url, text} = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
