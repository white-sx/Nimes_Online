import React, { useState } from "react";
import useFetch from "./useFetch";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const { request, data, error, loading } = useFetch();
  const [episodeId, setEpisodeId] = useState(localStorage.getItem("episodeAnimeIdLocal"));
  const [animeId, setAnimeId] = useState(localStorage.getItem("localAnimeId"));
  const [currentEpisodeTitle, setCurrentEpisodeTitle] = useState(localStorage.getItem("localAnimeId"));
  const [description, setDescription] = useState(localStorage.getItem("LocalDescription"));
  const [genres, setGenres] = useState();
  const [animeTitle, setAnimeTitle] = useState();
  const [idImage, setIdImage] = useState(localStorage.getItem("ImageLocalId"));
  const [streamEpisodeVideo, setStreamEpisodeVideo] = useState();
  const [animeNameFormattedSearch, setAnimeNameFormattedSearch] = useState();
  const [category, setCategory] = useState();

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
        error,
        loading,
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
        animeNameFormattedSearch,
        setAnimeNameFormattedSearch,
        category,
        setCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
