'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Pokemon = {
    name: string;
    url: string;
};

type PokemonDetail = {
    sprites: {
        front_default: string;
    };
};

const PokemonGrid = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
            .then(response => response.json())
            .then(data => setPokemonList(data.results));
    }, []);

    useEffect(() => {
        if (pokemonList.length > 0) {
            Promise.all(
                pokemonList.map(pokemon =>
                    fetch(pokemon.url).then(response => response.json())
                )
            ).then(data => {
                console.log(pokemonDetails);
                setPokemonDetails(data)
            });
        }
    }, [pokemonList]);

    return (
        <div className="p-5 mt-5">
            <h1 className='text-3xl font-semibold text-center text-white mb-10'>See all Pokemon</h1>
            <div className="grid gap-5 grid-cols-5 text-center">
                {pokemonDetails.map((pokemon, index) => (
                    <div key={pokemonList[index].url} className='bg-white flex flex-col items-center text-center bg-opacity-15 rounded-lg shadow-2xl p-5'>
                        <Image src={pokemon.sprites.front_default} alt='sprite' width={150} height={150}/>
                        <h1 className='text-white capitalize font-semibold mb-5'>
                            {pokemonList[index].name}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonGrid;
