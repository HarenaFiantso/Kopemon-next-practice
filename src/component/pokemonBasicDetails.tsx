import "@reach/dialog/styles.css";
import Image from "next/image";

export default function PokemonBasicDetails({ id, name, weight, height, types }: PokemonDetail) {
    const pokemonTypes: string[] = types.map(t => t.type.name)

    return (
        <div className='flex flex-col items-center py-5 px-4 h-full w-full overflow-hidden'>
            <div className='flex justify-center items-center w-full mt-8 flex-col h-full'>
                <div className='w-3/4 h-full flex justify-center'>
                    <div className='divTableBody'>
                        <div className="divTableRow flex mb-5">
                            <div className="divTableCell w-20 text-gray-600 text-right mr-6">ID</div>
                            <div className=" w-2/3 divTableCell">#{id}</div>
                        </div>
                        <div className="divTableRow flex mb-5">
                            <div className="divTableCell w-20 text-gray-600 text-right mr-6">Height</div>
                            <div className=" w-2/3 divTableCell">{height / 10} m</div>
                        </div>
                        <div className="divTableRow flex mb-5">
                            <div className="divTableCell w-20 text-gray-600 text-right mr-6">Weight</div>
                            <div className=" w-2/3 divTableCell">{weight / 10} kgs</div>
                        </div>
                        <div className="divTableRow flex mb-4">
                            <div className="divTableCell w-20 text-gray-600 text-right mr-6">Type</div>
                            <div className=" divTableCell w-2/3">
                                <div className='flex flex-wrap'>
                                    {pokemonTypes.map(type =>
                                        <div
                                            className={`flex items-center capitalize mb-2 mr-2 ${type} justify-center text-white rounded px-1`}
                                            key={type}>
												<span className={`icon mr-2`}>
													<Image src={`/icons/${type}.svg`} alt='type'/>
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
        </div>
    )
}