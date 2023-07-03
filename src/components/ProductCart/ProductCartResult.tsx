import { ProductApi } from '@/Api'
import { IProduct } from '@/Interfaces/IProduct'
import Image from 'next/image'
import React from 'react'
import MoreLess from '../AddToCart/MoreLess'

interface ProductCartResultProps {
  productID: number
  productQuantity: number
}

export default async function ProductCartResult({
  productID,
  productQuantity
}: ProductCartResultProps) {
  const product = (await ProductApi(productID)) as IProduct
  return (
    <div>
      <div>
        <Image src={product.image} width={100} height={100} alt={product.title} />
      </div>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <MoreLess quantity={productQuantity} setQuantity={() => 0} />
    </div>
  )
}
