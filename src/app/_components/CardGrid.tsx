"use client";

// Import
import React, { useEffect } from 'react'
import Card from './Card'
import Image from 'next/image';
import { fetchPokemon } from '@/api/hooks'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer';

export default function CardGrid() {
  // useInView hook for observer scroll
  const { ref, inView } = useInView()

  // using infinite query to fetch on scroll down
  const { status, data, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['query'],
    queryFn: async ({ pageParam }) => {
      const res = await fetchPokemon(pageParam)
      return res
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.length + 1,
  })

  // fetch next page of pokemon when bottom is in view
  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  return (
    <>
      {
        status === 'pending' ? (
          <div className='h-4/5 flex flex-col justify-center items-center gap-4'>
            <Image src="/pokeball.svg" alt="loading" width={100} height={100}/>
            <span className='text-lg leading-none'>Loading...</span>
          </div>
        ) : status === 'error' ? (
          <div className='h-4/5 flex flex-col justify-center items-center gap-4'>
            <Image src="/pokeball-open.svg" alt="loading" width={100} height={100}/>
            <span className='text-lg leading-none'>An error has occured :(</span>
          </div>
        ) : (
          <div className='flex flex-col gap-16'>
            <div className='grid grid-cols-4 gap-6'>
              {data.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.map((pokemon, index) => (
                    <Card 
                      key={index} 
                      id={pokemon.id} 
                      name={pokemon.name} 
                      imgSrc={pokemon.imgSrc} 
                      types={pokemon.types}
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div ref={ref}>
              {
                isFetchingNextPage ? (
                  <div className='flex flex-col justify-center items-center gap-4 mb-16'>
                    <Image src="/pokeball.svg" alt="loading" width={100} height={100}/>
                    <span className='text-lg leading-none'>Loading more...</span>
                  </div>
                ) : !hasNextPage ? (
                  <div className='h-4/5 flex flex-col justify-center items-center gap-4 mb-16'>
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