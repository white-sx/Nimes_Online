import React, { useState } from "react";
import useFetch from "../Api/useFetch";

function VideoDescription({ nameId, animTitle }) {
  const { request, data } = useFetch();
  const [animId, setAnimId] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [year, setYear] = useState();

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
        console.log(json);

        setCategory(json[0].category_genres);
        setDescription(json[0].category_description);
        setYear(json[0].ano);
      }

      searchNime();
    }
  }, [setAnimId, data, animId, setCategory, setDescription, setYear]);

  if (data !== null)
    return (
      <div>
        <h2>{animTitle}</h2>
        <h3>{category}</h3> <span>{year}</span>
        <p>{description}</p>
      </div>
    );
}

export default VideoDescription;
