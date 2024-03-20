import React from 'react';

const fetchPokemonList = async () => {
  const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`, {
    method: 'GET',
  });
  return response.json();
};

const PokemonGrid: React.FC = async () => {
  const pokemonList = await fetchPokemonList();
  return (
    <div className='mt-5 p-5'>
      <h1 className='mb-10 text-center text-3xl font-semibold text-white'>See all Pokemon</h1>
      <div className='grid grid-cols-5 gap-5 text-center'>
        {pokemonList.results.map((pokemon: Pokemon, index: number) => (
          <div
            key={index}
            className='flex flex-col items-center rounded-lg bg-white bg-opacity-15 p-5 text-center shadow-2xl'
          >
            <h1 className='mb-5 font-semibold capitalize text-white'>{pokemon.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonGrid;
