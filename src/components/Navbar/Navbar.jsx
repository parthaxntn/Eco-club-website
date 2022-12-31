import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const Navbar = () => {
  // return (
  //   <div className='navbar'>
  //         <div className="logo">
  //             <img src={logo} alt="#"/>
  //         </div>
  //           <ul className='nav'>
  //             <li><Link to='/'>Home</Link></li>
  //             <li><Link to='/nox'>Noixorgo</Link></li>
  //             <li><Link to='/gallery'>Gallery</Link></li>
  //             <li><Link to='/events'>Events</Link></li>
  //             <li><Link to='/blog'>Blog</Link></li>
  //             <li><Link to='/team'>Team</Link></li>
  //           </ul>
  //   </div>
  // )

    const [winWidth, setWinWidth] = useState(window.innerWidth)
    const [hamburg, setHamburg] = useState(false)
  
    useEffect(() => {
      window.addEventListener('resize', (e) => {
        setWinWidth(window.innerWidth)
        console.log(hamburg);
      })
    }, [])

    const hamburger = () => {
      if (hamburg === false) {
        setHamburg(true)
      } else if (hamburg === true) {
        setHamburg(false)
      }
    }
  
    return (
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="" />
          </Link>
        </div>
        <img className="nav-img" src="" alt="" />
        <div className="backdrop" style={{ zIndex: `${hamburg===true?200:-100}`,background: `${hamburg === false ? 'transparent' : 'rgba(0, 0, 0, 0.492)'}` }}></div>
        {winWidth > 800 ? 
            <ul className='nav'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/nox'>Noixorgo</Link></li>
              <li><Link to='/gallery'>Gallery</Link></li>
              <li><Link to='/events'>Events</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              <li><Link to='/team'>Team</Link></li>
            </ul>
            : <>
          <div className="hamburger" style={{fontSize: `${hamburg===false?'40px':'30px'}`,  margin: `${hamburg===false?'auto':''}`, marginRight: `${hamburg===false?'2rem':''}`, position: `${hamburg===true?'fixed':''}`, right: `${hamburg===true?'30px':''}`}} onClick={hamburger}>
            {hamburg === false ? <GiHamburgerMenu /> : <ImCross />}
          </div>
          <div className="hamburg-sidebar" style={{ transform: `${hamburg === true ? 'translateX(0%)' : ''}` }}>
  
            <ul className="hamlist">
  
              <li className="nav-button home">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-button projects">
                <Link to="/nox" className="nav-link">
                  Noixorgo
                </Link>
              </li>
              <li className="nav-button team">
                <Link to="/gallery" className="nav-link">
                  Gallery
                </Link>
              </li>
              <li className="nav-button team">
                <Link to="/events" className="nav-link">
                  Events
                </Link>
              </li>
              <li className="nav-button team">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-button team">
                <Link to="/team" className="nav-link">
                  Team
                </Link>
              </li>
            </ul>
  
          </div>
        </>
        }
      </nav>
    );
}

export default Navbar
