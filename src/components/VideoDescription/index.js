import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { GlobalContext } from "../Api/GlobalContext";
import useFetch from "../Api/useFetch";
import SpinnerComponent from "../Spinner";

function VideoDescription({ visibility, animName }) {
  const { request, data, loading } = useFetch();
  const Global = React.useContext(GlobalContext);
  const [animeReleaseYear, setAnimeReleaseYear] = useState();
  const [localData, setLocalData] = useState();

  React.useEffect(() => {
    if (Global.animeId !== null) {
      request(`https://appanimeplus.tk/play-api.php?info=${Global.animeId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (data !== null) setLocalData(...data);

      setInfos();
    }
  }, [Global.animeId]);

  function setInfos() {
    if (localData !== undefined) {
      Global.setDescription(localData.category_description);
      Global.setGenres(localData.category_genres);
      setAnimeReleaseYear(localData.ano);
      Global.setAnimeTitle(localData.category_name);
      localStorage.setItem("LocalDescription", localData.category_description);
      localStorage.setItem("LocalGenres", localData.category_genres);
      localStorage.setItem("LocalAnimeTitle", localData.category_name);
    }
  }

  if (data !== null)
    return (
      <>
        {loading ? (
          <SpinnerComponent />
        ) : (
          <Container
            style={{
              color: "white",
              marginTop: "1rem",
              display: `${visibility}`,
            }}
          >
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
                  {data[0].category_name}
                </span>
              </div>
              <div>
                <span style={{ fontSize: ".875rem" }}> {animeReleaseYear}</span>
              </div>
            </div>

            <h2 style={{ fontSize: "1.375rem" }}>
              {Global.currentEpisodeTitle}
            </h2>
            <h3 style={{ fontSize: ".875rem", color: "#a0a0a0" }}>
              {" "}
              {data[0].category_genres}
            </h3>
          </Container>
        )}
      </>
    );
}

export default VideoDescription;
