import React, { useState } from "react";
import useFetch from "./useFetch";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const { request, data,setData, error, loading } = useFetch();
  const [episodeId, setEpisodeId] = useState(
    localStorage.getItem("episodeAnimeIdLocal")
  );
  const [animeId, setAnimeId] = useState(
    localStorage.getItem("localEpAnimeId")
  );
  const [currentEpisodeTitle, setCurrentEpisodeTitle] = useState();
  const [description, setDescription] = useState(
    localStorage.getItem("LocalDescription")
  );
  const [genres, setGenres] = useState(localStorage.getItem("LocalGenres"));
  const [animeTitle, setAnimeTitle] = useState(
    localStorage.getItem("LocalAnimeTitle")
  );
  const [idImage, setIdImage] = useState(localStorage.getItem("ImageLocalId"));
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
        setData,
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
