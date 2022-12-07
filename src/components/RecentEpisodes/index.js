import React from "react";
import useFetch from "../Api/useFetch";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Recents() {
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    request("https://gogoanime.consumet.org/recent-release", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [request, data]);

  if (data !== null)
    return (
      <>
        {data.map((data, index) => (
          <Col key={index} xs={6} md={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img src={data.animeImg} />
              <Card.Body>
                <Card.Title>{data.animeTitle}</Card.Title>
              </Card.Body>
              <Button variant="primary" href={data.episodeUrl}>Go somewhere</Button>
            </Card>
          </Col>
        ))}
      </>
    );
}

export default Recents;
