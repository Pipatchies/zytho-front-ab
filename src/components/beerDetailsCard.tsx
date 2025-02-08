import { BeerResBody } from "../interfaces/beerInterface";

export const BeerDetailsCard = ({ beer }: { beer: BeerResBody }) => {

    const beerImage: string = beer.photos && beer.photos.length > 0 ? beer.photos[0].url : "../assets/beers/punkIpa.png";

    return (
        <div className="container mx-auto my-16 p-6 bg-white rounded-lg shadow-lg ring-2 ring-yellow-600 flex flex-col md:flex-row items-center justify-center">
        {/* Photo de la bière */}
        <div className="flex-1">
            <img
                src={beerImage}
                alt={beer.name}
                className="w-full h-100 object-cover rounded-lg shadow-md shadow-gray-900"
            />
        </div>

        {/* Détails de la bière */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-12">
            <h2 className="text-4xl font-semibold text-center md:text-left font-oswald">{beer.name}</h2>        {/* Description de la bière */}
            <p className="text-lg text-center md:text-left text-gray-700 font-nunito mt-4">{beer.description}</p>
            <div className="mt-6">
                <h4 className="text-xl font-semibold font-oswald">ABV (Alcohol By Volume)</h4>
                <p className="text-lg">{beer.abv} %</p>
            </div>
            <div className="mt-4">
                <h4 className="text-xl font-semibold font-oswald">Price</h4>
                <p className="text-lg">{beer.price} €</p>
            </div>
        </div>
    </div>
    );
};
