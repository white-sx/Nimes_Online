import Cards from "../../Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Label from "../../Overlay";
import CardsSlide from "../../CardsSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Highlights from "../../Carousel";
import { Col } from "react-bootstrap";

function Home() {
  return (
    <>
     <Container >
          <Row>
            
            <Col>
              <Highlights />
            </Col>
          </Row>
        </Container>
      <Container style={{ marginTop: "1rem" }}>
        <Label text="Recém Atualizados" />
        <Row
          style={{
            borderTop: "3px solid #FAD82D",
            padding: "5px 0px",
            marginTop: ".5rem",
          }}
        >
          <Cards/>
        </Row>
      </Container>
      <Container style={{ marginTop: "1rem" }}>
        <Label text="Populares" />
        <Row
          style={{
            borderTop: "3px solid #FAD82D",
            padding: "5px 0px",
            marginTop: ".5rem",
          }}
        >
          <CardsSlide />
        </Row>
      </Container>
    </>
  );
}

export default Home;
