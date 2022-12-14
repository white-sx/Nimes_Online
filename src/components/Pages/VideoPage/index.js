import React from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import useFetch from "../../Api/useFetch";

function Video({videoId}) {
  const { request, data } = useFetch();

  React.useEffect(() => {
    request(`https://appanimeplus.tk/play-api.php?episodios=${videoId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
     
  }, [request, data]);
 
  if (data !== null)
  return (
    <>
      <Container style={{ marginTop: "8rem" }}>
        <ReactPlayer width={"100%"} controls={true} url={data[0].location}/>
      </Container>
    </>
  );
}

export default Video;
