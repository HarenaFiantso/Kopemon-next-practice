'use client'

import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {Pokeball} from "../../../public/assets";

const ITEMS_PER_PAGE: number = 50;

const fetchPokemonList = async (currentPage: number): Promise<Pokemon[]> => {
    const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_PER_PAGE}&offset=${(currentPage - 1) * ITEMS_PER_PAGE}`);
    const data = await response.json();
    return data.results;
};

const PokemonGrid: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        fetchPokemonList(currentPage).then(setPokemonList);
    }, [currentPage]);

    return (
        <div className='px-4 pt-12 pb-4 bg-gradient-to-r from-red-50 to-green-50 via-blue-50 min-h-screen'>
            <div className="flex flex-col gap-5 items-center justify-center mb-10">
                <div className="flex items-center gap-5">
                    <Image src={Pokeball} alt="pokeball" width={70} height={50}/>
                    <Link href={'/'} className="text-5xl font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-center ml-2">
                        Kopémon
                    </Link>
                </div>
                <p className='text-sm text-gray-500'>Welcome to Kopémon, see all Pokémon in one page</p>
            </div>
            <div className='flex justify-center items-center gap-10 flex-wrap w-full mt-8'>
                {pokemonList.map((pokemon: Pokemon) => {
                    const pokemonId: string = pokemon.url.split('/')[6];
                    const paddedPokemonId: string = pokemonId.padStart(3, "0");

                    return (
                        <Link href={`/client/${pokemonId}`} key={pokemonId}>
                            <div
                                className="w-40 bg-white p-3 m-1 rounded-lg flex flex-col items-center text-center cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="w-20 h-20 md:w-24 md:h-24 flex justify-center items-center">
                                    <Image
                                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${paddedPokemonId}.png`}
                                        alt="pokemon-thumbnail"
                                        width={100}
                                        height={100}
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="capitalize mt-2 text-orange-700 font-semibold text-center text-xs w-full">
                                    {pokemon.name}
                                </h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default PokemonGrid;
