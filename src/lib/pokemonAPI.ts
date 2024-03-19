const POKEMON_API: string = 'https://pokeapi.co/api/v2/';

export async function getPokemonList() {
    const response: Response = await fetch(POKEMON_API + 'pokemon?limit=50&offset=0');
    const data: JSON = await response.json();
    return data;
}