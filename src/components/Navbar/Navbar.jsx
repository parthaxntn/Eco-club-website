import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="" />

      </div>
      <ul className="nav">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/nox'>Noixorgo</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/team'>Team</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
