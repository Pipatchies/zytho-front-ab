// Contenu de la réponse, incluant des informations supplémentaires
export interface BeerResBody {
    id: number;
    name: string;
    description: string;
    abv: number;
    price: string;
    id_brewery: number;
    created_at: Date;
  	updated_at: Date;
}