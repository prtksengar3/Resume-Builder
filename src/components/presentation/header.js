import React, { Component } from 'react';
import logo from '../../static/images/logo.png'
import {NavLink} from 'react-router-dom';
const header = () =>{
  return(
    <div className="App">
    <header className = "header flex-row">
        <div className="logo-container">
          <img className="logo" src={logo}></img>
      </div>
      <div className="nav-links">
      <ul className="nav-links-ul flex-row">
      <li className="nav-links-li">
        <a href="contact">Resume Templates</a>
        </li>
        <li className="nav-links-li">
        <a href="#">About Us</a>
      </li>
      <li className="nav-links-li">
      <button className="btn white">Register</button>
      </li>
      <li className="nav-links-li">
      <a href="#">Sign In</a>
      </li>
      </ul>
      </div>
      </header> 
        {/* <h1>Create a Resume that Stands out</h1>
        <h2>Create a Resume that perfactally describes your skills and match your job profile</h2> */}
    </div>
  )
}

export default header;