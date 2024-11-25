import { useParams } from "react-router-dom";
import {
  useGetMovieByIdQuery,
  useGetShowByIdQuery,
  useGetMovieCastQuery,
  useGetShowCastQuery,
  useGetShowReviewsQuery,
  useGetSMovieReviewsQuery,
} from "../services/moviesApi";
import Loader from "../components/Loader";
import VideoTrailers from "../components/VideoTrailers";
import MovieDescription from "../components/MovieDescription";
import MovieInfo from "../components/MovieInfo";
import MovieCast from "../components/MovieCast";
import MovieReviews from "../components/MovieReviews";

const MovieDetailPage = () => {
  const { id, Type } = useParams();
  const query = Type === "movie" ? useGetMovieByIdQuery : useGetShowByIdQuery;
  const castQuery =
    Type === "movie" ? useGetMovieCastQuery : useGetShowCastQuery;
  const reviewsQuery =
    Type === "movie" ? useGetSMovieReviewsQuery : useGetShowReviewsQuery;

  const { data: media, isLoading: mediaLoading } = query(id);
  const { data: castData, isLoading: castLoading } = castQuery(id);
  const { data: reviewsData, isLoading: reviewsLoading } = reviewsQuery(id);

  if (mediaLoading || castLoading || reviewsLoading) return <Loader />;

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <VideoTrailers
        poster={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
        title={media.overview}
        name={media.title || media.name || media.original_title}
      />
      <div className="flex flex-col lg:flex-row justify-between gap-6 mx-4 mt-4">
        <div className="lg:w-2/3 w-full space-y-6">
          <MovieDescription description={media.overview} />
          <MovieCast cast={castData.cast} />
          <MovieReviews reviews={reviewsData.results} />
        </div>
        <div className="lg:w-1/3 w-full">
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
