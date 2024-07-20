import React from 'react'

type Props = {
  type: string
}

export default function Type({ type }: Props) {
  return (
    <div className={`text-sm px-2 rounded-full text-white bg-${type}`}>{type.toUpperCase()}</div>
  )
}