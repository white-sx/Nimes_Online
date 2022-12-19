import React, { useState } from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import useFetch from "../../Api/useFetch";
import VideoDescription from "../../VideoDescription";
import VideoControl from "../../VideoControl";

function Video() {
  const { request, data } = useFetch();
  const [videoId, setVideoId] = useState();
  const [link, setLink] = useState();
  let animTitleForm;
  let animEp;

  localStorage.setItem("urlEpisode", `https://appanimeplus.tk/play-api.php?episodios=${videoId}`);

  React.useEffect(() => {
    setVideoId(localStorage.getItem("epAnimId"));
    
    if (videoId !== undefined)
      request(localStorage.getItem("urlEpisode"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("epTitle", animEp);



      
    if (data !== null) setLink(data[0].locationsd);
  }, [request, data, videoId, setVideoId, animEp]);

  function setTitleForm() {
    const animTitle = data[0].title;
    animTitleForm = animTitle
      .replace(/[^a-zA-Z 0-9]+/gm, "_")
      .replace(/\s+/g, "_")
      .replace(/.Ep[a-zA-Z]+...../gm, "")
      .toLowerCase();
    animEp = animTitle;
    
  }

  
  if (data !== null || link !== undefined) setTitleForm();
  return (
    <>
      <Container style={{ marginTop: "8rem" }}>
        <ReactPlayer width={"100%"} controls={true} url={link} />

        {/* <ButtonGroup
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
        </ButtonGroup> */}
         <VideoControl/>
      </Container>
      <Container>
        <VideoDescription  animName={animTitleForm} />
      </Container>
    </>
  );
}

export default Video;
