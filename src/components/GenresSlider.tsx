import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { useGetGenresQuery } from "../services/moviesApi";
import GenresCard from "./GenresCard";
import NavigationButtons from "./NavigationButtons";
import Loader from "./Loader";

interface GenresSliderProps {
  type: string;
}

const GenresSlider: React.FC<GenresSliderProps> = ({ type }) => {
  const { data, isLoading, error } = useGetGenresQuery(type);

  const prevButtonId = `${type}-genres-prev-btn`;
  const nextButtonId = `${type}-genres-next-btn`;
  if (isLoading) return <Loader />;
  if (error) return <div>Error loading genres!</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl text-white font-bold">Our Genres</h2>
        <NavigationButtons prevId={prevButtonId} nextId={nextButtonId} />
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        navigation={{
          prevEl: "#prev-btn",
          nextEl: "#next-btn",
        }}
        className="py-4"
      >
        {data.genres.map((genre: { id: number; name: string }) => (
          <SwiperSlide key={genre.id} className="w-auto">
            <GenresCard title={genre.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GenresSlider;
