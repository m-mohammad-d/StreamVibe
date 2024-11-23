import { useParams } from "react-router-dom";
import {
  useGetMovieByIdQuery,
  useGetShowByIdQuery,
} from "../services/moviesApi";
import Loader from "../components/Loader";
import VideoTrailers from "../components/VideoTrailers";

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
        name={media.original_title || media.name}
      />
    </div>
  );
};

export default MovieDetailPage;
