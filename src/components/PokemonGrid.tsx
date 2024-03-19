'use client'

import React, {useState, useEffect} from 'react';

type Pokemon = {
    name: string;
    url: string
}

const PokemonGrid = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    const fetchPokemonList = async () => {
        try {
            const response: Response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
            if (response.ok) {
                const {results} = await response.json();
                console.log(results);
                setPokemonList(results);
            } else {
                console.error('Failed to retrieve pokemon list:', response.statusText);
            }
        } catch (error) {
            console.error('Failed to retrieve pokemon list:', error);
        }
    };

    useEffect(() => {
        fetchPokemonList();
    }, []);

    return (
        <>
            {pokemonList.map(item => (
                <div key={item.url}>
                    {item.name}
                </div>
            ))}
        </>
    );
};

export default PokemonGrid;
