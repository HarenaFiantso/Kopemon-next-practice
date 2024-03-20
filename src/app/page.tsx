import { Pokeball } from '../../public/assets';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-r from-red-50 via-blue-50 to-green-50'>
      <div className='flex min-h-screen items-center justify-center'>
        <div className='flex flex-col items-center justify-between text-center'>
          <div className='mb-10 flex justify-between gap-5'>
            <Image src={Pokeball} alt='pokeball' width={70} height={50} />
            <h1 className='ml-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-center text-7xl font-semibold text-transparent'>
              Kopémon
            </h1>
          </div>
          <p className='text-sm text-gray-500'>Made by Fiantso Harena 🚀</p>
          <div className='mt-10 flex justify-between gap-5'>
            <Link
              href={'/server'}
              className='rounded-lg bg-pink-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-2xl'
            >
              Use server
            </Link>
            <Link
              href={'/client'}
              className='rounded-lg bg-white px-5 py-2 text-sm font-semibold transition-all hover:shadow-2xl'
            >
              Use client
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
