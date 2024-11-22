import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Header() {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Movies & Shows", path: "/movies" },
    { label: "Support", path: "/support" },
    { label: "Subscriptions", path: "/subscriptions" },
  ];

  return (
    <>
      <header
        className={`relative flex justify-center h-[200px] ${
          isHomepage ? "bg-header bg-cover bg-center text-white" : "bg-dark-06"
        }`}
      >
        {isHomepage && <div className="absolute inset-0 bg-black/60"></div>}

        <div className="relative max-w-screen-2xl h-32 w-full mx-4 flex justify-between items-center">
          <img
            src="Logo.png"
            alt="Logo"
            className="w-40 h-40 md:w-auto md:h-auto object-contain"
          />

          <nav className="hidden md:flex bg-dark-06 p-2 gap-6 items-center border-4 border-dark-12 rounded-xl text-grey-75">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="transition duration-300 ease-linear hover:bg-dark-10 hover:text-white p-4 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <CiSearch size={30} />
            <IoIosNotificationsOutline size={30} />
          </div>

          <button
            className="block md:hidden bg-dark-10 p-4 border-2 border-dark-15 rounded-lg"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <HiOutlineMenuAlt3 className="text-white" size={20} />
          </button>
        </div>
      </header>
      <motion.div
        className="fixed top-0 right-0 w-64 h-full text-white shadow-2xl z-50 flex flex-col"
        animate={{
          right: isSidebarOpen ? "0" : "-16rem",
        }}
        initial={{
          right: "-16rem",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <aside className="bg-dark-08 w-64 h-full p-6 flex flex-col gap-4 text-white z-50">
          <button
            className="self-end text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <IoMdClose size={30} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-lg p-2 rounded-md"
              onClick={() => setSidebarOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </aside>
      </motion.div>
    </>
  );
}

export default Header;
