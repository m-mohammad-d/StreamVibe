import { useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../services/moviesApi";
import Loader from "../components/Loader";

function MovieDetailPage() {
  const { id } = useParams();
  const { data: movie, isLoading } = useGetMovieDetailsQuery(id);
  if (isLoading) return <Loader />;
  console.log(movie);

  return <div></div>;
}

export default MovieDetailPage;
