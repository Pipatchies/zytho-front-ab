import { IngredientsBeerResBody } from "../interfaces/ingredientsBeerInterface";
import { apiClient } from "./apiClient"; 

export const getIngredientsByBeerId = async (beerId: number): Promise<IngredientsBeerResBody[]> => {
    try {
        const response = await apiClient.get<IngredientsBeerResBody[]>(`/ingredients/byBeer/${beerId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des ingrédients de la bière", error);
        throw error;
    }
};
