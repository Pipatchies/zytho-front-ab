import React from "react";
import logo from '../assets/logo_zythologue.webp';

export const Footer: React.FC = () => {
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
              <a href="/" className="sm:text-5xl text-2xl hover:text-yellow-600 rounded-md py-2 border-b border-yellow-600">
                Home
              </a>
              <a href="/beers-catalog" className="sm:text-2xl text-lg hover:text-yellow-600 px-3 py-2 rounded-md opacity-75">
                Beers
              </a>
              <a href="/breweries" className="sm:text-2xl text-lg hover:text-yellow-600 px-3 py-2 rounded-md opacity-75">
                Brewerys
              </a>
            </div>
          </div>


          <div className="flex flex-col gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-2xl text-lg flex items-center border-2 border-gray-300 p-2 rounded-lg hover:bg-yellow-600"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
              <span className="ml-2">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-2xl text-lg flex items-center border-2 border-gray-300 p-2 rounded-lg hover:bg-yellow-600"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
              <span className="ml-2">Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-2xl text-lg flex items-center border-2 border-gray-300 p-2 rounded-lg hover:bg-yellow-600"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
              <span className="ml-2">Twitter</span>
            </a>
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
