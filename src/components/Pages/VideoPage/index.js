import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import useFetch from "../../Api/useFetch";
import VideoDescription from "../../VideoDescription";
import VideoControl from "../../VideoControl";

function Video() {
  const { request, data } = useFetch();
  const [link, setLink] = useState();
  const [dataUrl, setDataUrl] = useState(localStorage.getItem("urlEpisode"));
  let animTitleForm;

  React.useEffect(() => {
    setDataUrl(localStorage.getItem("urlEpisode"));
    request(dataUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data !== null) {
      localStorage.setItem("epTitle", data[0].title);
      setLink(data[0].locationsd);
      localStorage.setItem("epAnimId", data[0].video_id);
      localStorage.setItem("AnimeNameForm",animTitleForm )
    }
  }, [data, setDataUrl, dataUrl, setLink]);

  function setTitleForm() {
    if (data !== null) {
      const animTitle = data[0].title;
      animTitleForm = animTitle
        .replace(/[^a-zA-Z 0-9]+/gm, "_")
        .replace(/\s+/g, "_")
        .replace(/.Ep[a-zA-Z]+...../gm, "")
        .toLowerCase();
    }
  }

  if (data !== null || link !== undefined) setTitleForm();
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
