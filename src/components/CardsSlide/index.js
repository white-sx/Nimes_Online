import React from "react";
import useFetch from "../Api/useFetch";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Ratio } from "react-bootstrap";

import Slider from "react-slick";
import { GlobalContext } from "../Api/GlobalContext";

function CardsSlide() {
  const { request, data, error, loading } = useFetch();
  const Global = React.useContext(GlobalContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  React.useEffect(() => {
    request("https://appanimeplus.tk/play-api.php?populares", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [request, data]);

  if (data !== null)
    return (
      <>
        <Slider {...settings} style={{ marginLeft: ".3.5rem" }}>
          {data.map((data, index) => (
            <Col key={index} xs={6} md={2}>
              <a
                href={"/anime"}
                style={{ textDecoration: "none", color: "#f2f2f2" }}
                onClick={function (e) {
                  localStorage.setItem("animeId", e.target.id);
                  Global.setAnimeId(e.target.id);
                  localStorage.setItem("name", data.category_name);
                  localStorage.setItem(
                    "ImageUrl",
                    e.target.getAttribute("src")
                  );
                }}
              >
                <Card style={{ width: "90%" }} bg="dark" variant="dark">
                  <Ratio aspectRatio="1x1">
                    <Card.Img
                      id={data.id}
                      src={`https://cdn.appanimeplus.tk/img/${data.category_image}`}
                    />
                  </Ratio>
                  <Card.Body>
                    <Card.Title style={{ fontSize: ".9rem" }}>
                      {data.category_name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Slider>
      </>
    );
}

export default CardsSlide;
