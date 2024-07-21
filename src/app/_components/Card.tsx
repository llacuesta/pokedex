// Imports
import Image from 'next/image'
import Type from './Type'
import { Pokemon } from '@/lib/data'

export default function Card({ id, name, imgSrc, types }: Pokemon) {
  return (
    <div className='bg-slate-700 clip-border group'>
      <div className="clip-inner bg-white p-3 overflow-hidden">
        <div className='relative w-[400px] opacity-25' style={{ zIndex: "-10" }}>
          <span className='absolute text-6xl font-extrabold'>{`#${id.toString().padStart(3, "0")}`}</span>
          <Image 
            src="/pokeball.svg" 
            alt="card background" 
            width={400}
            height={400}
            className='absolute object-contain left-4 top-20 rotate-12 transition group-hover:animate-spin-slow' 
          />
        </div>
        <div className='flex flex-col p-4 pr-0'>
          <span className='text-2xl font-extrabold'>{`#${id.toString().padStart(3, "0")}`}</span>
          <div className='flex justify-center'>
            <Image src={imgSrc} alt={`Image of ${name}`} width={200} height={200} className='transition group-hover:scale-[1.15]'/>
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
