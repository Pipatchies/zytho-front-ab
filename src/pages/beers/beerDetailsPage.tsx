import { useParams } from "react-router-dom";
import { useBeerById } from "./hooks/useBeerByID";
import { BeerDetailsCard } from "../../components/beer/beerDetailsCard";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export const BeerDetailsPage = () => {
  const { id } = useParams();
  const beerId = id ? Number(id) : null;
  const navigate = useNavigate();

  const { 
    beer, 
    ingredients, 
    loading, 
    error 
  } = useBeerById(beerId!);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]" role="status">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-900 border-t-transparent"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-red-600" aria-live="assertive">
        Une erreur est survenue lors du chargement des bières.
      </div>
    );
  }
  if (!beer) {
    return (
      <div className="text-center text-red-600" aria-live="assertive">
        Aucune bière trouvée.
      </div>
    );
  }

  return (
    <div className="text-gray-900 px-4 sm:px-8">
      <div className="flex justify-start mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 font-semibold text-xl text-white bg-gray-900 hover:bg-yellow-600 rounded-lg shadow-md transition-all duration-300 flex items-center"
          aria-label="Retour à la page précédente"
        >
          <ArrowLeftIcon className="h-6 w-6 mr-2" /> Retour
        </button>
      </div>

      <h2 className="text-3xl sm:text-5xl font-bold font-oswald text-center mb-6">
        Détails de la bière
      </h2>

      <BeerDetailsCard beer={beer} ingredients={ingredients} />
    </div>
  );
};

export default BeerDetailsPage;
