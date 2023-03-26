import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import logo from "../images/bull.png";
import {GiEntryDoor, GiExitDoor} from "react-icons/gi";
import {BsFillPenFill} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import "../styles/icons.css";

function BrandNavbar() {

  let authenticated = (localStorage.getItem("access_token") != null)

  function LoggedInLinks()
  {
    return <Nav>
      <Button>
        <Link to={"/"}>
          <GiExitDoor/>
        </Link>
      </Button>
    </Nav>
  
  }

  function NotLoggedInLinks()
  {
    return <Nav>
      <Link to={"/login"}>
        <Button variant='primary' className="button">
          <GiEntryDoor/> Log in
        </Button>
      </Link>
      &nbsp;
      &nbsp;
      <Link to={"/signup"}>
        <Button variant='primary' className="button">
          <BsFillPenFill/> Sign Up
        </Button>      
      </Link>
    </Nav>
    
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">   {/* works without link, dont change */}
            <img
              alt="navbar_logo"
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