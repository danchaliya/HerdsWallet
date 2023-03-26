import '../styles/landing.scss';
import BrandNavbar from "../components/navbar.js"
import "../styles/style.css"
import logo from "../images/logoImage.png";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useState } from 'react';

function Landing() {

  const [key, setKey] = useState("about");

  return (
    <>
      <BrandNavbar/>
      <img src={logo} alt="bullImage" className='logo'/>
      
      <Container>
          <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          fill
        >
          <Tab eventKey="about" title="About">
              <p className='centeredText'>Herds Wallet is a comprehensive budget application that helps users find a budget that 
                works for them based user specifications and assists with tracking daily expenditures 
                over different periods of times.</p>
            </Tab>
            <Tab eventKey="different" title="How we differ">
              <p className='centeredText'>Herds Wallet is a comprehensive budget application that helps users find a budget that 
              works for them based user specifications and assists with tracking daily expenditures 
              over different periods of times.</p>
              </Tab>
            <Tab eventKey="inspiration" title="Inspiration">
              <p className='centeredText'>Herds Wallet is a comprehensive budget application that helps users find a budget that 
              works for them based user specifications and assists with tracking daily expenditures 
              over different periods of times.</p>
            </Tab>
          </Tabs>
      </Container>


    </>
  );
}

export default Landing;
