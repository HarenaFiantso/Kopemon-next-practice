const POKEMON_API: string = 'https://pokeapi.co/api/v2/';

export const getPokemonList = async () => {
    const response: Response = await fetch(POKEMON_API + 'pokemon?limit=50&offset=0', {
        method: 'GET'
    });
    const data: JSON = await response.json();
    return data;
}

export const getPokemon = async (name: string) => {
    const response: Response = await fetch(POKEMON_API + 'pokemon/' + name, {
        method: 'GET'
    });
    const data: JSON = await response.json();
    return data;
}