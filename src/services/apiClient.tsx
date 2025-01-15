import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});


apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error(
                `Erreur API : ${error.response.status} - ${error.response.data.message || error.message}`
            );
        } else {
            console.error(`Erreur de connexion : ${error.message}`);
        }
        return Promise.reject(error);
    }
);