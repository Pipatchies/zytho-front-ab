import { useBeer } from "./hooks/useBeer"
import { BeerCard } from "../components/beerCard";

const BeersCatalog: React.FC = () => {
  const {
    beers,
    loading,
    error,
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
  <div className="">
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="bg-yellow-600 bg-opacity-70 text-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Nos Bières Artisanales</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  </div>
</div>
);
};

export default BeersCatalog;
