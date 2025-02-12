import { useEffect, useState } from "react";
import { getBeersByBreweryId } from "../../../services/beersService";
import { BeerResBody } from "../../../interfaces/beerInterface";
import { getPhotoByBeerId } from "../../../services/photosService";

export const useBeerByBreweryId = (breweryId: number) => {
    const [beers, setBeers] = useState<BeerResBody[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBeers = async () => {
            setLoading(true);
            try {
                const beersByBreweryData = await getBeersByBreweryId(breweryId);

                const beersWithPhotos = await Promise.all(
                    beersByBreweryData.map(async (beer) => {
                        const photos = await getPhotoByBeerId(beer.id);
                        return { ...beer, photos };
                    })
                );
                
                setBeers(beersWithPhotos);
            } catch (err) {
                setError("Impossible de récupérer les bières de cette brasserie.");
            } finally {
                setLoading(false);
            }
        };

        fetchBeers();
    }, [breweryId]);

    return {
        beers,
        loading,
        error,
    };
};
