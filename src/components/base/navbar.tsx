import { useState } from "react";
import { Link } from "react-router";
import {
  HomeIcon,
  BuildingStorefrontIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-50">
      <div
        className={`fixed top-0 right-0 h-screen bg-gray-900 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-2/6 transition-transform duration-300 ease-in-out max-lg:w-3/6 max-md:w-4/6 max-sm:w-full`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-yellow-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <div className="flex flex-col items-start mt-16 space-y-4 px-20">
          <Link
            to="/"
            className="text-white flex hover:text-yellow-600 px-3 py-2 rounded-md text-5xl font-semibold font-oswald"
          >
            <HomeIcon className="h-10 w-10 mr-2 mt-1" /> HOME
          </Link>
          <Link
            to="/beers-catalog"
            className="text-white opacity-75 flex hover:text-yellow-600 px-9 py-2 ml-10 rounded-md text-3xl font-semibold font-oswald"
          >
            <FireIcon className="h-8 w-8 mr-2 mt-1" /> BEERS
          </Link>
          <Link
            to="/breweries-catalog"
            className="text-white opacity-75 flex hover:text-yellow-600 px-9 py-2 ml-10 rounded-md text-3xl font-semibold font-oswald"
          >
            <BuildingStorefrontIcon className="h-8 w-8 mr-2 mt-1" /> BREWERYS
          </Link>
        </div>
      </div>

      {!isOpen && (
        <button onClick={toggleMenu} className="fixed top-4 right-4 text-yellow-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}
    </nav>
  );
};
