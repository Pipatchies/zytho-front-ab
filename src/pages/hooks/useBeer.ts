import { useEffect, useState } from "react";
import { BeerResBody } from "../../interfaces/beerInterface";
import { getBeers } from "../../services/beersService";
import { getPhotoByBeerId } from "../../services/photosService";

export const useBeer = () => {
    const [beers, setBeers] = useState<BeerResBody[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBeers = async () => {
            setLoading(true);
            try {
                const beerData = await getBeers();
                const beersWithPhotos = await Promise.all(
                    beerData.map(async (beer) => {
                        const photos = await getPhotoByBeerId(beer.id);
                        return { ...beer, photos };
                    })
                );
                setBeers(beersWithPhotos);  
            } catch (err: any) {
                setError("Erreur lors de la récupération des bières et des photos.");
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