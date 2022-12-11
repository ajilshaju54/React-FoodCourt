import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div>
        
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://wtzupcity.com/upload/70735tonico.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            NEWLAND CAFE
            <br /><br />
          <h4 className="text-light"> RESTUARANT </h4>
            
          </Navbar.Brand>
          
        </Container>
        
      </Navbar>
    </div>
  )
}

export default Header
