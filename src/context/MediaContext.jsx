import { createContext, useContext, useState } from "react";
import axios from "axios";

const MediaContext = createContext();

export function MediaProvider({ children }) {
  const [mediaList, setMediaList] = useState([]);

  function searchMedia(query) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const language = "it-IT";

    const movieURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${query}`;

    const tvURL = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=${language}&query=${query}`;

    Promise.all([axios.get(movieURL), axios.get(tvURL)])
      .then(([moviesRes, tvRes]) => {
        const movies = moviesRes.data.results.map((item) => ({
          id: item.id,
          title: item.title,
          originalTitle: item.original_title,
          language: item.original_language,
          vote: item.vote_average,
          type: "movie",
        }));

        const tvShows = tvRes.data.results.map((item) => ({
          id: item.id,
          title: item.name,
          originalTitle: item.original_name,
          language: item.original_language,
          vote: item.vote_average,
          type: "tv",
        }));

        setMediaList([...movies, ...tvShows]);
      })
      .catch((err) => {
        console.error("Errore fetch media:", err);
      });
  }

  return (
    <MediaContext.Provider value={{ mediaList, searchMedia }}>
      {children}
    </MediaContext.Provider>
  );
}

export { MediaContext };

export function useMedia() {
  return useContext(MediaContext);
}
