import Link from "next/link";

export default function Home() {
  return (
      <div className="w-[100vw] text-center h-[100vh] flex flex-col items-center justify-center gap-10">
        <div className='flex gap-5'>
          <Link href={"/server"} className='bg-white px-10 py-4 rounded-xl font-semibold text-[16px] text-black'>Use server</Link>
          <Link href={"/client"} className='bg-[#CC7257FF] px-10 py-4 rounded-xl font-semibold text-[16px] text-white'>Use client</Link>
        </div>
      </div>
  );
}
