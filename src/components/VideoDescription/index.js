import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetch from "../Api/useFetch";

function VideoDescription({ nameId, epTitle }) {
  const { request, data } = useFetch();
  const [animId, setAnimId] = useState();
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState(null);
  const [year, setYear] = useState(null);
  const [animTitle, setAnimTitle] = useState(null);

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

  if (
    data !== null &&
    category !== null &&
    description !== null &&
    year !== null &&
    animTitle !== null
  )
    return (
      <Container style={{ color: "white" , marginTop:"1rem"}}>
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

        <h2 style={{ fontSize: "1.375rem" }}>{epTitle}</h2>
        <h3 style={{ fontSize: ".875rem", color: "#a0a0a0" }}>{category}</h3>


        
        <div style={{ marginTop: "1rem", width:"100%"}}>
          <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
            {description}
          </p>
        </div>
      </Container>
    );
}

export default VideoDescription;
