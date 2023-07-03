'use client'
import { useState } from 'react'
import MoreLess from './MoreLess'
import { IProduct } from '@/Interfaces/IProduct'
import { useGlobalContext } from '@/app/Context/store'

interface AddToCartProps {
  productId: number
}

export default function AddToCart({ productId }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1)
  const { productsGlobal, setProductsGlobal } = useGlobalContext()

  return (
    <div className='flex flex-col items-center justify-center'>
      <MoreLess quantity={quantity} setQuantity={setQuantity} />
      <button
        // onClick={() => setProductsGlobal([...productsGlobal, []])}
        onClick={() =>
          setProductsGlobal([
            ...productsGlobal,
            { productId: productId, productQuantity: quantity }
          ])
        }
        className='bg-black text-white p-2 rounded-md'
      >
        Add to cart {quantity}
      </button>
    </div>
  )
}

/*
productId: number
  setProductId: Dispatch<SetStateAction<number>>
  productQuantity: number
  setProductQuantity: Dispatch<SetStateAction<number>>
*/
