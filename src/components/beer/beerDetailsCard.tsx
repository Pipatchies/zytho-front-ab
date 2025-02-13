import { BeerResBody } from "../../interfaces/beerInterface";
import { IngredientsBeerResBody } from "../../interfaces/ingredientsBeerInterface";

export const BeerDetailsCard = ({ beer, ingredients }: { beer: BeerResBody, ingredients: IngredientsBeerResBody[] }) => {
    const beerImage: string = beer.photos && beer.photos.length > 0 ? beer.photos[0].url : "../assets/beers/punkIpa.png";

    return (
        <div className="container mx-auto my-12 p-6 bg-white rounded-xl shadow-lg ring-2 ring-yellow-600 flex flex-col md:flex-row items-center md:items-start md:gap-12">
            
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={beerImage}
                    alt={`Photo de la bière ${beer.name}`}
                    className="w-full max-w-xs md:max-w-sm h-auto object-cover"
                />
            </div>

            <div className="w-full md:w-2/3 flex flex-col gap-6 text-gray-900">
                <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left font-oswald pt-4">
                    {beer.name}
                </h2>        

                <p className="text-lg text-center md:text-left text-gray-700 font-nunito">
                    {beer.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="text-lg md:text-xl font-semibold font-oswald">ABV (Alcohol By Volume)</h4>
                        <p className="text-base">{beer.abv} %</p>
                    </div>
                    <div>
                        <h4 className="text-lg md:text-xl font-semibold font-oswald">Price</h4>
                        <p className="text-base">{beer.price} €</p>
                    </div>
                </div>

                <div className="p-4 bg-gray-100/80 rounded-lg shadow-inner">
                    <h4 className="text-xl font-semibold font-oswald mb-2">Ingredients</h4>
                    {ingredients.length > 0 ? (
                        <ul className="pl-4 border-l-4 border-yellow-600 space-y-2">
                            {ingredients.map((ingredientBeer) => (
                                <li key={ingredientBeer.id_ingredient} className="flex items-center gap-2">
                                    <span className="text-yellow-700 font-semibold">{ingredientBeer.ingredient_type}:</span>
                                    <span>{ingredientBeer.ingredient_name} ({ingredientBeer.ingredient_percentage}%)</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 italic">No ingredients available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

