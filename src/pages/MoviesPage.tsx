import GenresSlider from "../components/GenresSlider";
import MediaSection from "../components/MediaSection";

const MoviesPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8">
      <div className="border-2 border-dark-15 p-4 rounded-lg">
        <GenresSlider type="movie" />

        <MediaSection
          title="Popular Movies"
          type="popular"
          mediaType="movies"
        />
        <MediaSection
          title="Upcoming Movies"
          type="upcoming"
          mediaType="movies"
        />
        <MediaSection
          title="Top Rated Movies"
          type="top_rated"
          mediaType="movies"
        />
      </div>
      <div className="border-2 border-dark-15 p-4 rounded-lg">
        <GenresSlider type="tv" />

        <MediaSection title="Popular Shows" type="popular" mediaType="shows" />
        <MediaSection title="On The Air" type="on_the_air" mediaType="shows" />
        <MediaSection
          title="Top Rated Shows"
          type="top_rated"
          mediaType="shows"
        />
      </div>
    </div>
  );
};

export default MoviesPage;
