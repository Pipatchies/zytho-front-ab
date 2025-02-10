import { useEffect, useState } from "react";
import { BeerResBody } from "../../interfaces/beerInterface";
import { getBeers } from "../../services/beersService";
import { getPhotoByBeerId } from "../../services/photosService";

export const useBeer = () => {
    const [beers, setBeers] = useState<BeerResBody[]>([]);
    const [filteredBeers, setFilteredBeers] = useState<BeerResBody[]>([]);
    const [search, setSearch] = useState<string>("");
    const [abvRange, setAbvRange] = useState<number>(4);
    const [priceRange, setPriceRange] = useState<number>(18);
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
                setFilteredBeers(beersWithPhotos);
            } catch (err: any) {
                setError("Erreur lors de la récupération des bières et des photos.");
            } finally {
                setLoading(false);
            }
        };

        fetchBeers();
    }, []);

    const filterBeers = (searchQuery: string, abv: number, price: number) => {
        const beerQuery = searchQuery.toLowerCase();

        const results = beers.filter((beer) => {
            const matchesSearch =
                beer.name.toLowerCase().includes(beerQuery);

                const matchesAbv = beer.abv >= abv; 
                const matchesPrice = beer.price <= price; 

            return matchesSearch && matchesAbv && matchesPrice;
        });

        setFilteredBeers(results);
    };

    useEffect(() => {
        filterBeers(search, abvRange, priceRange);
    }, [search, abvRange, priceRange, beers]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleAbvRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAbvRange(parseFloat(e.target.value));
    };

    const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceRange(parseFloat(e.target.value));
    };

    return {
        beers: filteredBeers,
        loading,
        error,
        handleSearch,
        handleAbvRangeChange,
        handlePriceRangeChange,
        abvRange,
        priceRange
    };
};



