import { Col, Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function SpinnerComponent() {
  return (
    <>
      <Container
        style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}
      >
        <Row>
          <Col xs={6} md={2}>
            <Spinner animation="border" variant="warning" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SpinnerComponent;
