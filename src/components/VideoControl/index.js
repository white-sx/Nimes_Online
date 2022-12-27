import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Api/GlobalContext";

function VideoControl(){ 
  const Global = React.useContext(GlobalContext);

  function changeEpisode(data) {
    if (data !== null) {
     
      Global.setEpisodeId(data[0].video_id)
      
       if (data[0].locationsd !== null) {
        Global.setStreamEpisodeVideo(data[0].locationsd)
      // } else {
        Global.setStreamEpisodeVideo(data[0].location)
      // }
    } else {
      console.log("aqui");
    }
  }
  }
  async function nextEpisode() {
    const responseData = await fetch(
      `https://appanimeplus.tk/play-api.php?episodios=${Global.episodeId}&catid=${Global.animeId}&next`
    );
    const jsonData = await responseData.json();

    changeEpisode(jsonData);
  }

  async function preventEpisode() {
    const responseData = await fetch(
      `https://appanimeplus.tk/play-api.php?episodios=${Global.episodeId}&catid=${Global.animeId}&previous`
    );
    const jsonData = await responseData.json();
    changeEpisode(jsonData);
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
          <Link
            to={"/anime"}
            style={{
              color: "#6c757d",
              textDecoration: "none",
              margin: "0px 4px",
              fontSize: ".9rem",
            }}
          >
            <Button
              variant="outline-secondary"
              style={{ height: "100%", borderRadius: "0px" }}
            >
              Todos os Episódios
            </Button>
          </Link>
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

