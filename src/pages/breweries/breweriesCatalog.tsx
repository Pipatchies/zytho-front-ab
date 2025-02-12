
import { BreweryCard } from "../../components/brewery/breweryCard";
import { useBrewery } from "./hooks/useBrewery";

    export const BreweriesCatalog = () => {
    const {
        breweries,
        loading,
        error,
        handleSearch,
        search,
    } = useBrewery();

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
            Une erreur est survenue lors du chargement des brasseries.
        </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Titre */}
        <h1 className="md:text-5xl text-3xl font-bold font-oswald text-center mb-6 pb-10">
            NOS <span className="text-yellow-600">BRASSERIES</span> PARTENAIRES
        </h1>

        {/* Barre de recherche */}
        <div className="flex justify-center mb-6">
            <input
            type="text"
            placeholder="Rechercher une brasserie..."
            onChange={handleSearch}
            value={search}
            className="w-full max-w-lg px-4 py-2 border border-yellow-600 rounded-lg"
            />
        </div>

        {/* Liste des brasseries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {breweries.map((brewery) => (
            <BreweryCard key={brewery.id} brewery={brewery} />
            ))}
        </div>
        </div>
    );
    };

    export default BreweriesCatalog;
