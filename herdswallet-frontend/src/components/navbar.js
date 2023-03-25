import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../images/bull.png"
import { useEffect, useState } from 'react';

function BrandNavbar() {
  // const [loginStatus, setLogin] = useState("NotLoggedIn");
  // const changeLogin = () => 
  // {
  //   setLogin("LoggedIn");
  // }

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
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#signup">
              Sign up
            </Nav.Link>
          </Nav>
          {/* <div>
            <button onClick={changeLogin}> Login </button>
          </div> */}
        </Container>
      </Navbar>

    </>
  );
}

export {BrandNavbar};