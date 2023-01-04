import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { GlobalContext } from "../Api/GlobalContext";
import useFetch from "../Api/useFetch";

function VideoDescription({ animName }) {
  const { request, data } = useFetch();
  const Global = React.useContext(GlobalContext);
  const [animeReleaseYear, setAnimeReleaseYear] = useState();

  React.useEffect(() => {
    request(`https://appanimeplus.tk/play-api.php?search=${animName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data !== null) {
      Global.setAnimeId(data[0].id);
      localStorage.setItem("localEpAnimId", data[0].id);
    }

    async function description() {
      let response = await fetch(
        `https://appanimeplus.tk/play-api.php?info=${Global.animeId}`
      );
      let jsonData = await response.json();

      if (jsonData !== null) {
        setAnimeReleaseYear(jsonData[0].ano);
        Global.setDescription(jsonData[0].category_description);
        localStorage.setItem(
          "LocalDescription",
          jsonData[0].category_description
        );

        Global.setGenres(jsonData[0].category_genres);
        localStorage.setItem("LocalGenres", jsonData[0].category_genres);

        Global.setAnimeTitle(jsonData[0].category_name);
        localStorage.setItem("LocalAnimeTitle", jsonData[0].category_name);
      }
    }

    description();

    if (
      Global.currentEpisodeTitle === null &&
      Global.description === null &&
      Global.genres === null
    )
      return null;
  }, [ animName]);

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
