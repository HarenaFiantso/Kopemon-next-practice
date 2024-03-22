'use client';

import PokemonBasicDetails from '@/component/pokemonBasicDetails';
import { fetchPokemonInfo } from '@/lib/api';
import axios from 'axios';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiLeftArrowCircle } from 'react-icons/bi';

type PokemonDetail = {
  id: string | undefined;
  name: string;
  types: { type: { name: string } }[];
  weight: number;
  height: number;
};

export default function PokemonDetails() {
  const pathname: string = usePathname();
  const pokemonId: string | undefined = pathname.split('/').pop();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    fetchPokemonInfo(pokemonId).then(setPokemonInfo);
  }, [pokemonId]);

  return (
    <div className='min-h-screen bg-gradient-to-r from-red-50 via-blue-50 to-green-50 px-4 pb-4 pt-12'>
      {pokemonInfo ? (
        <>
          <div className='flex w-full items-center justify-center'>
            <div className='absolute left-20 flex items-center gap-5'>
              <Link href={'/client'}>
                <BiLeftArrowCircle size={30} className='text-orange-700' />
              </Link>
            </div>
            <h1 className='rounded-md bg-pink-500 px-5 py-2 text-4xl capitalize text-gray-100'>
              <span className='font-bold text-pink-300'>#{pokemonId}</span> {pokemonInfo.name}
            </h1>
          </div>
          <div className='px-12 pb-20 text-gray-800'>
            <PokemonBasicDetails
              id={pokemonId}
              name={pokemonInfo.name}
              types={pokemonInfo.types}
              weight={pokemonInfo.weight}
              height={pokemonInfo.height}
            />
          </div>
        </>
      ) : (
        <div className='text-center text-xl font-semibold'>Loading...</div>
      )}
    </div>
  );
}
