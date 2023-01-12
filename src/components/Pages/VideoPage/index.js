import React, { useState } from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import useFetch from "../../Api/useFetch";
import VideoDescription from "../../VideoDescription";
import VideoControl from "../../VideoControl";
import { GlobalContext } from "../../Api/GlobalContext";

function Video() {
  const { request, data } = useFetch();
  const [link, setLink] = useState();
  let animTitleForm;
  const Global = React.useContext(GlobalContext);

  React.useEffect(() => {
    if (Global.episodeId === null) return null;
    request(
      `https://appanimeplus.tk/play-api.php?episodios=${Global.episodeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data !== null) {
      setLink(data[0].location);
      Global.setCurrentEpisodeTitle(data[0].title);
    }
  }, [data, setLink]);

  async function setTitleForm() {
    if (data !== null) {
      const animTitle = data[0].title;
      animTitleForm = animTitle
        .replace(/[^a-zA-Z 0-9]+/gm, "_")
        .replace(/\s+/g, "_")
        .replace(/.Ep[a-zA-Z]+...../gm, "")
        .toLowerCase();
    }
    
    let response = await fetch(
      `https://appanimeplus.tk/play-api.php?search=${animTitleForm}`
    );
    let jsonData = await response.json();
    
    if (jsonData !== null) {
      Global.setAnimeId(jsonData[0].id);
      localStorage.setItem("localAnimId", jsonData[0].id);
    }
  }
  setTitleForm();
  if (data === null || link === undefined) return null;
  return (
    <>
      <Container style={{ marginTop: "8rem" }}>
        <ReactPlayer width={"100%"} controls={true} url={link} />
        <VideoControl />
      </Container>
      <Container>
        <VideoDescription animName={animTitleForm} />
      </Container>
    </>
  );
}

export default Video;
