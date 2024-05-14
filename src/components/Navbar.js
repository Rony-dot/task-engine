import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../css/home.css";

export const NavBar = () => {
  return (
    <nav className="navbar custom-navbar navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand text-warning h1 mb-0" href="#">
          <img src="./logo.png" width="30" height="25" className="d-inline-block align-top" alt="" />
          Task Engine
        </a>
      </div>
    </nav>

  );
}
