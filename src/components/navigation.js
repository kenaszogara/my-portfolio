import {Navbar, Nav} from 'react-bootstrap';
import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import './navigation.css'

class Navigation extends Component{
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="#36353D" variant='dark' className="nav">
        <Navbar.Brand href="#/">
            <img
                src={logo}
                width="49"
                height="77"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="#/">
              Home
            </Nav.Link>
            <Nav.Link href="#/about">
              About
            </Nav.Link>
            <Nav.Link href="#/contact">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default Navigation