import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../../Images/SMPK-Logo.png";

export default function Navbar() {
  
//Change Navbar Color when Scrolling
  const[color, setColor]= useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 500){
      setColor(true)
    } else{
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
  
  return <>
   <div>
      <nav className={color? 'navbar bg-light navbar-expand-lg py-0 px-5 w-100 fixed-top' : 'navbar navbar-expand-lg py-0 px-5 w-100 fixed-top'}>
        <Link className="navbar-brand" to="Home">
          <img src={img} height={80} width={80}  alt='St-mina-VA'></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            

            <li className="nav-item">
              <Link className="nav-link fs-5 p-0 me-2 mb-2" to="/">Home</Link>
              <div className="line"></div>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 p-0 mx-2" to="/Schedule">Schedule</Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link fs-5 p-0 mx-2" to="/Giving">Giving</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 p-0 mx-2" target='blank' to="https://smpkva.chmeetings.com/Account/Login">My SMPK</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 p-0 mx-2" target='blank' to="https://smpkva.chmeetings.com/Register">Become A Member</Link>
            </li>
          
            <li className="nav-item dropdown pe-5">
              <Link className="nav-link dropdown-toggle fs-5 p-0 mx-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item ps-3" to="/Ministries">Ministries</Link>
                <Link className="dropdown-item ps-3" to="/WatchLive">Watch Live</Link>
                <Link className="dropdown-item ps-3" to="/AboutUs">About Us</Link>
                <Link className="dropdown-item ps-3" to="/ContactUs">Contact Us</Link>
              </div>
            </li>

          </ul>
          
        </div>
      </nav>
    </div>
  </>
}
