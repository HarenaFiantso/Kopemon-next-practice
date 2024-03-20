import React from "react";

const fetchPokemonList = async () => {
    const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`, {
        method: 'GET'
    })
    return response.json();
}

const PokemonGrid: React.FC = async () => {
    const pokemonList = await fetchPokemonList();
    return (
        <div className="p-5 mt-5">
            <h1 className='text-3xl font-semibold text-center text-white mb-10'>See all Pokemon</h1>
            <div className="grid gap-5 grid-cols-5 text-center">
                {pokemonList.results.map((pokemon: Pokemon, index: number) => (
                    <div key={index} className='bg-white flex flex-col items-center text-center bg-opacity-15 rounded-lg shadow-2xl p-5'>
                        <h1 className='text-white capitalize font-semibold mb-5'>
                            {pokemon.name}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PokemonGrid;