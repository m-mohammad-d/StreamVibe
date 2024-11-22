import React from "react";
import { useGetMoviesByGenreQuery } from "../services/moviesApi";
import MediaCard from "./MediaCard";
import Loader from "./Loader";

interface MoviesListProps {
  genre: string;
}

const MoviesList: React.FC<MoviesListProps> = ({ genre }) => {
  const { data, error, isLoading } = useGetMoviesByGenreQuery(genre);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-white">{genre} Movies</h2>
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : error ? (
        <p>Error fetching {genre} movies</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.Search?.slice(0, 4).map((movie: any) => (
            <MediaCard
              key={movie.imdbID}
              id={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
