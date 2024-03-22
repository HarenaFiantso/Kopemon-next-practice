import PokemonTableDetails from '@/component/PokemonTableDetails';
import Image from 'next/image';

type PokemonDetail = {
  id: string | undefined;
  name: string;
  types: { type: { name: string } }[];
  weight: number;
  height: number;
};

export default function PokemonBasicDetails({ id, name, weight, height, types }: PokemonDetail) {
  const paddedID: string | undefined = id?.toString().padStart(3, '0');

  return (
    <div className='mt-10 flex items-center justify-center'>
      <div className='mt-8 flex flex-col items-center justify-between gap-20 bg-white p-5 shadow-2xl'>
        <Image
          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${paddedID}.png`}
          alt='mainImage'
          width={500}
          height={500}
        />
        <PokemonTableDetails id={id} name={name} weight={weight} height={height} types={types} />
      </div>
    </div>
  );
}
