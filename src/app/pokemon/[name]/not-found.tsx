// Imports
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center pb-24'>
      <Image src="/pokeball-open.svg" alt="not-found" width={100} height={100}/>
      <span className='text-lg leading-none mt-4'>Pokémon not found!</span>
      <Link href="/" className="mt-2 hover:underline">Return to Home</Link>
    </div>
  )
}