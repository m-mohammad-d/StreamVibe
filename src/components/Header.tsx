import { useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <header
      className={`relative h-[200px] ${
        isHomepage ? "bg-header bg-cover bg-center text-white" : "bg-dark-06"
      }`}
    >
      {isHomepage && <div className="absolute inset-0 bg-black/60"></div>}

      <div className="relative max-w-screen-2xl h-32 w-full mx-auto flex justify-between items-center">
        <div>
          <img src="Logo.png" alt="Logo" />
        </div>
        <div>
          <nav className="bg-dark-06 p-2 flex gap-6 items-center border-4 border-dark-12 rounded-xl text-grey-75">
            <Link
              to="/"
              className="transition duration-300 ease-linear hover:bg-dark-10 hover:text-white p-4 rounded-md"
            >
              home
            </Link>
            <Link
              to="/"
              className="transition duration-300 ease-linear hover:bg-dark-10 hover:text-white p-4 rounded-md"
            >
              Movies & Shows
            </Link>
            <Link
              to="/"
              className="transition duration-300 ease-linear hover:bg-dark-10 hover:text-white p-4 rounded-md"
            >
              Support
            </Link>
            <Link
              to="/"
              className="transition duration-300 ease-linear hover:bg-dark-10 hover:text-white p-4 rounded-md"
            >
              Subscriptions
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <CiSearch size={30} />
          <IoIosNotificationsOutline size={30} />
        </div>
      </div>
    </header>
  );
}

export default Header;
