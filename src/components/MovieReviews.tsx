import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

type AuthorDetails = {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
};

type Review = {
  id: string;
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  updated_at: string;
  url: string;
};
type MovieReviewsProps = {
  reviews: Review[] | undefined;
};
function MovieReviews({ reviews }: MovieReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-500">No reviews available.</p>;
  }

  return (
    <div className="py-4 bg-dark-10 border-2 p-6 border-dark-15 rounded-lg w-full">
      <h2 className="text-2xl font-semibold mb-4 text-grey-60">Reviews</h2>
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        className="py-4"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div>
              <div className="flex items-center gap-4 mb-2">
                {review.author_details.avatar_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white">
                    {review.author[0]?.toUpperCase()}
                  </div>
                )}

                <div>
                  <h3 className="font-medium text-white">{review.author}</h3>
                  {review.author_details.rating && (
                    <p className=" font-bold text-sm text-primary-50">
                      Rating: {review.author_details.rating}/10
                    </p>
                  )}
                </div>
              </div>
              <p className="text-grey-60">{review.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieReviews;
