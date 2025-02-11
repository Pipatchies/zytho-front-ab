import { useEffect, useState } from "react";
import { BeerResBody } from "../../interfaces/beerInterface";
import { getBeers } from "../../services/beersService";
import { getPhotoByBeerId } from "../../services/photosService";

export const useBeer = () => {
    const [beers, setBeers] = useState<BeerResBody[]>([]);
    const [filteredBeers, setFilteredBeers] = useState<BeerResBody[]>([]);
    const [search, setSearch] = useState<string>("");
    const [abvRange, setAbvRange] = useState<string>("all");
    const [priceRange, setPriceRange] = useState<string>("all");
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

    const filterBeers = () => {
        const beerQuery = search.toLowerCase();

        const results = beers.filter((beer) => {
            
            const matchesSearch = beer.name.toLowerCase().includes(beerQuery);

            let matchesAbv = true;
            if (abvRange !== "all") {
                if (abvRange === "under5") {
                    matchesAbv = beer.abv < 5;
                } else if (abvRange === "5to10") {
                    matchesAbv = beer.abv >= 5 && beer.abv <= 10;
                } else if (abvRange === "over10") {
                    matchesAbv = beer.abv > 10;
                }
            }

            let matchesPrice = true;
            if (priceRange !== "all") {
                if (priceRange === "under10") {
                    matchesPrice = beer.price < 10;
                } else if (priceRange === "10to15") {
                    matchesPrice = beer.price >= 10 && beer.price <= 15;
                } else if (priceRange === "over15") {
                    matchesPrice = beer.price > 15;
                }
            }

            return matchesSearch && matchesAbv && matchesPrice;
        });

        setFilteredBeers(results);
    };

    useEffect(() => {
        filterBeers();
    }, [search, abvRange, priceRange, beers]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleAbvRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAbvRange(e.target.value);
    };

    const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPriceRange(e.target.value);
    };

    return {
        beers: filteredBeers,
        loading,
        error,
        handleSearch,
        handleAbvRangeChange,
        handlePriceRangeChange,
        abvRange,
        priceRange,
    };
};





