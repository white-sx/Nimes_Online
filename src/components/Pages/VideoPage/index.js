import React from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import useFetch from "../../Api/useFetch";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

function Video({ videoId }) {
  const { request, data } = useFetch();

  React.useEffect(() => {
    request(`https://appanimeplus.tk/play-api.php?episodios=${videoId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [request, data, videoId]);



  
  if (data !== null)
    return (
      <>
        <Container style={{ marginTop: "8rem" }}>
          <ReactPlayer width={"100%"} controls={true} url={data[0].location} />
          <ButtonGroup
            size="lg"
            className="mb-2"
            style={{ width: "100%", marginTop: "8px" }}
          >
            <Button style={{ backgroundColor: "#D98723", border: "none" }}>
              <h3>
                <HiArrowSmLeft />
              </h3>
            </Button>
            <Button
              style={{
                backgroundColor: "#D98723",
                border: "none",
                margin: "0px 4px",
              }}
            >
              <h3>
                <HiMenu/>
              </h3>
            </Button>
            <Button style={{ backgroundColor: "#D98723", border: "none" }}>
              <h3>
                <HiArrowSmRight />
              </h3>
            </Button>
          </ButtonGroup>
        </Container>
      </>
    );
}

export default Video;
