import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { GlobalContext } from "../Api/GlobalContext";
import useFetch from "../Api/useFetch";
import SpinnerComponent from "../Spinner";

function VideoDescription({ visibility }) {
  
  const Global = React.useContext(GlobalContext);
  

 
    return (
      <>
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
                  {Global.animeTitle}
                </span>
              </div>
              <div>
                <span style={{ fontSize: ".875rem" }}> {Global.animeReleaseYear}</span>
              </div>
            </div>

            <h2 style={{ fontSize: "1.375rem" }}>
              {Global.currentEpisodeTitle}
            </h2>
            <h3 style={{ fontSize: ".875rem", color: "#a0a0a0" }}>
              {" "}
              {Global.category_genres}
            </h3>
          </Container>
      </>
    );
}

export default VideoDescription;
