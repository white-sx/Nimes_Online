import React, { useState } from "react";
import useFetch from "./useFetch";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [episodeId, setEpisodeId] = useState(localStorage.getItem("episodeAnimeIdLocal"));
  const [animeId, setAnimeId] = useState();
  const [currentEpisodeTitle, setCurrentEpisodeTitle] = useState();
  const [description, setDescription] = useState();
  const [genres, setGenres] = useState();
  const [animeTitle, setAnimeTitle] = useState();
  const [idImage, setIdImage] = useState();
  const [streamEpisodeVideo, setStreamEpisodeVideo] = useState();

  React.useEffect(() => {
    request("https://appanimeplus.tk/play-api.php?latest", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
