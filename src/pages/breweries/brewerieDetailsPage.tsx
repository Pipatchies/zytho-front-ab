import { useParams } from "react-router-dom";
import { useBrewery } from "./hooks/useBrewery";  
import { useBeerByBreweryId } from "../beers/hooks/useBeerByBreweryID";  
import { BeerCard } from "../../components/beer/beerCard";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const BreweryDetailsPage = () => {
    const { id } = useParams();
    const breweryId = id ? Number(id) : null;

    const { 
        breweries, 
        loading: breweryLoading, 
        error: breweryError 
    } = useBrewery();

    const { 
        beers, 
        loading: beerLoading, 
        error: beerError 
    } = useBeerByBreweryId(Number(breweryId));

    const brewery = breweries.find((brewery) => brewery.id === Number(breweryId));

    if (breweryLoading || beerLoading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]" role="status">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-900 border-t-transparent"></div>
            </div>
        );
    }

    if (breweryError || beerError) {
        return (
            <div className="text-center text-red-600" aria-live="assertive">
                {breweryError || beerError}
            </div>
        );
    }

    if (!brewery) {
        return (
            <div className="text-center text-red-600" aria-live="assertive">
                Aucune brasserie trouvée.
            </div>
        );
    }

    return (
        <div className="text-gray-900 px-4 sm:px-8">
            <div className="flex justify-start mb-6">
                <Link
                    to={`/breweries-catalog`}
                    className="px-6 py-3 font-semibold text-xl text-white bg-gray-900 hover:bg-yellow-600 rounded-lg shadow-md transition-all duration-300 flex items-center"
                    aria-label="Retour à la liste des brasseries"
                >
                    <ArrowLeftIcon className="h-6 w-6 mr-2" /> Retour
                </Link>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold font-oswald text-center mb-6">
                Détails de la brasserie
            </h2>

            <div className="ring-2 ring-yellow-600 p-8 rounded-lg mb-12">
                <h2 className="text-4xl font-bold mb-4">{brewery.name}</h2>
                <div className="flex flex-col sm:flex-row justify-between w-full mb-4">
                    <p className="text-base italic mb-2 sm:mb-0">{brewery.description}</p>
                    <p className="text-base">📍 {brewery.address}, {brewery.country}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {beers.map((beer) => (
                    <BeerCard key={beer.id} beer={beer} />
                ))}
            </div>
        </div>
    );
};

export default BreweryDetailsPage;

