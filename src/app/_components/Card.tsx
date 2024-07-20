// Imports
import Image from 'next/image'
import Type from './Type'
import { Pokemon } from '@/lib/data'

export default function Card({ id, name, imgSrc, types }: Pokemon) {
  return (
    <div className='bg-slate-700 clip-border'>
      <div className="clip-inner bg-white p-3">
        <div className='relative w-[400px]'>
          <Image 
            src="/pokeball.svg" 
            alt="card background" 
            width={400}
            height={400}
            className='absolute object-contain opacity-25 left-4 top-20 rotate-12' 
            style={{ zIndex: "-10" }}
          />
        </div>
        <div className='flex flex-col p-4 pr-0'>
          <span className='text-2xl font-bold'>{`#${id.toString().padStart(3, "0")}`}</span>
          <div className='flex justify-center'>
            <Image src={imgSrc} alt={`Image of ${name}`} width={200} height={200}/>
          </div>
          <div className='flex gap-1 justify-end pt-1'>
            {types.map((type, index) => (
              <Type key={index} type={type.name}/>
            ))}
          </div>
          <div className='flex justify-end text-3xl font-bold'>
            {name.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  )
}