import '@reach/dialog/styles.css';
import Image from 'next/image';

export default function PokemonBasicDetails({ id, name, weight, height, types }: PokemonDetail) {
  const pokemonTypes: string[] = types.map((t) => t.type.name);
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
        <div className='divTableBody'>
          <div className='divTableRow mb-5 flex'>
            <h1 className='divTableCell mr-6 w-20 text-right text-2xl font-bold text-gray-500'>ID:</h1>
            <div className='divTableCell w-2/3 font-bold'>#{id}</div>
          </div>
          <div className='divTableRow mb-5 flex'>
            <div className='divTableCell mr-6 w-20 text-right text-2xl font-bold text-gray-500'>Height</div>
            <div className=' divTableCell w-2/3 font-bold'>{height / 10} m</div>
          </div>
          <div className='divTableRow mb-5 flex'>
            <div className='divTableCell mr-6 w-20 text-right text-2xl font-bold text-gray-500'>Weight</div>
            <div className='divTableCell w-2/3 font-bold'>{weight / 10} kgs</div>
          </div>
          <div className='divTableRow mb-4 flex'>
            <div className='divTableCell mr-6 w-20 text-right text-2xl font-bold text-gray-500'>Type</div>
            <div className=' divTableCell w-2/3'>
              <div className='flex flex-wrap'>
                {pokemonTypes.map((type: string) => (
                  <div
                    className={`mb-2 mr-2 flex items-center capitalize ${type} justify-center px-5 py-2 text-white`}
                    key={type}
                  >
                    <span className={`icon mr-2`}>
                      <img src={`/assets/${type}.svg`} alt='type' />
                    </span>
                    <span className=''>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
