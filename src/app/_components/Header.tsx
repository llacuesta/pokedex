// Imports
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <header className="flex p-4 px-12 bg-white/85 shadow-lg backdrop-blur-sm fixed w-full">
      <Link href="/" className="flex gap-4">
        {/* Logo */}
        <Image src="/pokedex.svg" alt="logo" width={50} height={50}/>

        {/* Name */}
        <div className="flex flex-col gap-1 justify-center">
          <h1 className="text-2xl leading-none">Pokédex</h1>
          <span className="text-sm leading-none">A Pokémon Database</span>
        </div>
      </Link>

      {/* Search */}
    </header>
  )
}

export default Header
