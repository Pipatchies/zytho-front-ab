import { useEffect, useState } from "react";
import { BeerResBody } from "../../interfaces/beerInterface";
import { getBeers } from "../../services/beersService";

export const useBeer = () => {
    const [beers, setBeers] = useState<BeerResBody[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBeers = async () => {
            try {
                const data = await getBeers();
                console.log("Données récupérées:", data); 
                setBeers(data);
            } catch (err: any) {
                setError("Erreur lors de la récupération des bières.");
            } finally {
                    setLoading(false);
            }
        };

        fetchBeers();
    
    }, []);

    return {
        beers,
        loading,
        error,
    };
};