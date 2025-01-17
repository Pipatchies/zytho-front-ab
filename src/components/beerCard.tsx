import { motion } from "framer-motion";
import { BeerResBody } from "../interfaces/beerInterface";
import Beer from '../assets/beers/punkIpa.png';
import { Link } from "react-router-dom";

export const BeerCard = ({ beer }: { beer: BeerResBody }) => {

  return (
    <motion.div
      className="relative max-w-sm overflow-hidden z-10"
    >
      {/* Conteneur de l'image de la bière */}
      <div
        className="relative shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out group"
      >
        <img
          src={Beer}
          alt={beer.name}
          className="w-full h-full object-cover"
        />
      </div>

        {/* Informations de la bière */}
        <motion.div
          className={`absolute inset-0 p-4 flex flex-col justify-center items-center bg-yellow-600 bg-opacity-80 text-white duration-300 ease-in-out rounded-lg`}
          initial={{ opacity: 0 }} 
          whileHover={{ opacity: 1 }}
        >
          <h3 className="text-3xl font-semibold font-oswald">{beer.name}</h3>
          <p className="text-md mt-4 text-center font-nunito italic">{beer.description}</p>
          <Link
          to={`/beer/${beer.id}`}
          className="mt-6 px-4 py-2 bg-white text-yellow-600 font-semibold rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition-colors duration-300 font-nunito"
        >
          En savoir +
        </Link>
        </motion.div>
    </motion.div>
  );
};






