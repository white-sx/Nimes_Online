import React from "react";
import { Card, Col, Container, Ratio, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Api/GlobalContext";
import useFetch from "../../Api/useFetch";
import Label from "../../Overlay";
import SpinnerComponent from "../../Spinner";
import Pagination from "react-bootstrap/Pagination";

function Category() {
  const Global = React.useContext(GlobalContext);
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    request(`https://appanimeplus.tk/play-api.php?categoria=${Global.category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [Global.category]);




  if (data === null && loading === null) return null;
  return (
    <Container style={{ marginTop: "8rem" }}>
      <Label text={`${Global.category}s`} />
      <Row
        style={{
          borderTop: "3px solid #FAD82D",
          padding: "5px 0px",
          marginTop: ".5rem",
        }}
      >
        {loading ? (
          <SpinnerComponent />
        ) : (
          data.map((data, index) => (
            <Col key={index} xs={6} md={2}>
              <Link
                to="/anime"
                style={{ textDecoration: "none", color: "#f2f2f2" }}
                onClick={function () {
                  Global.setAnimeId(data.id);
                  localStorage.setItem("localEpAnimeId", data.id);
                  Global.setIdImage(data.category_image);
                  localStorage.setItem("ImageLocalId", data.category_image);
                  Global.setAnimeTitle(data.category_name);
                  localStorage.setItem("LocalAnimeTitle", data.category_name);
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
          ))
        )}
      </Row>
    </Container>
  );
}

export default Category;
