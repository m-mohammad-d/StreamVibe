import { CiCalendar, CiStar } from "react-icons/ci";
import { FaStar, FaFilm } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";

function MovieInfo({
  year,
  languages,
  rating,
  genres,
  status,
  tagline,
  budget,
  revenue,
  runtime,
  adult,
  seasons,
  episodes,
}: {
  year: string;
  languages: string;
  rating: number;
  genres: { name: string }[] | undefined;
  status: string;
  tagline: string;
  budget: number;
  revenue: number;
  runtime: number;
  adult: boolean;
  seasons?: number;
  episodes?: number;
}) {
  return (
    <div className="bg-dark-10 border border-dark-15 p-6 rounded-lg shadow-md">
      <div className="space-y-6">
        <div>
          <h3 className="flex items-center text-lg font-semibold text-grey-60">
            <CiCalendar className="mr-2 text-grey-60" />
            Released Year:
          </h3>
          <p className="text-gray-200">{year || "N/A"}</p>
        </div>
        <div>
          <h3 className="flex items-center text-lg font-semibold text-grey-60">
            <IoLanguageOutline className="mr-2 text-grey-60" />
            Languages:
          </h3>
          <p className="text-gray-200">{languages || "N/A"}</p>
        </div>
        <div>
          <h3 className="flex items-center text-lg font-semibold text-grey-60">
            <CiStar className="mr-2 text-grey-60" />
            Rating:
          </h3>
          <div className="flex items-center gap-1">
            <FaStar className="text-primary-50" />
            <p className="text-gray-200">{rating?.toFixed(1) || "N/A"}</p>
          </div>
        </div>
        <div>
          <h3 className="flex items-center text-lg font-semibold text-grey-60">
            <FaFilm className="mr-2 text-grey-60" />
            Genres:
          </h3>
          {genres?.length ? (
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  key={genre.name}
                  className="bg-dark-8 border-2 border-dark-15 text-gray-300 py-1 px-3 rounded-lg"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          ) : (
            "N/A"
          )}
        </div>
        <div>
          <h3 className="flex items-center text-lg font-semibold text-grey-60">
            Status:
          </h3>
          <p className="text-gray-200">{status || "N/A"}</p>
        </div>
        <div>
          <h3 className="flex items-center text-lg font-semibold text-grey-60">
            Tagline:
          </h3>
          <p className="text-gray-200">{tagline || "N/A"}</p>
        </div>
        <div>
          <h3 className="flex items-center text-lg font-semibold text-grey-60">
            Budget:
          </h3>
          <p className="text-gray-200">
            {budget ? `$${budget.toLocaleString()}` : "N/A"}
          </p>
        </div>
        <div>
          <h3 className="flex items-center text-lg font-semibold text-grey-60">
            Revenue:
          </h3>
          <p className="text-gray-200">
            {revenue ? `$${revenue.toLocaleString()}` : "N/A"}
          </p>
        </div>
        <div>
          <h3 className="flex items-center text-lg font-semibold text-grey-60">
            Runtime:
          </h3>
          <p className="text-gray-200">
            {runtime ? `${runtime} minutes` : "N/A"}
          </p>
        </div>
        <div>
          <h3 className="flex items-center text-lg font-semibold text-grey-60">
            Mature Content:
          </h3>
          <p className="text-gray-200">{adult ? "Yes" : "No"}</p>
        </div>
        {seasons !== undefined && (
          <div>
            <h3 className="flex items-center text-lg font-semibold text-grey-60">
              Seasons:
            </h3>
            <p className="text-gray-200">{seasons || "N/A"}</p>
          </div>
        )}
        {episodes !== undefined && (
          <div>
            <h3 className="flex items-center text-lg font-semibold text-grey-60">
              Episodes:
            </h3>
            <p className="text-gray-200">{episodes || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieInfo;
