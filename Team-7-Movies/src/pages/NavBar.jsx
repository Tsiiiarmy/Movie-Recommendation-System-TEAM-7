import React from 'react'
import '../assets/NavBar.css'
import movie from '/images/movie.svg'

const NavBar = () => {
  return (
   <div className="navbar">
    <div className="movie-title">
        <img src={movie} alt="movie" className='logo'/>
        <h1>TEAM7MOVIES</h1>
    </div>
    <div className="menu-btn">
        <ul className='navbar-menu'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>FAVORITE</li>
            <li>CONTACT</li>
        </ul>
            <button className='btn'>Join Now</button>
    </div>
   </div>
  )
}

export default NavBar
