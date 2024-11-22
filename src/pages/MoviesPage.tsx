import React from "react";
import VideoTrailers from "../components/VideoTrailers";
import MoviesList from "../components/MoviesList";
import ShowsList from "../components/ShowsList";

function MoviesPage() {
  const movieGenres = ["Action", "Comedy", "Drama", "Horror"];
  const showGenres = ["Action", "Comedy", "Drama", "Horror"];

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8">
      <VideoTrailers />
      <h1 className="text-3xl font-bold mt-8 text-white">Movies</h1>
      {movieGenres.map((genre) => (
        <MoviesList key={genre} genre={genre} />
      ))}
      <h1 className="text-3xl font-bold mt-12 text-white">Shows</h1>
      {showGenres.map((genre) => (
        <ShowsList key={genre} genre={genre} />
      ))}
    </div>
  );
}

export default MoviesPage;
