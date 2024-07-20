// Imports
import { HOST, Pokemon } from "@/lib/data";

export const useFetchPokemon = async (limit?: number): Promise<Pokemon[]> => {
    // request pokemon list
    const res = await fetch(`${HOST}pokemon?limit=${limit || 10000}`);
    if (!res.ok) {
        throw new Error('Error! Unable to fetch data.')
    }
    const data = await res.json()
    
    // fetch individual pokemon from the return data
    let pokemonList: Pokemon[] = await Promise.all(data.results.map(async (item: any): Promise<any> => {
        const res = await fetch(item.url)
        const data = await res.json()
        return ({
            id: data.id,
            name: data.name,
            imgSrc: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data.id.toString().padStart(3, "0")}.png`,
            types: data.types.map((type: any) => ({ name: type.type.name }))
        })
    }))

    return pokemonList
}