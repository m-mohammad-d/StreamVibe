import React from "react";
import { useGetShowsByGenreQuery } from "../services/moviesApi";
import MediaCard from "./MediaCard";
import Loader from "./Loader";

interface ShowsListProps {
  genre: string;
}

const ShowsList: React.FC<ShowsListProps> = ({ genre }) => {
  const { data, error, isLoading } = useGetShowsByGenreQuery(genre);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-white">{genre} Shows</h2>
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : error ? (
        <p>Error fetching {genre} shows</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {data?.Search?.slice(0, 4).map((show: any) => (
            <MediaCard
              key={show.imdbID}
              id={show.imdbID}
              poster={show.Poster}
              title={show.Title}
              year={show.Year}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowsList;
