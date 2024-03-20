'use client'

import {useEffect, useState} from "react";
import axios from "axios";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {BiLeftArrowCircle} from "react-icons/bi";
import PokemonBasicDetails from "@/component/pokemonBasicDetails";

export default function PokemonDetails() {
    const pathname: string = usePathname();
    const pokemonId: string | undefined = pathname.split("/").pop()
    const [pokemonInfo, setPokemonInfo] = useState<PokemonDetail | null>(null);

    useEffect(() => {
        const fetchPokemonInfo = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then(pokemonResponse => {
                    setPokemonInfo(pokemonResponse.data);
                })
                .catch(error => {
                    console.error('Error fetch data:', error);
                });
        }
        fetchPokemonInfo();
    }, [pokemonId]);

    return (
        <div className='px-4 pt-12 pb-4 bg-gradient-to-r from-red-50 to-green-50 via-blue-50 min-h-screen'>
            {pokemonInfo ? (
                <>
                    <div className='w-full flex justify-center items-center'>
                        <div className='absolute left-20 flex items-center gap-5'>
                            <Link href={'/client'}>
                                <BiLeftArrowCircle size={30} className='text-orange-700'/>
                            </Link>
                        </div>
                        <h1 className='bg-pink-500 px-5 capitalize text-gray-100 py-2 rounded-md text-4xl'><span
                            className='text-pink-300 font-bold'>#{pokemonId}</span> {pokemonInfo.name}</h1>
                    </div>
                    <div className='text-gray-800 px-12 pb-20'>
                        <PokemonBasicDetails id={pokemonId} name={pokemonInfo.name} types={pokemonInfo.types}
                                weight={pokemonInfo.weight} height={pokemonInfo.height} />
                    </div>
                </>
            ) : (
                <div className='text-xl font-semibold text-center'>
                    Loading...
                </div>
            )}
        </div>
    )
}