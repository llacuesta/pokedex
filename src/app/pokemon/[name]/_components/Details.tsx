// Imports
import { PokemonDetails } from '@/lib/data'
import React from 'react'
import Image from "next/image"
import Type from "@/app/_components/Type"
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'

export default function Details({ pokemon }: { pokemon: PokemonDetails }) {
  return (
    <>
      <div className="w-full flex gap-8">
        <div className='flex flex-col w-[40%]'>
          <div className="flex gap-4 items-end">
            <span className='text-5xl font-extrabold'>{pokemon.name.toUpperCase()}</span>
            <span className='text-2xl'>{`${pokemon.id.toString().padStart(4, "0")}`}</span>
          </div>
          <div className='flex gap-2 py-2'>
            {pokemon.types.map((type, index) => (
              <Type key={index} type={type.name}/>
            ))}
          </div>
          <div className='flex flex-col items-center p-4'>
            <Image src={pokemon.imgSrc} alt={`Image of ${pokemon.name}`} width={350} height={350} />
            <span className='text-md leading-none capitalize italic'>{`${pokemon.name}, the ${pokemon.genus}`}</span>
          </div>
          <Separator className='border border-gray'/>
          <div className='flex flex-col gap-2 pt-4'>
            <span className='text-2xl font-bold'>Pokédex Entry</span>
            <span className='text-sm'>{pokemon.flavorText}</span>
          </div>
        </div>
        <div className='flex flex-col w-[60%] gap-4'>
          <div className='flex flex-col gap-2'>
            <span className='text-2xl font-bold'>Pokémon Data</span>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4'>
                <div className='flex flex-col gap-2'>
                  <span className='text-lg font-bold'>Abilities</span>
                  <div className='flex gap-2'>
                    {pokemon.abilities.map((ability, index) => (
                      <div className='flex flex-col text-sm shadow-md border border-gray items-center justify-center px-4 capitalize rounded-lg h-14' key={index}>
                        <span>{ability.name}</span>
                        {
                          ability.isHidden ? <span className='text-xs'>{`(Hidden Ability)`}</span> : <></>
                        }
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-lg font-bold'>Appearance</span>
                  <div className='flex gap-2'>
                    <div className='flex flex-col text-sm shadow-md border border-gray justify-center px-4 capitalize rounded-lg h-14'>
                      <span>Weight</span>
                      <span className='text-xs'>{(pokemon.weight / 10).toFixed(1)}</span>
                    </div>
                    <div className='flex flex-col text-sm shadow-md border border-gray justify-center px-4 capitalize rounded-lg h-14'>
                      <span>Height</span>
                      <span className='text-xs'>{(pokemon.height / 10).toFixed(1)}</span>
                    </div>
                  </div>
                </div>                
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-lg font-bold'>Base Stats</span>
                <div className='flex flex-col gap-2'>
                  {pokemon.stats.map((stat, index) => (
                    <div className='flex gap-4 items-center' key={index}>
                      <div className='w-12 text-sm inline-flex justify-end'>{stat.name}</div>
                      <span className='text-sm font-bold w-8 inline-flex justify-center'>{stat.baseStat}</span>
                      <Progress className='[&>*]:bg-grass h-3 bg-gray' value={stat.baseStat} max={200}/>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-lg font-bold'>Type Matchups</span>
                <div className='flex flex-row gap-4'>
                  <div className='w-1/2 flex flex-col border border-gray rounded-lg shadow-lg p-4'>
                    <span>Resisted by </span>
                    <span className='text-xs leading-none pt-1'>This pokémon deals less or no damage to these types</span>
                    <div className='flex flex-wrap gap-2 pt-4'>
                      {pokemon.weakTo.map((weakness, index) => (
                        <Type key={index} type={weakness}/>
                      ))}
                    </div>
                  </div>
                  <div className='w-1/2 flex flex-col border border-gray rounded-lg shadow-lg p-4'>
                    <span>Weak against </span>
                    <span className='text-xs leading-none pt-1'>This pokémon receives more damage from these types</span>
                    <div className='flex flex-wrap gap-2 pt-4'>
                      {pokemon.weakAgainst.map((weakness, index) => (
                        <Type key={index} type={weakness}/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <span>{pokemon.weight}</span> */}
    </>
  )
}