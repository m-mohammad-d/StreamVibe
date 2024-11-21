
import { IoIosArrowRoundForward } from "react-icons/io";

function CategoryItem({ title, image }: { title: string; image: string }) {
  return (
    <div className="p-4 bg-dark-10 rounded-lg border-4 border-dark-15">
      <img src={image} alt={title} />
      <div className="text-white flex justify-between mt-2 items-center">
        <p>{title}</p>
        <IoIosArrowRoundForward size={30} />
      </div>
    </div>
  );
}

export default CategoryItem;
