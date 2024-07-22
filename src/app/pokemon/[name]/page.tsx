// Imports
import { fetchPokemonDetails, fetchPokemonPreview } from "@/lib/hooks"
import Details from "./_components/Details"
import Navigator from "./_components/Navigator"
import { notFound } from 'next/navigation'

type Props = {
  params: { name: string }
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.name.charAt(0).toUpperCase() + params.name.slice(1)} | Pokédex`,
  }
}

export default async function page({ params }: Props) {
  const pokemon = await fetchPokemonDetails(params.name)
  if (!pokemon) {
    notFound()
  }

  const previous = (pokemon.prev > 0) ? await fetchPokemonPreview(pokemon.prev) : undefined
  const next = (pokemon.prev < 10277) ? await fetchPokemonPreview(pokemon.next) : undefined

  return (
    <div className='h-screen w-full m-auto px-8 pt-20 flex flex-row items-center'>
      
      {/* <span>left</span> */}
      <div>
        {previous ? <Navigator id={previous.id} name={previous.name} sprite={previous.sprite} direction="left"/> : <></>}
      </div>
      <div className='w-3/5 m-auto flex'>
        <Details pokemon={pokemon}/>
      </div>
      <div>
        {next ? <Navigator id={next.id} name={next.name} sprite={next.sprite} direction="right"/> : <></>}
      </div>
    </div>
  )
}