import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import CategoryItem from "./CategoryItem";

const categories = [
  { title: "Action", image: "/action-image.png" },
  { title: "Adventure", image: "/Adventure-image.png" },
  { title: "Comedy", image: "/comedy-image.png" },
  { title: "Drama", image: "/drama-image.png" },
  { title: "Horror", image: "/horror-image.png" },
];

function Categories() {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-12">

      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            Explore our wide variety of categories
          </h2>
          <p className="text-grey-60 text-sm sm:text-base">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>

        <div className="flex items-center justify-center bg-dark-06 border-2 border-dark-12 p-4 rounded-2xl">
          <button className="w-10 h-10 flex items-center justify-center bg-dark-10 text-white rounded-lg hover:bg-dark-15">
            <FaLongArrowAltLeft />
          </button>

          <div className="flex items-center mx-4 space-x-1">
            <span className="w-4 h-1 bg-primary-45 rounded-full"></span>
            <span className="w-4 h-1 bg-dark-20 rounded-full"></span>
            <span className="w-4 h-1 bg-dark-20 rounded-full"></span>
            <span className="w-4 h-1 bg-dark-20 rounded-full"></span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center bg-dark-10 text-white rounded-lg hover:bg-dark-15">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 my-12">
        {categories.map((categorie) => (
          <CategoryItem
            key={categorie.title}
            title={categorie.title}
            image={categorie.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
