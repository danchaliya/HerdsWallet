import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
import logo from "../images/bull.png"
import { useEffect, useState } from 'react';

function BrandNavbar() {

  let authenticated = true
  //(localStorage.getItem("access_token") != null)

  function LoggedInLinks()
  {
    return <Nav>
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#signup">
        Sign up
      </Nav.Link>
    </Nav>
  
  }

  function NotLoggedInLinks()
  {
    return <Nav>
      <Nav.Link href="#login">Logout</Nav.Link>
      <Nav.Link eventKey={2} href="#signup">
        Logout
      </Nav.Link>
    </Nav>
    
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Herds Wallet
          </Navbar.Brand>
            {authenticated ? <LoggedInLinks/> : <NotLoggedInLinks/>}
        </Container>
      </Navbar>

    </>
  );
}

export default BrandNavbar;