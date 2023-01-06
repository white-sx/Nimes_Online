import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Api/GlobalContext";
import useFetch from "../../Api/useFetch";
import SpinnerComponent from "../../Spinner";

function AnimePage() {
  const { request, data, loading, error } = useFetch();
  const Global = React.useContext(GlobalContext);

  React.useEffect(() => {
    request(`https://appanimeplus.tk/play-api.php?cat_id=${Global.animeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [Global.animeId]);

  if (
    Global.genres === null &&
    Global.description === null &&
    data === null &&
    loading === null
  )
    return null;

  return (
    <>
      <Container
        style={{
          marginTop: "8rem",
          color: "#fff",
          borderBottom: "3px solid #FAD82D",
          paddingBottom: "1rem",
        }}
      >
        <Row>
          <Col md="auto">
            <img src={`https://cdn.appanimeplus.tk/img/${Global.idImage}`} />
          </Col>
          <Col style={{ marginTop: ".9rem" }}>
            <h1 style={{ color: "#FAD82D" }}>{Global.animeTitle}</h1>
            <span
              style={{
                fontSize: " 0.875rem",
                color: " rgb(160, 160, 160)",
                display: "block",
                marginTop: "-10px",
              }}
            >
              {Global.genres}
            </span>
            <div
              style={{
                marginTop: "1rem",
                borderTop: "1px solid  rgb(76 76 76)",
                padding: "5px",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              }}
            >
              <p>{Global.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        {loading ? (
          <SpinnerComponent />
        ) : (
          data.map((item) => {
            return (
              <Link
                to={"/video"}
                style={{
                  marginTop: "1rem",
                  display: "block",
                  textDecoration: "none",
                }}
                key={item.video_id}
                onClick={function (e) {
                  Global.setEpisodeId(item.video_id);
                }}
              >
                <Card border="warning" bg="dark" text="light">
                  <Card.Body>
                    <h4 style={{ fontSize: "1.2rem" }}>{item.title}</h4>
                  </Card.Body>
                </Card>
              </Link>
            );
          })
        )}
      </Container>
    </>
  );
}

export default AnimePage;
