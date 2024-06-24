import { Routes, Route } from "react-router-dom";
import { MovieDeatil, MovieList, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800">
      <main>
        <Routes>
          <Route path="/" element={<MovieList  apiPath="movie/now_playing" title="Home" />} />
          <Route path="movie/:id" element={<MovieDeatil />} />
          <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
          <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top_rated" />} />
          <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upoming" />} />
          <Route path="search" element={<Search  apiPath="search/movie" />} />
          <Route path="*" element={<PageNotFound  />} />
        </Routes>
      </main>
    </div>
  );
};
