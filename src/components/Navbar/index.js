import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/img/logo.png";
import LogoNav from "../../assets/img/logoNav.png";
import backgroundNav from "../../assets/img/backgroundNav.png";
import Icon from "../../assets/img/search.svg";
import { Link } from "react-router-dom";
import styles from "./Custom.module.css";
import { GlobalContext } from "../Api/GlobalContext";

function NavbarH() {
  const Global = React.useContext(GlobalContext);
  const [searchAnime, setSearchAnime] = React.useState("");

  

  async function onSearchAnime() {
    const formAnimeName = searchAnime
      .replace(/[^a-zA-Z 0-9]+/gm, "_")
      .replace(/\s+/g, "_")
      .replace(/.Ep[a-zA-Z]+...../gm, "")
      .toLowerCase();
    const response = await fetch(
      `https://appanimeplus.tk/play-api.php?search=${formAnimeName}`
    );
    const data = await response.json();
    console.log(data)
  }
  
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img style={{ maxWidth: "150px" }} src={Logo} />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xll`} />
          <Navbar.Offcanvas
            style={{
              background: `url(${backgroundNav})`,
            }}
            className={styles.backNav}
            id={`offcanvasNavbar-expand-xll`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xll`}
            placement="end"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xll`}>
                <img style={{ maxWidth: "80px" }} src={LogoNav} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <div className={styles.glassEffectBack}>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Sobre</Nav.Link>
                  <NavDropdown
                    title="Categorias"
                    id={`offcanvasNavbarDropdown-expand-xll`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    value={searchAnime}
                    onChange={(e) => {
                      setSearchAnime(e.target.value);
                    }}
                  />
                  <Button
                    style={{ border: "none", background: "#FAD82D" }}
                    className="text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      onSearchAnime();
                    }}
                  >
                    <img src={Icon} />
                  </Button>
                </Form>
              </Offcanvas.Body>
            </div>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarH;
