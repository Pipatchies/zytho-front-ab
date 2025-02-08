import { useEffect, useState } from "react";
import { BeerResBody } from "../../interfaces/beerInterface";
import { getBeerById } from "../../services/beersService";
import { getPhotoByBeerId } from "../../services/photosService";

export const useBeerById = (beerId: number) => {
    const [beer, setBeer] = useState<BeerResBody | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!beerId) return;

        const fetchBeer = async () => {
            setLoading(true);
            try {
                const beerData = await getBeerById(beerId);
                const photos = await getPhotoByBeerId(beerId);
                setBeer({ ...beerData, photos });
            } catch (err: any) {
                setError("Erreur lors de la récupération de la bière.");
            } finally {
                setLoading(false);
            }
        };

        fetchBeer();
    }, [beerId]);

    return { beer, loading, error };
};


