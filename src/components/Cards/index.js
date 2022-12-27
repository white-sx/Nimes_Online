import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Ratio } from "react-bootstrap";
import { GlobalContext } from "../Api/GlobalContext";
import { Link } from "react-router-dom";

function Cards() {
  const Global = React.useContext(GlobalContext);

  if (Global.data === null) return null;

  return (
    <>
      {Global.data.map((data, index) => (
        <Col key={index} xs={6} md={2}>
          <Link
            to="video"
            style={{ textDecoration: "none", color: "#f2f2f2" }}
            onClick={function (e) {
              localStorage.setItem("ImageUrl", e.target.getAttribute("src"));
              Global.setEpisodeId(data.video_id);
              Global.setIdImage(data.category_image);
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
                  {data.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </>
  );
}

export default Cards;
