'use client'
import { useState } from 'react'
import MoreLess from './MoreLess'
import { IProduct } from '@/Interfaces/IProduct'
import { useGlobalContext } from '@/app/Context/store'

interface AddToCartProps {
  productId: number
}

export default function AddToCart({ productId }: AddToCartProps) {
  const [quantity, setQuantity] = useState(0)
  const { productsGlobal, setProductsGlobal } = useGlobalContext()

  const addProdToCart = (productId: number, quantity: number) => {
    setProductsGlobal([
      ...productsGlobal,
      { productId: productId, productQuantity: quantity }
    ])
    setQuantity(0)
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <MoreLess quantity={quantity} setQuantity={setQuantity} />
      <button
        onClick={() => quantity > 0 && addProdToCart(productId, quantity)}
        className='bg-red-600 text-white p-2 rounded-md hover:bg-red-900 hover:font-bold'
      >
        Add to cart
      </button>
    </div>
  )
}
