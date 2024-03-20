import "@reach/dialog/styles.css";
import Image from "next/image";

export default function PokemonBasicDetails({id, name, weight, height, types}: PokemonDetail) {
    const pokemonTypes: string[] = types.map(t => t.type.name)
    const paddedID: string | undefined = id?.toString().padStart(3, '0');

    return (
        <div className='mt-10 flex justify-center items-center'>
            <div className='flex flex-col justify-between bg-white shadow-2xl gap-20 p-5 items-center mt-8'>
                <Image
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${paddedID}.png`}
                    alt="mainImage" width={500} height={500}/>
                <div className="divTableBody">
                    <div className="divTableRow flex mb-5">
                        <h1 className="divTableCell w-20 text-2xl font-bold text-right text-gray-500 mr-6">ID:</h1>
                        <div className="font-bold w-2/3 divTableCell">#{id}</div>
                    </div>
                    <div className="divTableRow flex mb-5">
                        <div className="divTableCell w-20 text-2xl font-bold text-right text-gray-500 mr-6">Height</div>
                        <div className=" font-bold w-2/3 divTableCell">{height / 10} m</div>
                    </div>
                    <div className="divTableRow flex mb-5">
                        <div className="divTableCell w-20 text-2xl font-bold text-right text-gray-500 mr-6">Weight</div>
                        <div className="font-bold w-2/3 divTableCell">{weight / 10} kgs</div>
                    </div>
                    <div className="divTableRow flex mb-4">
                        <div className="divTableCell w-20 text-2xl font-bold text-right text-gray-500 mr-6">Type</div>
                        <div className=" divTableCell w-2/3">
                            <div className='flex flex-wrap'>
                                {pokemonTypes.map((type: string) =>
                                    <div
                                        className={`flex items-center capitalize mb-2 mr-2 ${type} justify-center text-white py-2 px-5`}
                                        key={type}>
												<span className={`icon mr-2`}>
													<img src={`/assets/${type}.svg`} alt='type'/>
												</span>
                                        <span className=''>{type}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}