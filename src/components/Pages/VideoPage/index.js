import React from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import useFetch from "../../Api/useFetch";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import VideoDescription from "../../VideoDescription";

function Video({ videoId }) {
  const { request, data } = useFetch();
  let animTitleForm;
  let animEp;
  let link;

  React.useEffect(() => {
    request(`https://appanimeplus.tk/play-api.php?episodios=${videoId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [request, data, videoId]);

  function setTitleForm() {
    const animTitle = data[0].title;
    const linkEp = data[0].location;
    animTitleForm = animTitle.replace(/[^a-zA-Z0-9]+/g,"_").replace(/.Ep[a-zA-Z]+.../g,"").toLowerCase();
    link = linkEp;
    animEp = animTitle
    
  }

  if (data !== null || link !== undefined)
  setTitleForm()
  return (
    <>
      <Container style={{ marginTop: "8rem" }}>
        
       <ReactPlayer width={"100%"} controls={true} url={link}/>  
       
        <ButtonGroup
          size="lg"
          className="mb-2"
          style={{ width: "100%", marginTop: "8px" }}
        >
          <Button style={{ backgroundColor: "transparent", border: "1px solid #ccc" }}>
            <h3>
              <HiArrowSmLeft />
            </h3>
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #ccc",
              margin: "0px 4px",
              fontSize: ".9rem",
            }}
          >
            Todos os Episódios
          </Button>
          <Button style={{ backgroundColor: "transparent", border: "1px solid #ccc" }}>
            <h3>
              <HiArrowSmRight />
            </h3>
          </Button>
        </ButtonGroup>
      </Container>
      <Container>
        <VideoDescription nameId={animTitleForm} epTitle={animEp}/>
      </Container>
    </>
  );
}

export default Video;
