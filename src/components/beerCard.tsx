import { BeerResBody } from "../interfaces/beerInterface";
import { Link } from "react-router-dom";

export const BeerCard = ({ beer }: { beer: BeerResBody }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Image Placeholder */}
      <div className="h-48 bg-gray-300">
        {/* Si tu as une image de bière, tu peux la mettre ici, sinon utiliser un fond par défaut */}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{beer.name}</h3>
        <p className="text-gray-600 text-sm">{beer.description.substring(0, 100)}...</p>
        <p className="mt-2 text-gray-700">
          <strong>Type:</strong> {beer.abv}% ABV
        </p>
        <Link
          to={`/beer/${beer.id}`}
          className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          Voir détails
        </Link>
      </div>
    </div>
  );
};
