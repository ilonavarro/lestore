'use client'
import { ProductsApi } from '@/Api'
import { IProduct } from '@/Interfaces/IProduct'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'

export default async function Products() {
  let data = await ProductsApi()
  console.log(data)
  // const [products, setProducts] = useState<IProduct[]>([])

  const testeProd = [
    {
      id: 1,
      title: 'teste',
      description: 'teste',
      category: 'teste',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 10,
      rating: { rate: 3, count: 2 }
    }
  ]

  const findProducts = (e: any) => {
    const search = e.target.value
    // const filteredProducts = products.filter((item: IProduct) =>
    //   item.title.toLowerCase().includes(search.toLowerCase())
    // )
    // setProducts(filteredProducts)
    console.log(search)
  }

  return (
    <>
      <input
        type='text'
        placeholder='Search'
        className='col-span-6 p-2 border-2 border-gray-300 rounded-md'
        onChange={findProducts}
      />
      <button onClick={() => (data = testeProd)}>Teste</button>
      <div className='grid grid-cols-12 p-12'>
        {testeProd.map((item: IProduct) => (
          <div key={item.id} className='col-span-6 p-2'>
            <Card Product={item} />
          </div>
        ))}
      </div>
    </>
  )
}
