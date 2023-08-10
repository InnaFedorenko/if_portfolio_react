import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/if_logo.png'; // Make sure to provide the correct path to your image

export default function Navbar_b() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoImage}
            alt="Inna Fedorenko Logo"
            height="50" 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link key={1} className="nav-link text-dark" to="/">
              About Me
            </Link>
            <Link key={2} className="nav-link dark" to="/portfolio">
              Portfolio
            </Link>
            <Link key={3} className="nav-link text-dark" to="/contact">
              Contact
            </Link>
            <Link key={4} className="nav-link text-dark" to="/resume">
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
