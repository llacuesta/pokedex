// Interfaces
export interface Pokemon {
    id: number,
    name: string,
    imgSrc: string,
    types: {
        name: string
    }[]
}

export interface SortOption {
    value: "id" | "name",
    label: string
}

// Constants
export let HOST = "https://pokeapi.co/api/v2/"