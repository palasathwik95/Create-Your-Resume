import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from "./logo.png"


export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='nav-items'>
            <Link to='/home' className='nav-item'>Home</Link>
            <Link to='/edit' className='nav-item'>Edit Resume</Link>
            <Link to='/preview' className='nav-item'>Preview</Link>
            
        </div>
           
      
    </div>
  )
}
