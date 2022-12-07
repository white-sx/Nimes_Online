import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import NavbarH from "./components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlights from "./components/Carousel";
import Label from "./components/Overlay";

function App() {
  return (
    <>
      <Container fluid >
        <Row>
          <Col lg={12}>
            <NavbarH />
          </Col>
          <Col>
            <Highlights />
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ marginTop: "1rem" }}>
        <Label />
        <Row style={{borderTop:"1px solid #c6c6c6", paddingTop:"5px",marginTop: ".5rem"}}>
          <Cards />
        </Row>
      </Container>
    </>
  );
}

export default App;
