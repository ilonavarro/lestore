import { ProductApi } from '@/Api'
import React from 'react'

export default async function Product() {
  const product = await ProductApi(1)
  return (
    <div>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate}</p>
    </div>
  )
}
