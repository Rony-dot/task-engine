import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <nav class="navbar navbar-light bg-dark">
      <a class="navbar-brand text-warning" href="#">
        <img src="./logo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
        Task Engine
      </a>
    </nav>

  );
}
