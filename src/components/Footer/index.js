import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import styles from './Custom.module.css'
function Footer() {
  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="bottom">
        <Container fluid style={{display:"flex", flexDirection:"column",position:"relative"}} >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "15px",
              justifyContent: "space-between",
              paddingBottom:"1.5rem"
            }}
          >
            <div
              style={{
                display: "flex",
               alignItems:"center",
               paddingTop:"10px"
              }}
            >
              <a href="https://www.instagram.com/raffa_snts_/" target="_blank" className={styles.logosSocial} style={{ marginLeft:"5px" }}>
                {<SiInstagram />}
              </a>
              <a href="https://www.linkedin.com/in/rafael-santos-17834a20b/" target="_blank" className={styles.logosSocial} style={{ margin:"0 .5rem"}}>
                {<SiLinkedin />}
              </a>
              <a href="https://github.com/white-sx" target="_blank" className={styles.logosSocial} >
                {<SiGithub />}
              </a>
            </div>
            <div>
              {" "}
              <p style={{ color: "#ccc", fontSize: ".9rem",marginRight:"5px" }}>
                Nimes online &copy; 2023
              </p>
            </div>
          </div>
          <div className={styles.footerText}>
          <p style={{  color: "#ccc", fontSize: ".8rem", fontStyle:"italic" }}>
          Este projeto tem como e SOMENTE o objetivo de ESTUDO.
              </p>
          </div>
        </Container>
       
      </Navbar>
    </>
  );
}

export default Footer;
