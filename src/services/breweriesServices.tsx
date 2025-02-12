import { BreweryResBody } from "../interfaces/breweryInterface";
import { apiClient } from "./apiClient";

// Fonction pour récupérer toutes les brasseries
export const getBreweries = async (): Promise<BreweryResBody[]> => {
    try {
        const response = await apiClient.get<BreweryResBody[]>(`/brewerys`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des brasseries :", error);
        throw error;
    }
};

// Fonction pour récupérer une brasserie selon son ID
export const getBeerById = async (id: number): Promise<BreweryResBody> => {
    try {
        const response = await apiClient.get<BreweryResBody>(`/brewerys/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération de la brasserie par son ID :", error);
        throw error;
    }
};