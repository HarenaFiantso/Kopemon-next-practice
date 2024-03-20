'use client'

import React, {useEffect, useState} from "react";
import Image from "next/image";

const ITEMS_PER_PAGE: number = 10;

const fetchPokemonList = async (currentPage: number): Promise<Pokemon[]> => {
    const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_PER_PAGE}&offset=${(currentPage - 1) * ITEMS_PER_PAGE}`);
    const data = await response.json();
    return data.results;
};

const fetchPokemonDetails = async (pokemonList: Pokemon[]): Promise<PokemonDetail[]> => {
    return await Promise.all(
        pokemonList.map((pokemon: Pokemon) =>
            fetch(pokemon.url).then(response => response.json())
        )
    );
};

const PokemonGrid: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        fetchPokemonList(currentPage).then(setPokemonList);
    }, [currentPage]);

    useEffect(() => {
        if (pokemonList.length > 0) {
            fetchPokemonDetails(pokemonList).then(setPokemonDetails);
        }
    }, [pokemonList]);

    const lastPage: number = Math.ceil(pokemonList.length / ITEMS_PER_PAGE);

    const changePage = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const nextPage = () => {
        if (currentPage < lastPage) {
            setCurrentPage((prevState: number) => prevState + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevState: number) => prevState - 1);
        }
    };


    return (
        <div className="p-5 mt-5">
            <h1 className='text-3xl font-semibold text-center text-white mb-10'>See all Pokemon</h1>
            <div className="grid gap-5 grid-cols-5 text-center">
                {pokemonDetails.map((pokemon: PokemonDetail, index: number) => (
                    <div key={pokemonList[index].url}
                         className='bg-white flex flex-col items-center text-center bg-opacity-15 rounded-lg shadow-2xl p-5'>
                        <Image src={pokemon.sprites.front_default} alt='sprite' width={150} height={150}/>
                        <h1 className='text-white capitalize font-semibold mb-5'>
                            {pokemonList[index].name}
                        </h1>
                    </div>
                ))}
            </div>
            {/* Pagination */}
            <div className='w-full mt-10'>
                <div className="text-white flex gap-5 justify-evenly items-center">
                    <button onClick={prevPage} disabled={currentPage === 1}
                            className='p-2 rounded-lg font-semibold bg-white text-black cursor-pointer'>Previous
                    </button>
                    {Array.from({length: lastPage}, (_, index) => (
                        <button key={index} onClick={() => changePage(index + 1)}
                                className={currentPage === index + 1 ? 'text-orange-500' : ''}>
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={nextPage} disabled={currentPage === lastPage}
                            className='p-2 rounded-lg font-semibold bg-white text-black cursor-pointer'>Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokemonGrid;
