/*import React from 'react'
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  return (
    <div>
        <img src={logo} alt="" />
    </div>
  )
}

export default Navbar */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpeg'
import fb from '../assets/fb.png'
import tw from '../assets/tw.png'
import ig from '../assets/ig.png'
import './Navbar.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar" >
      <Container>
        <Navbar.Brand href="#home" className='logo'><img src={logo} alt="logo" /></Navbar.Brand>
        
      
        <Navbar.Collapse id="basic">
          <Nav className="me">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Feature</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <Nav.Link href="#link">Team</Nav.Link>
             <img src={fb} alt="fb" />
             <img src={tw} alt="" />
             <img src={ig} alt="" />
             <button className='btn'>Log in</button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;