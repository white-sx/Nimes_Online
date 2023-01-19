import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

function Footer() {
  return (
    <>
      <Navbar bg="dark" style={{ height: "50px" }} expand="lg" fixed="bottom">
        <Container fluid style={{display:"flex", flexDirection:"column",position:"relative",paddingTop:"1rem" }} >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "space-between",
              position:"absolute",
              top:"5px"
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <a href="https://www.instagram.com/raffa_snts_/" target="_blank" style={{ color: "#fff", fontSize: "1.2rem", marginLeft:"5px" }}>
                {<SiInstagram />}
              </a>
              <a href="https://www.linkedin.com/in/rafael-santos-17834a20b/" target="_blank" style={{ color: "#fff", fontSize: "1.2rem", margin:"0 .5rem"}}>
                {<SiLinkedin />}
              </a>
              <a href="https://github.com/white-sx" target="_blank" style={{ color: "#fff", fontSize: "1.2rem"  }}>
                {<SiGithub />}
              </a>
            </div>
            <div>
              {" "}
              <p style={{ color: "#fff", fontSize: ".9rem",marginRight:"5px" }}>
                Nimes online &copy; 2023
              </p>
            </div>
          </div>
          <div>
          <p style={{ color: "#ccc", fontSize: ".9rem", fontStyle:"italic" }}>
          Este projeto tem como e SOMENTE o objetivo de ESTUDO. Eu não sou responsável pela criação ou manutenção da api.
              </p>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
