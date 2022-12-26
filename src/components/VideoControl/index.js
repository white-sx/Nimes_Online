import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function VideoControl(buttonStatus) {
  async function nextEpisode() {
    localStorage.setItem(
      "urlEpisode",
      `https://appanimeplus.tk/play-api.php?episodios=${localStorage.getItem(
        "epAnimId"
      )}&catid=${localStorage.getItem("animeId")}&next`
    );
  }
  async function preventEpisode() {
    localStorage.setItem(
      "urlEpisode",
      `https://appanimeplus.tk/play-api.php?episodios=${localStorage.getItem(
        "epAnimId"
      )}&catid=${localStorage.getItem("animeId")}&previous`
    );
  }

  return (
    <>
      <Container>
        <ButtonGroup
          size="lg"
          className="mb-2"
          style={{ width: "100%", marginTop: "8px" }}
        >
          <Button
            variant="outline-secondary"
            {...buttonStatus}
            onClick={preventEpisode}
          >
            <h3>
              <HiArrowSmLeft />
            </h3>
          </Button>
          <a
            href={"/anime"}
            style={{
              color: "#6c757d",
              textDecoration: "none",
              margin: "0px 4px",
              fontSize: ".9rem",
             
            }}
          >
            <Button variant="outline-secondary" style={{height:"100%", borderRadius:"0px"}}>
              Todos os Episódios
            </Button>
          </a>
          <Button
            variant="outline-secondary"
            {...buttonStatus}
            onClick={nextEpisode}
          >
            <h3>
              <HiArrowSmRight />
            </h3>
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default VideoControl;
