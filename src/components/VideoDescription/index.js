import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetch from "../Api/useFetch";

function VideoDescription({ nameId, epTitle }) {
  const { request, data } = useFetch();
  const [animId, setAnimId] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [year, setYear] = useState();
  const [animTitle, setAnimTitle] = useState();

  React.useEffect(() => {
    if (nameId !== undefined)
      request(`https://appanimeplus.tk/play-api.php?search=${nameId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

    // searchNime();
  }, [request, data, nameId]);

  React.useEffect(() => {
    if (data !== null) {
      setAnimId(data[0].id);

      async function searchNime() {
        let response = await fetch(
          `https://appanimeplus.tk/play-api.php?info=${animId}`
        );
        let json = await response.json();

        setCategory(json[0].category_genres);
        setDescription(json[0].category_description);
        setYear(json[0].ano);
        setAnimTitle(json[0].category_name);
      }

      searchNime();
    }
  }, [setAnimId, data, animId, setCategory, setDescription, setYear]);

  if (data !== null)
    return (
      <Container style={{ color: "white" }}>
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
              {animTitle}
            </span>
          </div>
          <div>
            <span style={{ fontSize: ".875rem" }}>{year}</span>
          </div>
        </div>

        <h2>{epTitle}</h2>
        <h3>{category}</h3>
        <p>{description}</p>
      </Container>
    );
}

export default VideoDescription;
