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
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Titre */}
      <h1 className="md:text-5xl text-3xl font-bold font-oswald text-center mb-6 pb-10">
        NOS <span className="text-yellow-600">BINOUZES</span> ARTISANALES
      </h1>

      {/* Conteneur de la barre de recherche et des filtres */}
      <div className="flex flex-wrap items-center gap-6 mb-6">
        {/* Barre de recherche */}
        <input
          type="text"
          placeholder="Rechercher une bière..."
          onChange={handleSearch}
          className="flex-1 min-w-[250px] px-4 py-2 border border-yellow-600 rounded-lg"
        />

        {/* Liste déroulante pour ABV */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="abvRange"
            className="text-sm font-medium text-gray-900 font-nunito"
          >
            Degré d'alcool:
          </label>
          <select
            id="abvRange"
            value={abvRange}
            onChange={handleAbvRangeChange}
            className="px-3 py-2 border border-yellow-600 rounded-lg"
          >
            <option value="all" className="text-center">
              -- Choisir l'ABV --
            </option>
            <option value="under5">Moins de 5 %</option>
            <option value="5to10">Entre 5 % et 10 %</option>
            <option value="over10">Plus de 10 %</option>
          </select>
        </div>

        {/* Liste déroulante pour Prix */}
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
            className="px-3 py-2 border border-yellow-600 rounded-lg"
          >
            <option value="all" className="text-center">
              -- Choisir le prix --
            </option>
            <option value="under10">Moins de 10 €</option>
            <option value="10to15">Entre 10 € et 15 €</option>
            <option value="over15">Plus de 15 €</option>
          </select>
        </div>
      </div>

      {/* Liste des bières */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default BeersCatalog;
