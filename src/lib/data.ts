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

export interface Option {
    value: string,
    label: string
}

// Constants
export let HOST = "https://pokeapi.co/api/v2/"
export let SORT_BY_OPTIONS: Option[] = [
    {
        "value": "id",
        "label": "ID"
    },
    {
        "value": "name",
        "label": "Name"
    }
] 
export let FILTER_BY_OPTIONS: Option[] = [
    {
        "value": "id",
        "label": "ID"
    },
    {
        "value": "name",
        "label": "Name"
    }
] 