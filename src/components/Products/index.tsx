'use client'
import { IProduct } from '@/Interfaces/IProduct'
import Card from '../Card'
import FilterProduct from '../FilterProduct'
import React, { useState, useEffect } from 'react'

interface ProductsProps {
  Products: IProduct[]
}

export default function Products({ Products }: ProductsProps) {
  const isDataNotEmpty = !(!Array.isArray(Products) || Products.length === 0 || !Products)
  // const [filterPrice, setFilterPrice] = React.useState<number[]>([0, 0])
  // const handleFilterPrice = (price: number[]) => {}
  const [filterPrice, setFilterPrice] = useState<Boolean>(false)
  console.log(filterPrice)

  const [priceArrange, setPriceArrange] = useState<ProductsProps>({ Products })

  function exibitPrice() {
    // filterPrice && {
    //   // const filtered = Products.filter(item => item.price >= filterPrice)
    //   // setPriceArrange({ Products: filtered })
    //   setPriceArrange(priceArrange.filter(item => item.price >= filterPrice))

    // }
    console.log(Products.sort((a, b) => a.price - b.price))
    // setPriceArrange({ Products: Products.sort((a, b) => a.price - b.price) })
  }

  useEffect(() => {
    // if (filterPrice) {
    //   const filtered = Products.filter(item => item.price >= filterPrice)
    //   setPriceArrange({ Products: filtered
    exibitPrice()
  }, [filterPrice])

  return (
    <main className='w-full flex flex-col items-center justify-center mt-8'>
      {isDataNotEmpty ? (
        <section>
          <FilterProduct filterPrice={filterPrice} setFilterPrice={setFilterPrice} />
          <div className='grid grid-cols-12 p-12 pt-0'>
            {Products.map(item => (
              <div key={item.id} className='col-span-6 p-2'>
                <Card Product={item} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div>
          <h2>Ops, no results</h2>
        </div>
      )}
    </main>
  )
}
