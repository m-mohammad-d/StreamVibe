import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface CastMemberProps {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  gender: number;
}

interface MovieCastProps {
  cast: CastMemberProps[];
}

const MovieCast: React.FC<MovieCastProps> = ({ cast }) => {
  return (
    <div className="py-4 bg-dark-10 border-2 p-6 border-dark-15 rounded-lg w-full">
      <h2 className="text-2xl text-grey-60 font-bold mb-4">Cast</h2>
      <Swiper
        spaceBetween={15}
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        className="py-4"
      >
        {cast.map((member) => (
          <SwiperSlide key={member.id} className="w-[160px]">
            <div className="text-center">
              <img
                src={
                  member.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${member.profile_path}`
                    : "https://via.placeholder.com/160x240?text=No+Image"
                }
                alt={member.name}
                className="w-[160px] h-[240px] object-cover rounded-lg"
              />
              <h3 className="text-md font-medium mt-2">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.character}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCast;
