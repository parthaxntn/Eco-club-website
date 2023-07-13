import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const Navbar = () => {

  let path = useLocation().pathname;

  useEffect(()=>{
    switch (path) {
      case '/':
        document.getElementById('title').innerText = `Eco-Club | Home`;
        break;
      case '/nox':
        document.getElementById('title').innerText = `Eco-Club | Noixorgo`;
        break;
      case '/gallery':
        document.getElementById('title').innerText = `Eco-Club | Gallery`;
        break;
      case '/events':
        document.getElementById('title').innerText = `Eco-Club | Events`;
        break;
      case '/blogs':
        document.getElementById('title').innerText = `Eco-Club | Blog`;
        break;
      case '/team':
        document.getElementById('title').innerText = `Eco-Club | Team`;
        break;
      default:
        document.getElementById('title').innerText = `Eco-Club | Home`;
        break;
    }
  },[useLocation().pathname])

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
              <li><Link className={path==='/'?'selected':''} to='/'>Home</Link></li>
              <li><Link className={path==='/nox'?'selected':''} to='/nox'>Noixorgo</Link></li>
              <li><Link className={path==='/gallery'?'selected':''} to='/gallery'>Gallery</Link></li>
              <li><Link className={path==='/events'?'selected':''} to='/events'>Events</Link></li>
              <li><Link className={path==='/blogs'?'selected':''} to='/blogs'>Blog</Link></li>
              <li><Link className={path==='/team'?'selected':''} to='/team'>Team</Link></li>
            </ul>
            : <>
          <div className="hamburger" style={{fontSize: `${hamburg===false?'40px':'30px'}`,  margin: `${hamburg===false?'auto':''}`, marginRight: `${hamburg===false?'2rem':''}`, position: `${hamburg===true?'fixed':''}`, right: `${hamburg===true?'30px':''}`}} onClick={hamburger}>
            {hamburg === false ? <GiHamburgerMenu /> : <ImCross />}
          </div>
          <div className="hamburg-sidebar" style={{ transform: `${hamburg === true ? 'translateX(0%)' : ''}` }}>
  
            <ul className="hamlist">
  
              <li className="nav-button team">
                <Link to="/" className="nav-link" id={path ==='/' ? 'sel' : ''}>
                  Home
                </Link>
              </li>
              <li className="nav-button team">
                <Link to="/nox" className="nav-link" id={path ==='/nox' ? 'sel' : ''}>
                  Noixorgo
                </Link>
              </li>
              <li className="nav-button team">
                <Link to="/gallery" className="nav-link" id={path ==='/gallery' ? 'sel' : ''}>
                  Gallery
                </Link>
              </li>
              <li className="nav-button team">
                <Link to="/events" className="nav-link" id={path ==='/events' ? 'sel' : ''}>
                  Events
                </Link>
              </li>
              <li className="nav-button team">
                <Link to="/blogs" className="nav-link" id={path ==='/blogs' ? 'sel' : ''}>
                  Blog
                </Link>
              </li>
              <li className="nav-button team">
                <Link to="/team" className="nav-link" id={path ==='/team' ? 'sel' : ''}>
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
