// Imports
import { HOST, Pokemon, PokemonDetails, PokemonPreview } from "@/lib/data";
import { determineTypeWeakness, abbreviateStat } from "./utils";

export const fetchPokemon = async (page: number): Promise<Pokemon[]> => {
    // request pokemon list
    const res = await fetch(`${HOST}pokemon?limit=10&offset=${page * 10}`);
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

export const fetchPokemonDetails = async (name: string): Promise<PokemonDetails | undefined> => {
    // fetch pokemon detail
    const pokemon = await fetch(`${HOST}pokemon/${name}/`);
    if (!pokemon.ok) {
        return undefined
    }
    const pokemonData = await pokemon.json()

    // fetch species detail
    const species = await fetch(`${HOST}pokemon-species/${name}/`);
    if (!species.ok) {
        return undefined
    }
    const speciesData = await species.json()

    // cleaning data
    return ({
        id: pokemonData.id,
        name: pokemonData.name,
        genus: speciesData.genera.find((genus: any) => (
            genus.language.name === "en" 
        ))?.genus ?? "Pokemon",
        weight: pokemonData.weight,
        height: pokemonData.height,
        types: pokemonData.types.map((type: any) => ({ name: type.type.name })),
        stats: pokemonData.stats.map((stat: any) => (
            { 
                baseStat: stat.base_stat,
                name: abbreviateStat(stat.stat.name)
            }
        )),
        weakTo: determineTypeWeakness(pokemonData.types.map((type: any) => (
            type.type.name
        ))).weakTo,
        weakAgainst: determineTypeWeakness(pokemonData.types.map((type: any) => (
            type.type.name
        ))).weakAgainst,
        abilities: pokemonData.abilities.map((ability: any) => (
            { 
                isHidden: ability.is_hidden, 
                name: ability.ability.name 
            }
        )),
        flavorText: speciesData.flavor_text_entries.find((flavorText: any) => (
            flavorText.language.name === "en" 
        ))?.flavor_text ?? "Pokemon Flavor Text",
        cry: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonData.id}.ogg`,
        imgSrc: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonData.id.toString().padStart(3, "0")}.png`,
        prev: pokemonData.id - 1,
        next: pokemonData.id + 1
    })
}

export const fetchPokemonPreview = async (id: number): Promise<PokemonPreview> => {
    // fetch pokemon detail
    const pokemon = await fetch(`${HOST}pokemon/${id}`);
    if (!pokemon.ok) {
        throw new Error('Error! Unable to fetch data.')
    }
    const pokemonData = await pokemon.json()

    return ({
        id: pokemonData.id,
        name: pokemonData.name,
        sprite: pokemonData.sprites.front_default
    })
}