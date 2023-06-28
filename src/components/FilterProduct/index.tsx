'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function FilterProduct({}) {
  const router = useRouter()

  function order(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, filter: string) {
    e.preventDefault()
    const orderParams = new URLSearchParams(window.location.search)
    if (orderParams.get('filter') === filter) {
      orderParams.delete('filter')
    } else {
      orderParams.set('filter', filter)
    }
    const newPathname = `${window.location.pathname}?${orderParams.toString()}`
    router.push(newPathname)
  }

  return (
    <div className='w-full flex justify-end pr-16 pb-0 font-bold text-black'>
      <div>
        <button
          className='border border-black/20 p-1 rounded-lg text-xs
          hover:bg-red-700 hover:text-white'
          onClick={e => order(e, 'Price')}
        >
          Price
        </button>
      </div>
      <div>
        <button
          className='border border-black/20 p-1 rounded-lg text-xs ml-4
          hover:bg-red-700 hover:text-white'
          onClick={e => order(e, 'Popularity')}
        >
          Popularity
        </button>
      </div>
    </div>
  )
}
