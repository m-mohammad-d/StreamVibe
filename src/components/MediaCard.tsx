import React from "react";
import { Link } from "react-router-dom";

interface MediaCardProps {
  poster: string;
  title: string;
  year: string;
  id: number;
  type?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  poster,
  title,
  year,
  id,
  type,
}) => {
  return (
    <div className="bg-dark-10 border-2 border-dark-15 rounded p-4 w-sm">
      <Link to={`/movie/${type}/${id}`} className="block">
        <img
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt={title}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-2 w-full text-lg text-white h-16">{title}</h3>
      </Link>
      <div className="flex justify-between items-center">
        <p className="text-sm text-grey-60 bg-dark-08 px-4 py-2 rounded-lg">
          {year}
        </p>
        <p className="text-sm text-grey-60 bg-dark-08 px-4 py-2 rounded-lg">
          {id}
        </p>
      </div>
    </div>
  );
};

export default MediaCard;
