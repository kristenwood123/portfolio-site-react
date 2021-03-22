import React, { useState } from 'react'
// import { FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(true)

  const handleToggle = () => {
  setNavbarOpen(!navbarOpen)
}
  return (
    <nav className='navBar'>
      {/* <button onClick={handleToggle}>{navbarOpen? 'Close' : 'Open'}</button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul> */}
    </nav>
  )
}

export default Navbar
