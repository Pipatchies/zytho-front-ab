import { useState } from "react";
import { Link } from "react-router";
import { HomeIcon, BuildingStorefrontIcon, FireIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">

      <div
        className={`fixed top-0 right-0 h-screen bg-gray-700 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 transition-transform duration-300 ease-in-out`}
      >  
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white"
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


        <div className="flex flex-col items-start mt-16 space-y-4 px-4">
        <Link to="/"
            className="text-white flex hover:bg-gray-500 px-3 py-2 rounded-md text-3xl"
          >
            <HomeIcon className="h-5 w-5 mr-2 mt-2" /> HOME
        </Link>
        <Link to="/beers-catalog"
            className="text-white opacity-75 flex hover:bg-gray-500 px-3 py-2 rounded-md text-lg"
          >
            <FireIcon className="h-5 w-5 mr-2 mt-1" /> BEERS
          </Link>
        <Link to="/brewerys-catalog"
            className="text-white opacity-75 flex hover:bg-gray-500 px-3 py-2 rounded-md text-lg"
          >
            <BuildingStorefrontIcon className="h-5 w-5 mr-2 mt-1" /> BREWERYS
          </Link>
        </div>
      </div>


      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 right-4 text-black"
        >
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

export default Navbar;



