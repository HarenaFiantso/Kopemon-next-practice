const POKEMON_API: string = 'https://pokeapi.co/api/v2/';

export async function getPokemonList() {
    const response: Response = await fetch(POKEMON_API + 'pokemon?limit=50&offset=0');
    const data: JSON = await response.json();
    return data;
}

export async function getPokemon(name: string) {
    const response: Response = await fetch(POKEMON_API + 'pokemon/' + name);
    const data: JSON = await response.json();
    return data;
}