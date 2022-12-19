import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetch from "../Api/useFetch";

function VideoDescription({ epTitle, animName }) {
  const { request, data, error, loading } = useFetch();
  const [episodeName, setEpisodeName] = useState();

  React.useEffect(() => {
    request(`https://appanimeplus.tk/play-api.php?search=${animName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data !== null) localStorage.setItem("animeId", data[0].id);

    async function description() {
      let response = await fetch(
        `https://appanimeplus.tk/play-api.php?info=${localStorage.getItem(
          "animeId"
        )}`
      );
      let jsonData = await response.json();

      if (jsonData !== null)
        localStorage.setItem("description", jsonData[0].category_description);
      localStorage.setItem("genres", jsonData[0].category_genres);
      localStorage.setItem("name", jsonData[0].category_name);
      localStorage.setItem("year", jsonData[0].ano);
    }

    description();
  }, [request, data, animName]);

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
            {localStorage.getItem("name")}
          </span>
        </div>
        <div>
          <span style={{ fontSize: ".875rem" }}> {localStorage.getItem("year")}</span>
        </div>
      </div>

      <h2 style={{ fontSize: "1.375rem" }}>{epTitle}</h2>
      <h3 style={{ fontSize: ".875rem", color: "#a0a0a0" }}> {localStorage.getItem("genres")}</h3>

      <div style={{ marginTop: "1rem", width: "100%" }}>
        <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>{localStorage.getItem("description")}</p>
      </div>
    </Container>
  );
}

export default VideoDescription;
