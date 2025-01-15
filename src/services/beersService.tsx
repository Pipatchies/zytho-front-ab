import { BeerResBody } from "../interfaces/beerInterface";
import { apiClient } from "./apiClient";

export const getBeers = async (): Promise<BeerResBody[]> => {
    try {
        const response = await apiClient.get<BeerResBody[]>(`/beers`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des bières :", error);
        throw error;
    }
};
