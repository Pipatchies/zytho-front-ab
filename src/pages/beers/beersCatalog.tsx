import { BeerCard } from "../../components/beer/beerCard";
import { useBeer } from "./hooks/useBeer";

export const BeersCatalog = () => {
  const {
    beers,
    loading,
    error,
    handleSearch,
    handleAbvRangeChange,
    handlePriceRangeChange,
    abvRange,
    priceRange,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="md:text-4xl text-3xl font-bold font-oswald text-center mb-8">
        NOS <span className="text-yellow-600">BINOUZES</span> ARTISANALES
      </h1>

      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 md:gap-6 mb-8">
        <input
          type="text"
          placeholder="Rechercher une bière..."
          onChange={handleSearch}
          aria-label="Rechercher une bière"
          className="flex-1 min-w-[250px] px-4 py-2 border border-yellow-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />

        <div className="flex items-center gap-2">
          <label
            htmlFor="abvRange"
            className="text-sm font-medium text-gray-900 font-nunito"
          >
            Degré d'alcool :
          </label>
          <select
            id="abvRange"
            value={abvRange}
            onChange={handleAbvRangeChange}
            aria-label="Filtrer par degré d'alcool"
            className="px-3 py-2 border border-yellow-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            <option value="all">-- Choisir l'ABV --</option>
            <option value="under5">Moins de 5 %</option>
            <option value="5to10">Entre 5 % et 10 %</option>
            <option value="over10">Plus de 10 %</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="priceRange"
            className="text-sm font-medium text-gray-900 font-nunito"
          >
            Prix :
          </label>
          <select
            id="priceRange"
            value={priceRange}
            onChange={handlePriceRangeChange}
            aria-label="Filtrer par prix"
            className="px-3 py-2 border border-yellow-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            <option value="all">-- Choisir le prix --</option>
            <option value="under10">Moins de 10 €</option>
            <option value="10to15">Entre 10 € et 15 €</option>
            <option value="over15">Plus de 15 €</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default BeersCatalog;

