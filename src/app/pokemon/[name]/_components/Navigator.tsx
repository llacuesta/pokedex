// Imports
import { PokemonPreview } from "@/lib/data";
import { MoveRight, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navigator({ id, name, sprite, direction }: PokemonPreview & { direction: string } ) {
  return (
    <Link href={`/pokemon/${name}`} className="group">
      <div className="flex flex-col items-center">
        <Image src={sprite} alt={`Sprite of ${name}`} width={100} height={100} className="transition group-hover:scale-110"/>
        <span className="text-sm group-hover:underline">{`#${id.toString().padStart(4, "0")}`}</span>
        <span className="font-bold leading-none">{name.toUpperCase()}</span>
        { direction === "left" ? <MoveLeft strokeWidth={1} className="transition group-hover:-translate-x-2"/> : <MoveRight strokeWidth={1} className="transition group-hover:translate-x-2"/> }
      </div>    
    </Link>
  )
}