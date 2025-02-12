import logo from '../../assets/logo_zythologue.webp';
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 font-oswald">
      <div className="container mx-auto px-6 ">
        <div className="flex md:flex-row justify-center md:gap-96 sd:gap-44 gap-12 items-center">
          <div className="flex items-center gap-8">
          <img 
          src={logo} 
          alt="Logo Zythologue" 
          className="top-4 left-4 sm:w-28 sm:h-28 bg-yellow-200 p-0.5 rounded-2xl shadow-lg w-20 h-20" 
        />
            <div className="flex flex-col mb-4 md:mb-0 gap-2">
              <Link
            to="/"
            className="sm:text-5xl text-2xl hover:text-yellow-600 rounded-md py-2 border-b border-yellow-600"
            >
                Home
              </Link>
              <Link
              to="/beers-catalog" 
              className="sm:text-2xl text-lg hover:text-yellow-600 px-3 py-2 rounded-md opacity-75"
              >
                Beers
              </Link>
              <Link
              to="/breweries-catalog" 
              className="sm:text-2xl text-lg hover:text-yellow-600 px-3 py-2 rounded-md opacity-75"
              >
                Brewerys
              </Link>
            </div>
          </div>


          <div className="flex flex-col gap-4">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-2xl text-lg flex items-center border-2 border-gray-300 p-2 rounded-lg hover:bg-yellow-600"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
              <span className="ml-2">Facebook</span>
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-2xl text-lg flex items-center border-2 border-gray-300 p-2 rounded-lg hover:bg-yellow-600"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
              <span className="ml-2">Instagram</span>
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-2xl text-lg flex items-center border-2 border-gray-300 p-2 rounded-lg hover:bg-yellow-600"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
              <span className="ml-2">Twitter</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center text-sm md:gap-28 gap-6 border-t-2 border-yellow-600 pt-6 mt-6">

          <div className="flex items-center">
            <p>
              Réalisé avec <span className="text-red-500">❤️</span> par Ariane
              Bertaud
            </p>
          </div>


          <div className="flex space-x-6">
            <a href="/legal-notice" className="text-sm">
              Mentions légales
            </a>
            <a href="/sitemap" className="text-sm">
              Plan du site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
