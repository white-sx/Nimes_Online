import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useFetch from "../../Api/useFetch";

function AnimePage() {
  const { request, data } = useFetch();
  const [animId, setAnimeId] = useState();

  React.useEffect(() => {
    setAnimeId(localStorage.getItem("animeId"));
    request(`https://appanimeplus.tk/play-api.php?cat_id=${animId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    
  }, [animId, setAnimeId, data]);

  if (data !== null)
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
              <img src={localStorage.getItem("ImageUrl")} />
            </Col>
            <Col style={{ marginLeft: "3rem" }}>
              <h1 style={{ color: "#FAD82D" }}>
                {localStorage.getItem("name")}
              </h1>
              <span
                style={{
                  fontSize: " 0.875rem",
                  color: " rgb(160, 160, 160)",
                  display: "block",
                  marginTop: "-10px",
                }}
              >
                {localStorage.getItem("genres")}
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
                <p>{localStorage.getItem("description")}</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
         
        </Container>
      </>
    );
}

export default AnimePage;
