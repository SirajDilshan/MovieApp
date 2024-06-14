import { Routes, Route } from "react-router-dom";
import { MovieDeatil, MovieList, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800">
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="movie/:id" element={<MovieDeatil />} />
          <Route path="movies/popular" element={<MovieList />} />
          <Route path="movies/top" element={<MovieList />} />
          <Route path="movies/upcoming" element={<MovieList />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};
