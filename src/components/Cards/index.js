import React, { useState } from "react";
import useFetch from "../Api/useFetch";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Ratio } from "react-bootstrap";


function Cards() {
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    request("https://appanimeplus.tk/play-api.php?latest", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
  }, []);

  if (data !== null)
    return (
      <>
        {data.map((data, index) => (
          <Col key={index} xs={6} md={2}>
            <a
              href="video"
              style={{ textDecoration: "none", color: "#f2f2f2" }}
              onClick={function (e) {
                localStorage.setItem("epAnimId", e.target.id);
                localStorage.setItem(
                  "urlEpisode",
                  `https://appanimeplus.tk/play-api.php?episodios=${localStorage.getItem("epAnimId")}`
                );
                localStorage.setItem("ImageUrl",e.target.getAttribute('src'))
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
                    id={data.video_id}
                    src={`https://cdn.appanimeplus.tk/img/${data.category_image}`}
                  />
                </Ratio>
                <Card.Body>
                  <Card.Title style={{ fontSize: ".9rem", width: "100%" }}>
                    {data.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </>
    );
}

export default Cards;
