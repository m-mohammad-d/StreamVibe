import React from "react";
import { useGetMoviesQuery, useGetShowsQuery } from "../services/moviesApi";
import MediaCard from "./MediaCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import NavigationButtons from "./NavigationButtons";
import Loader from "./Loader";

interface MediaSectionProps {
  title: string;
  type: string;
  mediaType: "movies" | "shows";
}

interface Media {
  id: number;
  poster_path: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
}

const MediaSection: React.FC<MediaSectionProps> = ({
  title,
  type,
  mediaType,
}) => {
  const query = mediaType === "movies" ? useGetMoviesQuery : useGetShowsQuery;
  const { data, isLoading, error } = query(type);

  // Unique IDs for navigation buttons
  const prevButtonId = `${mediaType}-${type}-prev-btn`;
  const nextButtonId = `${mediaType}-${type}-next-btn`;

  if (isLoading) return <Loader />;
  if (error) return <div className="text-white">Error loading {title}!</div>;

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl text-white font-bold">{title}</h2>
        <NavigationButtons prevId={prevButtonId} nextId={nextButtonId} />
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView="auto"
        navigation={{
          prevEl: `#${prevButtonId}`,
          nextEl: `#${nextButtonId}`,
        }}
        className="py-4"
      >
        {data.results.map((media: Media) => (
          <SwiperSlide key={media.id} className="w-auto">
            <MediaCard
              id={media.id}
              poster={media.poster_path}
              title={media.title || media.name || "Untitled"}
              year={media.release_date || media.first_air_date || "Unknown"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MediaSection;
