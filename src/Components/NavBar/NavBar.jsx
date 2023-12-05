import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='navBar'>
        <Link to="/">Home</Link>
        <Link to="/bmiCalculator">Bmi Calculator</Link>
    </div>
  )
}

export default NavBar