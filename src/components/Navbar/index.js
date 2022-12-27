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

function NavbarH() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand>
            <a href="/">
              <img style={{ maxWidth: "150px" }} src={Logo} />
            </a>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xll`} />
          <Navbar.Offcanvas
            style={{
              background: `url(${backgroundNav})`,
              color: "#fff",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            id={`offcanvasNavbar-expand-xll`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xll`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xll`}>
                <img style={{ maxWidth: "80px" }} src={LogoNav} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <div
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(6.6px)",
                
                border: "1px solid rgba(0, 0, 0, 0.53)",
                paddingBottom: "1rem",
              }}
            >
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
                  />
                  <Button
                    style={{ border: "none", background: "#FAD82D" }}
                    className="text-white"
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
