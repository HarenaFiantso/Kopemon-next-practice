interface Pokemon {
    name: string;
    url: string;
}

interface PokemonDetail {
    name: string;
    types: { type: { name: string } }[];
    weight: number;
    height: number;
}