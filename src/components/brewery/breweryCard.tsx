import { BreweryResBody } from "../../interfaces/breweryInterface";
import { Link } from "react-router-dom";
import BreweryImage from "../../assets/brewery2.jpg"

export const BreweryCard = ({ brewery }: { brewery: BreweryResBody }) => {
  const breweryImage = BreweryImage;

  return (
    <div className="relative flex flex-col md:flex-row bg-gray-900 rounded-lg shadow-lg overflow-hidden z-10">
      {/* Image de la brasserie */}
      <div className="w-full md:w-1/3 h-48 md:h-auto relative">
        <img
          src={breweryImage}
          alt={brewery.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Informations de la brasserie */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-center bg-yellow-600 bg-opacity-70 text-white">
        <h3 className="sm:text-3xl text-xl font-semibold font-oswald text-black mb-2">
          {brewery.name}
        </h3>
        <p className="sm:text-md text-sm mt-2 font-nunito italic mb-2">
          {brewery.description}
        </p>
        <p className="sm:text-md text-sm mt-2 font-nunito">
          📍 {brewery.address}, {brewery.country}
        </p>
        <Link
          to={`/brewery/${brewery.id}`}
          className="mt-6 px-4 py-2 bg-white text-yellow-600 font-semibold rounded-lg shadow-md hover:bg-gray-900 hover:text-white hover:border-2 hover:border-gray-300 transition font-nunito text-center"
        >
          En savoir +
        </Link>
      </div>
    </div>
  );
};

