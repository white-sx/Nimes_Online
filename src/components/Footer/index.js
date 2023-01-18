import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function Footer() {
 

  return (
    <>
      <Navbar bg="dark" style={{height:"50px"}} expand="lg" fixed="bottom">
        <Container fluid>
          <h1 style={{color:"#fff"}}>footer</h1>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
