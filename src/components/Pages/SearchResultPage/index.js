import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Container, Ratio, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import { GlobalContext } from "../../Api/GlobalContext";
import useFetch from "../../Api/useFetch";

function SearchResultPage() {
  const Global = React.useContext(GlobalContext);
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    request(
      `https://appanimeplus.tk/play-api.php?search=${Global.animeNameFormattedSearch}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
   
  }, [Global.animeNameFormattedSearch]);
  if (data !== null) 
  return (
    <>
      <Container style={{ marginTop: "7rem" }}>
        <Row>
          <Col>
            <h1 style={{ color: "#FAD82D" }}>Resultados para a busca:</h1>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "3rem" }}>
        <Row>
          {data.map((data, index) => (
            <Col key={index} xs={6} md={2}>
              <Link
                to="video"
                style={{ textDecoration: "none", color: "#f2f2f2" }}
                onClick={function (e) {
                  localStorage.setItem("ImageLocalId", data.category_image);
                  Global.setEpisodeId(data.video_id);
                  Global.setIdImage(data.category_image);
                  localStorage.setItem("episodeAnimeIdLocal", data.video_id);
                }}
              >
                <Card
                  style={{
                    width: "100%",
                    height: "95%",
                    backgroundColor: "#1f221f",
                  }}
                  variant="dark"
                >
                  <Ratio aspectRatio="1x1">
                    <Card.Img
                      src={`https://cdn.appanimeplus.tk/img/${data.category_image}`}
                    />
                  </Ratio>
                  <Card.Body>
                    <Card.Title style={{ fontSize: ".9rem", width: "100%" }}>
                      {data.category_name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default SearchResultPage;
