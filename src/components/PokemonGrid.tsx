'use client'

import React, {useState, useEffect} from 'react';
import Image from "next/image";
import {Pokemon, Url} from '@/type/client';

const PokemonGrid = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [url, setUrl] = useState<Url[]>([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch pokemon list');
                }
                return response.json();
            })
            .then(data => {
                setPokemonList(data.results);
            })
            .catch(error => {
                console.error('Failed to retrieve pokemon list:', error);
            });
    }, []);

    useEffect(() => {
        const fetchSprites = () => {
            if (pokemonList.length > 0) {
                const promises = pokemonList.map(async item => {
                    const response = await fetch(item.url);
                    return await response.json();
                });
                Promise.all(promises)
                    .then(data => {
                        console.log(data)
                        setUrl(data);
                    })
                    .catch(error => {
                        console.error('Failed to retrieve sprites:', error)
                    });
            }
        }
        fetchSprites();
    }, [pokemonList]);

    return (
        <div className="p-5 mt-5">
            <h1 className='text-3xl font-semibold text-center text-white mb-10'>See all Pokemon</h1>
            <div className="grid gap-5 grid-cols-5 text-center">
                {pokemonList.map((pokemon) => (
                    <>
                        {url.map((sprite) => (
                            <div key={pokemon.url} className='bg-white flex flex-col items-center text-center bg-opacity-15 rounded-lg shadow-2xl p-5'>
                                <Image src={sprite.sprites.front_default} alt='sprite' width={150} height={150}/>
                                <h1 className='text-white capitalize font-semibold mb-5'>
                                    {pokemon.name}
                                </h1>
                            </div>
                        ))
                        }
                    </>
                ))}
            </div>
        </div>
    )
        ;
};

export default PokemonGrid;
