import Link from "next/link";
import {Pokeball} from "../../public/assets";
import Image from "next/image";

const Home = () => {
    return (
        <div className='w-full min-h-screen bg-gradient-to-r from-red-50 to-green-50 via-blue-50'>
            <div className='min-h-screen flex items-center justify-center'>
                <div className="flex flex-col justify-between text-center items-center">
                    <div className="flex gap-5 justify-between mb-10">
                        <Image src={Pokeball} alt="pokeball" width={70} height={50}/>
                        <h1 className="text-7xl font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-center ml-2">
                            Kopémon
                        </h1>
                    </div>
                    <p className='text-sm text-gray-500'>Made by Fiantso Harena 🚀</p>
                    <div className='flex justify-between gap-5 mt-10'>
                        <Link href={"/server"} className='bg-pink-500 text-white rounded-lg hover:shadow-2xl transition-all px-5 py-2 font-semibold text-sm'>Use server</Link>
                        <Link href={"/client"} className='bg-white rounded-lg hover:shadow-2xl transition-all px-5 py-2 font-semibold text-sm'>Use client</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
