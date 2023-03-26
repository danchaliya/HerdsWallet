import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import logo from "../images/bull.png"

function BrandNavbar() {

  let authenticated = (localStorage.getItem("access_token") != null)

  function LoggedInLinks()
  {
    return <Nav>
          <Link to={"/signup"}>Log out</Link>
    </Nav>
  
  }

  function NotLoggedInLinks()
  {
    return <Nav>
          <Link to={"/login"}>Log In</Link>
          <Link to={"/signup"}>Sign Up</Link>
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