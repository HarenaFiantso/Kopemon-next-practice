import Image from 'next/image';

type PokemonDetail = {
  id: string | undefined;
  name: string;
  types: { type: { name: string } }[];
  weight: number;
  height: number;
};

export default function PokemonTableDetails({ id, name, weight, height, types }: PokemonDetail) {
  const pokemonTypes: string[] = types.map((t) => t.type.name);

  return (
    <div>
      <div className='mb-5 flex'>
        <h1 className=' mr-6 w-20 text-right text-2xl font-bold text-gray-500'>ID</h1>
        <div className=' w-2/3 font-bold'>#{id}</div>
      </div>
      <div className=' mb-5 flex'>
        <h1 className=' mr-6 w-20 text-right text-2xl font-bold text-gray-500'>Name</h1>
        <div className=' w-2/3 font-bold'>{name}</div>
      </div>
      <div className=' mb-5 flex'>
        <div className=' mr-6 w-20 text-right text-2xl font-bold text-gray-500'>Height</div>
        <div className='  w-2/3 font-bold'>{height / 10} m</div>
      </div>
      <div className=' mb-5 flex'>
        <div className=' mr-6 w-20 text-right text-2xl font-bold text-gray-500'>Weight</div>
        <div className=' w-2/3 font-bold'>{weight / 10} kgs</div>
      </div>
      <div className=' mb-4 flex'>
        <div className=' mr-6 w-20 text-right text-2xl font-bold text-gray-500'>Type</div>
        <div className='  w-2/3'>
          <div className='flex flex-wrap'>
            {pokemonTypes.map((type: string) => (
              <div
                className={`mb-2 mr-2 flex items-center capitalize ${type} justify-center px-5 py-2 text-white`}
                key={type}
              >
                <span className={`icon mr-2`}>
                  <Image src={`/assets/${type}.svg`} alt='type' width={400} height={400} />
                </span>
                <span className=''>{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
