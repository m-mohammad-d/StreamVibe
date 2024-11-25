import { useParams } from "react-router-dom";
import {
  useGetMovieByIdQuery,
  useGetShowByIdQuery,
} from "../services/moviesApi";
import Loader from "../components/Loader";
import VideoTrailers from "../components/VideoTrailers";
import MovieDescription from "../components/MovieDescription";
import MovieInfo from "../components/MovieInfo";

const MovieDetailPage = () => {
  const { id, Type } = useParams();

  const query = Type === "movie" ? useGetMovieByIdQuery : useGetShowByIdQuery;

  const { data: media, isLoading } = query(id);

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-screen-2xl mx-auto">
      <VideoTrailers
        poster={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
        title={media.overview}
        name={media.title || media.name || media.original_title}
      />
      <div className="flex flex-col md:flex-row justify-between gap-6 mx-4">
        <div>
          <MovieDescription description={media.overview} />
        </div>
        <div className="md:max-w-xs w-full">
          <MovieInfo
            year={media.first_air_date || media.release_date}
            languages={media.original_language}
            rating={media.vote_average}
            genres={media.genres}
            status={media.status || "N/A"}
            budget={media.budget || "N/A"}
            runtime={media.runtime || "N/A"}
            revenue={media.revenue || "N/A"}
            seasons={media.number_of_seasons}
            episodes={media.number_of_episodes}
            adult={media.adult}
            tagline={media.tagline}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
