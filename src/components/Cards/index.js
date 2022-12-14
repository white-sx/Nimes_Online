import React, { useState } from "react";
import useFetch from "../Api/useFetch";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Ratio } from "react-bootstrap";

function Cards({setVideoCard}) {
  const { request, data, error, loading } = useFetch();
  

  React.useEffect(() => {
    request("https://appanimeplus.tk/play-api.php?latest", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(data)
  }, [request, data]);

  function openVideo(){
 
  }
  if (data !== null)
 
    return (
      <>
        {data.map((data, index) => (
          <Col key={index} xs={6} md={2}>
            <a href={"#"} style={{textDecoration: "none", color:"#f2f2f2"}}  onClick={e => setVideoCard(e.target.id)}>
              <Card style={{ width: "100%", height:"95%" }} bg="dark" variant="dark" >
                <Ratio aspectRatio="1x1">
                  <Card.Img id={data.video_id} onClick={e => openVideo()} src={`https://cdn.appanimeplus.tk/img/${data.category_image}`} />
                </Ratio>
                <Card.Body>
                  <Card.Title style={{ fontSize: ".9rem", width:"100%" }}>
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
