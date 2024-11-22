import VideoTrailers from "../components/VideoTrailers";
import MoviesList from "../components/MoviesList";
import ShowsList from "../components/ShowsList";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MoviesPage() {
  const movieGenres = ["Action", "Comedy", "Drama", "Horror"];
  const showGenres = ["Action", "Comedy", "Drama", "Horror"];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8">
      <div data-aos="fade-up">
        <VideoTrailers />
      </div>

      <h1 data-aos="fade-right" className="text-3xl font-bold mt-8 text-white">
        Movies
      </h1>
      {movieGenres.map((genre, index) => (
        <div data-aos="fade-up" data-aos-delay={`${index * 100}`} key={genre}>
          <MoviesList genre={genre} />
        </div>
      ))}

      <h1 data-aos="fade-left" className="text-3xl font-bold mt-12 text-white">
        Shows
      </h1>
      {showGenres.map((genre, index) => (
        <div data-aos="fade-up" data-aos-delay={`${index * 100}`} key={genre}>
          <ShowsList genre={genre} />
        </div>
      ))}
    </div>
  );
}

export default MoviesPage;
