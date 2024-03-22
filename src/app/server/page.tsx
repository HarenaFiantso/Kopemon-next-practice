import { Pokeball } from '../../../public/assets';
import { fetchPokemonList } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Pokemon = {
  name: string;
  url: string;
};

export default async function PokemonGrid() {
  const pokemonList: Pokemon[] = await fetchPokemonList(1);

  return (
    <div className='min-h-screen bg-gradient-to-r from-red-50 via-blue-50 to-green-50 px-4 pb-4 pt-12'>
      <div className='mb-10 flex flex-col items-center justify-center gap-5'>
        <div className='flex items-center gap-5'>
          <Image src={Pokeball} alt='pokeball' width={70} height={50} />
          <Link
            href={'/'}
            className='ml-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-center text-5xl font-semibold text-transparent'
          >
            Kopémon server
          </Link>
        </div>
        <p className='text-sm text-gray-500'>Welcome to Kopémon server component, see all Pokémon in one page</p>
      </div>
      <div className='mt-8 flex w-full flex-wrap items-center justify-center gap-10'>
        {pokemonList.map((pokemon: Pokemon) => {
          const pokemonId: string = pokemon.url.split('/')[6];
          const paddedPokemonId: string = pokemonId.padStart(3, '0');

          return (
            <Link href={`/server/${pokemonId}`} key={pokemonId}>
              <div className='m-1 flex w-40 cursor-pointer flex-col items-center rounded-lg bg-white p-3 text-center shadow-sm transition-all duration-300 hover:shadow-xl'>
                <div className='flex h-20 w-20 items-center justify-center md:h-24 md:w-24'>
                  <Image
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${paddedPokemonId}.png`}
                    alt='pokemon-thumbnail'
                    width={100}
                    height={100}
                    loading='lazy'
                  />
                </div>
                <h3 className='mt-2 w-full text-center text-xs font-semibold capitalize text-orange-700'>
                  {pokemon.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
