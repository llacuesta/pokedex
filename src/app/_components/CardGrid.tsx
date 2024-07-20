// Import
import React from 'react'
import Card from './Card'
import { useFetchAllPokemon } from '@/api/hooks'

export default async function CardGrid() {
  const data = await useFetchAllPokemon(151)
  
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