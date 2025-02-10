import { useBeer } from "./hooks/useBeer";
import { BeerCard } from "../components/beerCard";

export const BeersCatalog = () => {
  const {
    beers,
    loading,
    error,
    handleSearch,
    handleAbvRangeChange,
    handlePriceRangeChange,
    abvRange,
    priceRange
  } = useBeer();

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

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      
      {/* Barre de recherche en haut */}
      <div className="mb-6">
      <div className="text-gray-900 pb-6">
      <h1 className="md:text-5xl text-3xl font-bold font-oswald text-center mb-6">NOS <span className="text-yellow-600">BINOUZES</span> ARTISANALES</h1>
        <input
          type="text"
          placeholder="Rechercher une bière..."
          onChange={handleSearch}
          className="w-1/4 px-4 py-2 border border-yellow-600 rounded-lg "
        />
      </div>

      {/* Conteneur principal avec sidebar + liste des bières */}
      <div className="flex gap-8">
        
        {/* Sidebar Filtres */}
        <div className="w-1/4 h-1/4 p-4 border border-yellow-600 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Filtres</h2>

          {/* Filtre par ABV */}
          <div className="mb-6">
            <label htmlFor="abvRange" className="block text-sm font-medium text-gray-700">
              Degré d'alcool: {abvRange} % - 8 %
            </label>
            <input
              id="abvRange"
              type="range"
              min="4"
              max="12"
              step="0.1"
              value={abvRange}
              onChange={handleAbvRangeChange}
              className="w-full cursor-pointer"
            />
          </div>

          {/* Filtre par Prix */}
          <div>
            <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">
              Prix: 11 € - {priceRange} €
            </label>
            <input
              id="priceRange"
              type="range"
              min="0"
              max="18"
              step="0.5"
              value={priceRange}
              onChange={handlePriceRangeChange}
              className="w-full cursor-pointer"
            />
          </div>
        </div>

        {/* Liste des bières */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {beers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>

      </div>
    </div>
    </div>
  );
};

export default BeersCatalog;

