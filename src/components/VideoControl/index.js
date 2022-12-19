import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

function VideoControl() {
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
          <Button variant="outline-secondary" onClick={preventEpisode}>
            <h3>
              <HiArrowSmLeft />
            </h3>
          </Button>
          <Button
            variant="outline-secondary"
            style={{
              margin: "0px 4px",
              fontSize: ".9rem",
            }}
          >
            Todos os Episódios
          </Button>
          <Button variant="outline-secondary" onClick={nextEpisode}>
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
