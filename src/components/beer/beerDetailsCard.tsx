import { BeerResBody } from "../../interfaces/beerInterface";
import { IngredientsBeerResBody } from "../../interfaces/ingredientsBeerInterface";

export const BeerDetailsCard = ({ beer, ingredients }: { beer: BeerResBody, ingredients: IngredientsBeerResBody[] }) => {

    const beerImage: string = beer.photos && beer.photos.length > 0 ? beer.photos[0].url : "../assets/beers/punkIpa.png";

    return (
        <div className="container w-9/12 mx-auto my-16 p-6 bg-white rounded-lg shadow-lg ring-2 ring-yellow-600 flex flex-col md:flex-row items-center justify-center">
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
            <h2 className="text-4xl font-semibold text-center md:text-left font-oswald">{beer.name}</h2>        
            {/* Description de la bière */}
            <p className="text-lg text-center md:text-left text-gray-700 font-nunito mt-4">{beer.description}</p>
            <div className="mt-6">
                <h4 className="text-xl font-semibold font-oswald">ABV (Alcohol By Volume)</h4>
                <p className="text-base">{beer.abv} %</p>
            </div>
            <div className="mt-4">
                <h4 className="text-xl font-semibold font-oswald">Price</h4>
                <p className="text-base">{beer.price} €</p>
            </div>

            {/* Liste des ingrédients */}
            <div className="mt-6">
                    <h4 className="text-xl font-semibold font-oswald mb-2">Ingredients</h4>
                    <ul className="list-disc list-inside text-base text-gray-900">
                        {ingredients.length > 0 ? (
                            ingredients.map((ingredientBeer) => (
                                <li key={ingredientBeer.id_ingredient}>
                                    <span className="underline">{ingredientBeer.ingredient_type}</span> : {ingredientBeer.ingredient_name} ({ingredientBeer.ingredient_percentage}%)
                                </li>
                            ))
                        ) : (
                            <p className="text-gray-500">No ingredients available</p>
                        )}
                    </ul>
                </div>
        </div>
    </div>
    );
};
