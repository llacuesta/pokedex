// Interfaces
export interface Pokemon {
    [key: string]: string | number | {},
    id: number,
    name: string,
    imgSrc: string,
    types: {
        name: string
    }[]
}

export interface PokemonDetails {
    id: number,
    name: string,
    genus: string,
    weight: number,
    height: number,
    types: {
        name: string
    }[],
    stats: {
        baseStat: number,
        name: string
    }[],
    weakTo: string[],
    weakAgainst: string[],
    abilities: {
        isHidden: boolean,
        name: string
    }[],
    flavorText: string,
    cry: string,
    imgSrc: string,
    prev: number,
    next: number
}

export interface Option {
    value: string,
    label: string
}

// Constants
export const HOST = "https://pokeapi.co/api/v2/"
export const SORT_BY_OPTIONS: Option[] = [
    {
        "value": "id",
        "label": "ID"
    },
    {
        "value": "name",
        "label": "Name"
    }
] 
export const FILTER_BY_OPTIONS: Option[] = [
    {
        "value": "id",
        "label": "ID"
    },
    {
        "value": "name",
        "label": "Name"
    }
]
export const TYPES = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy"
] as const;
export const STAT = [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed"
] as const;