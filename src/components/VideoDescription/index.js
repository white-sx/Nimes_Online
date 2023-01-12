import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { GlobalContext } from "../Api/GlobalContext";
import useFetch from "../Api/useFetch";

function VideoDescription({ animName }) {
  const { request, data } = useFetch();
  const Global = React.useContext(GlobalContext);
  const [animeReleaseYear, setAnimeReleaseYear] = useState();

  React.useEffect(() => {
    if (Global.animeId !== null) {
      request(`https://appanimeplus.tk/play-api.php?info=${Global.animeId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (data !== null) Global.setGenres(data[0].category_genres);
      setAnimeReleaseYear(data[0].ano);
      Global.setAnimeTitle(data[0].category_name);
    }
  }, [Global.animeId]);

  if (
    Global.animeTitle === null &&
    Global.genres === null &&
    animeReleaseYear === null
  )
    return null;

  return (
    <Container style={{ color: "white", marginTop: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            marginRight: "5px",
            borderRight: "1px solid #ccc",
            paddingRight: "6px",
          }}
        >
          <span
            style={{
              color: "#FAD82D",
              fontSize: "1rem",
              textTransform: "capitalize",
            }}
          >
            {Global.animeTitle}
          </span>
        </div>
        <div>
          <span style={{ fontSize: ".875rem" }}> {animeReleaseYear}</span>
        </div>
      </div>

      <h2 style={{ fontSize: "1.375rem" }}>{Global.currentEpisodeTitle}</h2>
      <h3 style={{ fontSize: ".875rem", color: "#a0a0a0" }}>
        {" "}
        {Global.genres}
      </h3>
    </Container>
  );
}

export default VideoDescription;
