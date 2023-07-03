'use client'
import { useState } from 'react'
import MoreLess from './MoreLess'

export default function AddToCart() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='flex flex-col items-center justify-center'>
      <MoreLess quantity={quantity} setQuantity={setQuantity} />
      <button
        onClick={() => console.log('Add to cart')}
        className='bg-black text-white p-2 rounded-md'
      >
        Add to cart {quantity}
      </button>
    </div>
  )
}
