import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../services/moviesApi";
import Loader from "../components/Loader";
import VideoTrailers from "../components/VideoTrailers";

function MovieDetailPage() {
  const { id } = useParams();
  const { data: movie, isLoading } = useGetMovieByIdQuery(id);

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-screen-2xl mx-auto">
      <VideoTrailers
        poster={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        title={movie.overview}
        name={movie.original_title || movie.name}
      />
    </div>
  );
}

export default MovieDetailPage;
