import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavbarH from "./components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "./components/Pages/Home";
import Video from "./components/Pages/VideoPage";
import { useState } from "react";

function App() {
  const [video, setVideo] = useState()

  if(video !== null)
  return (
   
    <>
      <BrowserRouter>
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
          <Routes>
            <Route path="/" element={<Home setVideoHome={setVideo} />} />
            <Route path="video" element={<Video videoId={video} />} />

          </Routes>
          
        </main>
        {console.log(video)}
      </BrowserRouter>
    </>
  );
}

export default App;
