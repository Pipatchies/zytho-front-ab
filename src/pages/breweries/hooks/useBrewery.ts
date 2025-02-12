import { useEffect, useState } from "react";
import { BreweryResBody } from "../../../interfaces/breweryInterface";
import { getBreweries } from "../../../services/breweriesServices";

export const useBrewery = () => {
    const [breweries, setBreweries] = useState<BreweryResBody[]>([]);
    const [filteredBreweries, setFilteredBreweries] = useState<BreweryResBody[]>([]);
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBreweries = async () => {
            setLoading(true);
            try {
                const breweryData = await getBreweries();
                setBreweries(breweryData);
                setFilteredBreweries(breweryData);
            } catch (err: any) {
                setError("Erreur lors de la récupération des brasseries.");
            } finally {
                setLoading(false);
            }
        };

        fetchBreweries();
    }, []);

    const filterBreweries = () => {
        const breweryQuery = search.toLowerCase();
        const results = breweries.filter((brewery) =>
            brewery.name.toLowerCase().includes(breweryQuery)
        );
        setFilteredBreweries(results);
    };

    useEffect(() => {
        filterBreweries();
    }, [search, breweries]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return {
        breweries: filteredBreweries,
        loading,
        error,
        handleSearch,
        search,
    };
};
