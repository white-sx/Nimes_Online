import React, { useState } from "react";
import useFetch from "./useFetch";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [episodeId, setEpisodeId] = useState();
  const [animeId, setAnimeId] = useState();
  const [currentEpisodeTitle, setCurrentEpisodeTitle] = useState();
  const [description, setDescription] = useState();
  const [genres, setGenres] = useState();
  const [animeTitle, setAnimeTitle] = useState();
  const [idImage, setIdImage] = useState();
  const [streamEpisodeVideo, setStreamEpisodeVideo] = useState();
  const [animeReleaseYear, setAnimeReleaseYear] = useState();
  const [animeName, setAnimeName] = useState();
  React.useEffect(() => {
    request("https://appanimeplus.tk/play-api.php?latest", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  React.useEffect(() => {
    request(`https://appanimeplus.tk/play-api.php?search=${animeName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data)
    if (data !== null) {
      localStorage.setItem("epAnimId", data[0].id);
      setAnimeId(data[0].id);
    }
  }, [animeName]);
  return (
    <GlobalContext.Provider
      value={{
        data,
        episodeId,
        setEpisodeId,
        currentEpisodeTitle,
        setCurrentEpisodeTitle,
        description,
        setDescription,
        genres,
        setGenres,
        animeTitle,
        setAnimeTitle,
        animeId,
        setAnimeId,
        idImage,
        setIdImage,
        streamEpisodeVideo,
        setStreamEpisodeVideo,
        animeReleaseYear,
        setAnimeReleaseYear,
        setAnimeName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
