import { useBeer } from "./hooks/useBeer"
import { BeerCard } from "../components/beerCard";

export const BeersCatalog: React.FC = () => {
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
    <div className="max-w-7xl mx-auto sm:px-32 px-6 py-8">
      <div className="mb-8">
        <div className="text-gray-900 pb-6">
          <h1 className="md:text-5xl text-3xl font-bold font-oswald text-center sm:text-left">NOS <span className="text-yellow-600">BINOUZES</span> ARTISANALES</h1>
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
