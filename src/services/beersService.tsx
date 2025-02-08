import { BeerResBody } from "../interfaces/beerInterface";
import { apiClient } from "./apiClient";

// Fonction pour récupérer toutes les bières
export const getBeers = async (): Promise<BeerResBody[]> => {
    try {
        const response = await apiClient.get<BeerResBody[]>(`/beers`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des bières :", error);
        throw error;
    }
};

// Fonction pour récupérer une bière selon son ID
export const getBeerById = async (id: number): Promise<BeerResBody> => {
    try {
        const response = await apiClient.get<BeerResBody>(`/beers/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération de la bière par son ID :", error);
        throw error;
    }
};
