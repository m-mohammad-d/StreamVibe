import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import GenresSlider from "../components/GenresSlider";
import MediaSection from "../components/MediaSection";
import VideoTrailers from "../components/VideoTrailers";

const MoviesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8">
      <div data-aos="zoom-in">
        <VideoTrailers
          name="dark"
          title="A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town."
          poster="https://image.tmdb.org/t/p/original//7CFCzWIZZcnxHke3yAQiGPWXHwF.jpg&quot"
        />
      </div>

      <div
        className="border-2 border-dark-15 p-4 rounded-lg"
        data-aos="fade-right"
      >
        <GenresSlider type="movie" />

        <div data-aos="fade-up">
          <MediaSection
            title="Popular Movies"
            type="popular"
            mediaType="movies"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <MediaSection
            title="Upcoming Movies"
            type="upcoming"
            mediaType="movies"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <MediaSection
            title="Top Rated Movies"
            type="top_rated"
            mediaType="movies"
          />
        </div>
      </div>

      <div
        className="border-2 border-dark-15 p-4 rounded-lg"
        data-aos="fade-left"
      >
        <GenresSlider type="tv" />

        <div data-aos="fade-up">
          <MediaSection
            title="Popular Shows"
            type="popular"
            mediaType="shows"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <MediaSection
            title="On The Air"
            type="on_the_air"
            mediaType="shows"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <MediaSection
            title="Top Rated Shows"
            type="top_rated"
            mediaType="shows"
          />
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
