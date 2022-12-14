import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import NavbarH from "./components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlights from "./components/Carousel";
import Home from "./components/Pages/Home";
import Video from "./components/Pages/VideoPage";
import { useState } from "react";

function App() {
  const [video, setVideo] = useState("")
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col lg={12}>
              <NavbarH />
            </Col>
          </Row>
        </Container>
      </header>
      <main style={{ overflow: "hidden" }}>
        <Home setVideoHome={setVideo}/>

      </main>
     { console.log(video)}
    </>
  );
}

export default App;
