// Import
import React from 'react'
import Card from './Card'

// TODO: REPLACE WITH DATA FETCH
const data = [
  {
    name: "bulbasaur",
    id: 1,
    types: [
      { name: "grass" },
      { name: "fire" },
    ],
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "bulbasaur",
    id: 10,
    types: [
      { name: "grass" },
    ],
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "bulbasaur",
    id: 100,
    types: [
      { name: "grass" },
    ],
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "bulbasaur",
    id: 1000,
    types: [
      { name: "grass" },
    ],
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "bulbasaur",
    id: 1,
    types: [
      { name: "grass" },
    ],
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "bulbasaur",
    id: 1,
    types: [
      { name: "grass" },
    ],
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "bulbasaur",
    id: 1,
    types: [
      { name: "grass" },
    ],
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "bulbasaur",
    id: 1,
    types: [
      { name: "grass" },
    ],
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "bulbasaur",
    id: 1,
    types: [
      { name: "grass" },
    ],
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "bulbasaur",
    id: 1,
    types: [
      { name: "grass" },
    ],
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  }
]

export default function CardGrid() {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {data.map((pokemon, index) => (
        <Card 
          key={index} 
          id={pokemon.id} 
          name={pokemon.name} 
          imgSrc={pokemon.imgSrc} 
          types={pokemon.types}
        />
      ))}
    </div>
  )
}