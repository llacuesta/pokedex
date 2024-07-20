// Imports
import { HOST, Pokemon } from "@/lib/data";

export const useFetchAllPokemon = async (limit?: number): Promise<Pokemon[]> => {
    let res
    if (limit) {
        res = await fetch(`${HOST}pokemon?limit=${limit}`)
    } else {
        res = await fetch(`${HOST}pokemon?limit=10000`)
    }

    // check if request was successful
    if (!res.ok) {
        throw new Error('Error! Unable to fetch data.')
    }
    const data = await res.json()
    
    // fetch individual pokemon from the return data
    let pokemonList: Pokemon[] = []
    for (const element of data.results) {
        const res = await fetch(element.url)
        
        // check if request was successful
        if (!res.ok) {
            throw new Error('Error! Unable to fetch data.')
        }

        const pokemon = await res.json()
        pokemonList.push({
            id: pokemon.id,
            name: pokemon.name,
            imgSrc: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, "0")}.png`,
            types: pokemon.types.map((type: any) => ({ name: type.type.name }))
        })
    }

    return pokemonList
}