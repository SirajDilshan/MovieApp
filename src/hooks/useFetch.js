import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=c681386d8219aec33c4e5851223421e2`;

  useEffect(() => {
    async function fetchMovies() {
      const respose = await fetch(url);
      const json = await respose.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
