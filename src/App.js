import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import NavbarH from "./components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "./components/Pages/Home";
import Video from "./components/Pages/VideoPage";
import AnimePage from "./components/Pages/AnimePage";
import { GlobalStorage } from "./components/Api/GlobalContext";
import SearchResultPage from "./components/Pages/SearchResultPage";
import Sobre from "./components/Pages/Sobre";

function App() {
  return (
    <>
      <GlobalStorage>
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
              <Route path="/" element={<Home />} />
              <Route path="video" element={<Video />} />
              <Route path="anime" element={<AnimePage />} />
              <Route path="result" element={<SearchResultPage />} />
              <Route path="sobre" element={<Sobre />} />
            </Routes>
          </main>
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
}

export default App;
