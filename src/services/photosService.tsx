import { apiClient } from "./apiClient";
import { PhotoResBody } from "../interfaces/photoInterface";

// Fonction pour récupérer les photos associées à une bière spécifique par ID
export const getPhotoByBeerId = async (beerId: number): Promise<PhotoResBody[]> => {
    try {
        const response = await apiClient.get(`/photos/byBeer/${beerId}`)
        
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des photos", error);
        throw error;
    }
};


// Fonction pour récupérer toutes les photos
export const getPhotos = async (): Promise<PhotoResBody[]> => {
    try {
        const response = await apiClient.get('/photos'); 
        return response.data; 
    } catch (error) {
        console.error("Erreur lors de la récupération de toutes les photos", error);
        throw error;
    }
    };
