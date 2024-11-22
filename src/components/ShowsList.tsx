import React from "react";
import { useGetShowsByGenreQuery } from "../services/moviesApi";
import MediaCard from "./MediaCard";

interface ShowsListProps {
  genre: string;
}

const ShowsList: React.FC<ShowsListProps> = ({ genre }) => {
  const { data, error, isLoading } = useGetShowsByGenreQuery(genre);

  if (isLoading) return <p>Loading {genre} shows...</p>;
  if (error) return <p>Error fetching {genre} shows</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-white">{genre} Shows</h2>
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
    </div>
  );
};

export default ShowsList;
