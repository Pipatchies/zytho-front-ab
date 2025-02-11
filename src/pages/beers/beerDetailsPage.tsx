import { useParams } from "react-router-dom";
import { useBeerById } from "./hooks/useBeerByID";
import { BeerDetailsCard } from "../../components/beer/beerDetailsCard";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const BeerDetailsPage = () => {
  const { id } = useParams();
  const beerId = id ? Number(id) : null;

  const { beer, ingredients, loading, error } = useBeerById(beerId!);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-900 border-t-transparent"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-red-600">
        Une erreur est survenue lors du chargement des bières.
      </div>
    );
  }
  if (!beer) {
    return (
      <div className="text-center text-red-600">Aucune bière trouvée.</div>
    );
  }

  return (
    <div className="text-gray-900">
      <div className="">
        {/* Lien vers la page de retour au catalogue des bières */}
        <div className="flex justify-start">
          <Link
            to={`/beers-catalog`}
            className="px-6 py-3 mb-6 md:mb-1 font-semibold font-nunito text-xl text-white bg-gray-900 hover:bg-yellow-600 rounded-lg shadow-md transition-all duration-300 whitespace-nowrap flex items-center"
          >
            <ArrowLeftIcon className="h-6 w-6 mr-2" /> Back
          </Link>
        </div>
        <h2 className="text-5xl font-bold font-oswald text-center w-full">
          Détails de la bière
        </h2>
      </div>
      <BeerDetailsCard beer={beer} ingredients={ingredients} />
    </div>
  );
};

export default BeerDetailsPage;
