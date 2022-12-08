import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import Container from "react-bootstrap/Container";
import NavbarH from "./components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlights from "./components/Carousel";
import Label from "./components/Overlay";
import CardsSlide from "./components/CardsSlide";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
    <header>
    <Container  >
        <Row>
          <Col lg={12}>
            <NavbarH />
          </Col>
          <Col>
            <Highlights />
          </Col>
        </Row>
      </Container>
    </header>
     <main style={{overflow:"hidden"}}>
     <Container  style={{ marginTop: "1rem" }}>
        <Label text="Lançamentos"/>
        <Row style={{borderTop:"1px solid #c6c6c6", padding:"5px 0px",marginTop: ".5rem"}}>
          <Cards />
        </Row>
      </Container> 
      <Container style={{ marginTop: "1rem"}} >
      <Label text="Populares"/>
        <Row style={{borderTop:"1px solid #c6c6c6", padding:"5px 0px",marginTop: ".5rem"}}>
        <CardsSlide/>
        </Row>
      </Container>
      </main> 
      
    </>
  );
}

export default App;
