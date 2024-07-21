"use client";

// Import
import React, { useState, useEffect } from 'react'
import Card from './Card'
import Image from 'next/image';
import { fetchPokemon } from '@/lib/hooks'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { Option, Pokemon, SORT_BY_OPTIONS, FILTER_BY_OPTIONS } from '@/lib/data';
import Dropdown from './Dropdown';

export default function CardGrid() {
  // useInView hook for observer scroll
  const { ref, inView } = useInView()
  // states
  const [sortBy, setSortBy] = useState<Option>({ 
    "value": "id",
    "label": "ID"
  })
  const [filterBy, setFilterBy] = useState<Option>({
    "value": "id",
    "label": "ID"
  })
  const [fetchedPokemon, setFetchedPokemon] = useState<Pokemon[]>([])

  // using infinite query to fetch on scroll down
  const { status, data, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['data'],
    queryFn: async ({ pageParam }) => {
      const res = await fetchPokemon(pageParam)
      return res
    },
    initialPageParam: 0,
    getNextPageParam: (_, pages) => pages.length,
  })

  // fetch next page of pokemon when bottom is in view
  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  // sort pokemon list
  useEffect(() => {
    if (!data) {
      setFetchedPokemon([])
    } else {
      const pokemonList = data.pages.flat();
      pokemonList.sort((a, b) => {
        return a[sortBy.value] > b[sortBy.value] ? 1 : -1
      })
      setFetchedPokemon(pokemonList)
    }
  }, [data, sortBy])

  return (
    <>
      {
        status === 'pending' ? (
          <div className='h-4/5 flex flex-col justify-center items-center gap-4'>
            <Image className='animate-spin' src="/pokeball.svg" alt="loading" width={100} height={100}/>
            <span className='text-lg leading-none'>Loading...</span>
          </div>
        ) : status === 'error' ? (
          <div className='h-4/5 flex flex-col justify-center items-center gap-4'>
            <Image src="/pokeball-open.svg" alt="loading" width={100} height={100}/>
            <span className='text-lg leading-none'>An error has occured :(</span>
          </div>
        ) : (
          <div className='flex flex-col'>
            <div className='flex justify-end my-4 gap-6'>
              <Dropdown title="Filter by" state={filterBy} setState={setFilterBy} dropdownOptions={FILTER_BY_OPTIONS}/>
              <Dropdown title="Sort by" state={sortBy} setState={setSortBy} dropdownOptions={SORT_BY_OPTIONS}/>
            </div>
            <div className='grid grid-cols-4 gap-6 mb-16'>
              {fetchedPokemon.map((pokemon, index) => (
                <Card 
                  key={index} 
                  id={pokemon.id} 
                  name={pokemon.name} 
                  imgSrc={pokemon.imgSrc} 
                  types={pokemon.types}
                />
              ))}
            </div>
            <div ref={ref}>
              {
                isFetchingNextPage ? (
                  <div className='flex flex-col justify-center items-center gap-4 mb-16'>
                    <Image className="aniamte-spin" src="/pokeball.svg" alt="loading" width={100} height={100}/>
                    <span className='text-lg leading-none'>Loading more...</span>
                  </div>
                ) : !hasNextPage ? (
                  <div className='flex flex-col justify-center items-center gap-4 mb-16'>
                    <Image src="/pokeball-open.svg" alt="loading" width={100} height={100}/>
                    <span className='text-lg leading-none'>No more Pokemon left</span>
                  </div>
                ) : <></>
              }
            </div>          
          </div>
        )
      }
    </>
  )
}