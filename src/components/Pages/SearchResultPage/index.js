import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Container, Ratio, Row } from "react-bootstrap";

import { GlobalContext } from "../../Api/GlobalContext";
import useFetch from "../../Api/useFetch";
import SpinnerComponent from "../../Spinner";

function SearchResultPage() {
  const Global = React.useContext(GlobalContext);
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    request(
      `https://appanimeplus.tk/play-api.php?search=${Global.animeNameFormattedSearch ?Global.animeNameFormattedSearch:localStorage.getItem("animeSearchName")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
   
  }, [Global]);
  
  if (data === null && loading === null) return null;
 
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
            {loading ? (
              <SpinnerComponent />
            ) : (
              data.map((data, index) => (
                <Col key={index} xs={6} md={2}>
                  <a
                    href={"/anime"}
                    style={{ textDecoration: "none", color: "#f2f2f2" }}
                    onClick={function (e) {
                      Global.setAnimeId(data.id);
                      localStorage.setItem("localAnimeId", data.id);
                      Global.setAnimeTitle(data.category_name);
                      localStorage.setItem("LocalAnimeTitle", data.category_name);
                      Global.setIdImage(data.category_image);
                      localStorage.setItem("ImageLocalId", data.category_image);
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
                        <Card.Title
                          style={{ fontSize: ".9rem", width: "100%" }}
                        >
                          {data.category_name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              ))
            )} 
          </Row>
        </Container>
      </>
    );
}

export default SearchResultPage;
