import { useEffect, useState } from "react";
import { BeerResBody } from "../../../interfaces/beerInterface";
import { IngredientsBeerResBody } from "../../../interfaces/ingredientsBeerInterface";
import { getBeerById } from "../../../services/beersService";
import { getPhotoByBeerId } from "../../../services/photosService";
import { getIngredientsByBeerId } from "../../../services/ingredientsBeerService";

export const useBeerById = (beerId: number) => {
  const [beer, setBeer] = useState<BeerResBody | null>(null);
  const [ingredients, setIngredients] = useState<IngredientsBeerResBody[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!beerId) return;

    const fetchBeer = async () => {
      setLoading(true);
      try {
        const [beerData, ingredientsData, photosData] = await Promise.all([
          getBeerById(beerId),
          getIngredientsByBeerId(beerId),
          getPhotoByBeerId(beerId),
        ]);

        setBeer({ ...beerData, photos: photosData });
        setIngredients(ingredientsData);
      } catch (err: any) {
        setError(
          "Erreur lors de la récupération de la bière et/ou des ingrédients."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBeer();
  }, [beerId]);

  return { 
    beer, 
    ingredients, 
    loading, 
    error };
};
