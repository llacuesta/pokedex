// Imports
import { fetchPokemonDetails } from "@/lib/hooks"
import Details from "./_components/Details"

type Props = {
  params: { name: string }
}

export default async function page({ params }: Props) {
  const pokemon = await fetchPokemonDetails(params.name)

  return (
    <div className='h-screen w-3/5 m-auto pt-[120px] flex flex'>
      <Details pokemon={pokemon}/>
    </div>
  )
}