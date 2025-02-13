import { motion } from "framer-motion";
import { BeerResBody } from "../../interfaces/beerInterface";
import { Link } from "react-router-dom";

export const BeerCard = ({ beer }: { beer: BeerResBody }) => {
  
  const beerImage: string = beer.photos && beer.photos.length > 0 ? beer.photos[0].url : "../assets/beers/punkIpa.png";

  return (
    <motion.div 
      className="relative max-w-xs overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >

      <div className="relative">
        <img
          src={beerImage}
          alt={beer.name}
          className="w-full h-full object-cover"
        />

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center bg-yellow-600 bg-opacity-80 text-white p-5 text-center rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h3 className="text-lg sm:text-xl font-semibold font-oswald">{beer.name}</h3>
          <p className="text-sm sm:text-base mt-2 font-nunito italic">{beer.description}</p>
          <Link
            to={`/beer/${beer.id}`}
            className="mt-4 px-3 py-1 bg-white text-yellow-600 font-semibold rounded-md shadow-md hover:bg-gray-900 hover:text-white transition-colors duration-300 font-nunito"
          >
            En savoir +
          </Link>
        </motion.div>

      </div>
      
    </motion.div>
  );
};









