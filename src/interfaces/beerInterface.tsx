export interface BeerResBody {
    id: number;
    name: string;
    description: string;
    photos?: { id: number; url: string }[];
    abv: number;
    price: string;
    id_brewery: number;
    created_at: Date;
    updated_at: Date;
}
