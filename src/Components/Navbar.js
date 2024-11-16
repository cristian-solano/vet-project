import React from 'react'
import '../Style/navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import menu from '../Images/menu.png'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-content'>
            <div className='nav-image'>
                <img src={logo} alt="logo"/>
            </div>
            
            <div className='nav-links'>
                <label htmlFor='nav-check' className='nav-check-label'>
                    <img src={menu} alt="menu"/>
                </label>
                <input type='checkbox' id="nav-check" style={{display: "none"}}/>
                <div className='nav-link-list'>
                    <Link to="">Location</Link>
                    <Link to="">Blog</Link>
                    <Link to="">Services</Link>
                    <Link to="">About Us</Link>
                    <Link to="">Franchise with Us</Link>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Navbar